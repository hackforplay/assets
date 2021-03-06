import { createHash } from 'crypto'
import fs from 'fs'
import { values } from 'lodash'
import mkdirp from 'mkdirp'
import path from 'path'
import { IConfig, IOutput, IPackage } from '.'
import * as pathes from './pathes'

const version = process.env.NODE_ASSET_VERSION || 'test'
const bucketName = process.env.NODE_BUCKET_NAME || 'assets.hackforplay.xyz'

// Index で指定するため参照が同じままの配列にする
const cat = values(require(path.join(pathes.preference, 'categories')))
const sco = values(require(path.join(pathes.preference, 'scopes')))

const converter = (domain: string) => (config: IConfig): IOutput => {
	// インデックスを取得
	const _scopes = config.scopes ? config.scopes.map(s => sco.indexOf(s)) : null

	const category = cat.indexOf(config.category)
	// ファイルの中身を取得
	const abs = path.join(pathes.assets, domain)
	const readAsText = (file: string | null) =>
		file ? fs.readFileSync(path.join(abs, file), { encoding: 'utf8' }) : null

	// モジュール登録
	if (!json.module[config.name]) {
		const code = readAsText(config.module)
		if (code) {
			json.module[config.name] = { code }
		}
	}

	const item: IOutput = {
		name: config.name,
		description: config.description,
		scopes: _scopes,
		category,
		insertCode: readAsText(config.insert),
		iconUrl: toURL(path.join(abs, config.icon)),
		production: config.production,
		plan: config.plan,
		variations: null
	}
	if (config.thumbnail) {
		item.thumbnail = config.thumbnail // optional
	}

	if (!config.children) {
		return item
	}

	// バリエーションの分も計算して追加
	const variations = [item].concat(config.children.map(converter(domain)))
	return {
		...item,
		variations // variations を持つのは親オブジェクトだけ
	}
}

// ビルド開始
mkdirp.sync(pathes.distImg)

const json: IPackage = {
	version,
	categories: [],
	scopes: [],
	module: {},
	buttons: []
}

// 仮に全て登録
json.categories = cat.map(_ => ({
	name: _.name,
	iconUrl: toURL(path.join(pathes.preference, _.icon))
}))
json.scopes = sco.map(_ => ({
	name: _.name,
	defaultActiveCategory: cat.indexOf(_.defaultActiveCategory)
}))

for (const domain of fs.readdirSync(pathes.assets, 'utf8')) {
	const abs = path.join(pathes.assets, domain)
	if (!fs.statSync(abs).isDirectory()) continue // assets is directory
	const config = require(path.relative(__dirname, abs)) // config is /index.js
	const configs: IConfig[] = Array.isArray(config) ? config : [config]
	json.buttons = json.buttons.concat(configs.map(converter(domain)))
}

const filePath = path.join(pathes.dist, json.version) // 拡張子はつけない
fs.writeFileSync(filePath, JSON.stringify(json))
console.log('created:', filePath)

function toURL(filePath: string) {
	const buffer = fs.readFileSync(filePath)
	const hash = createHash('md5')
		.update(buffer)
		.digest('hex')
	const ext = path.extname(filePath)
	fs.copyFileSync(filePath, path.join(pathes.distImg, hash + ext))
	return `https://${bucketName}/${pathes.img}/${hash + ext}`
}
