import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import { values, includes } from 'lodash';
import Config from './config';
import Output from './output';
import * as pathes from './pathes';

interface Package {
	version: string;
	categories: any[];
	scopes: any[];
	buttons: Output[];
}

// Index で指定するため参照が同じままの配列にする
const cat = values(require(path.join(pathes.preference, 'categories')));
const sco = values(require(path.join(pathes.preference, 'scopes')));

const converter = (domain: string) => (config: Config): Output => {
	// インデックスを取得
	const _scopes = config.scopes
		? config.scopes.map(s => sco.indexOf(s))
		: null;

	const category = cat.indexOf(config.category);
	// ファイルの中身を取得
	const abs = path.join(pathes.assets, domain);
	const readAsText = (file: string | null) =>
		file
			? fs.readFileSync(path.join(abs, file), { encoding: 'utf8' })
			: null;

	return {
		name: config.name,
		description: config.description,
		scopes: _scopes,
		category,
		insertCode: readAsText(config.insert),
		moduleCode: readAsText(config.module),
		iconUrl: readAsDataURL(path.join(abs, config.icon)),
		production: config.production,
		plan: config.plan
	};
};

// ビルド開始
mkdirp.sync(pathes.dist);

const json: Package = {
	version: 'beta-1',
	categories: [],
	scopes: [],
	buttons: []
};

// 仮に全て登録
json.categories = cat.map(_ => ({
	name: _.name,
	iconUrl: readAsDataURL(path.join(pathes.preference, _.icon))
}));
json.scopes = sco.map(_ => ({
	name: _.name,
	defaultActiveCategory: cat.indexOf(_.defaultActiveCategory)
}));

for (const domain of fs.readdirSync(pathes.assets, 'utf8')) {
	const abs = path.join(pathes.assets, domain);
	if (!fs.statSync(abs).isDirectory()) continue; // assets is directory
	const config = require(path.relative(__dirname, abs)); // config is /index.js
	const configs: Config[] = Array.isArray(config) ? config : [config];
	json.buttons = json.buttons.concat(configs.map(converter(domain)));
}

const filePath = path.join(pathes.dist, json.version); // 拡張子はつけない
fs.writeFileSync(filePath, JSON.stringify(json));
console.log('created:', filePath);

function readAsDataURL(filePath: string, mimeType = 'image/png') {
	const base64 = fs.readFileSync(filePath, 'base64');
	return `data:${mimeType};base64,${base64}`;
}
