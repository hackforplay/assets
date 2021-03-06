import { parse } from '@babel/parser'
import { File } from '@babel/types'
import test from 'ava'
import fs from 'fs'
import path from 'path'
import { pathes } from './config'

const requiredEvents = [
	'つくられたとき',
	'しょうかんされたとき',
	'つねに',
	'すすめなかったとき',
	'たおされたとき',
	'こうげきされたとき',
	'ぶつかったとき',
	'メッセージされたとき',
	'じかんがすすんだとき',
	'みつけたとき',
	'こうげきするとき',
	'タップされたとき'
]

test('Parse ECMAScript', t => {
	for (const domain of fs.readdirSync(pathes.assets)) {
		const dirPath = path.join(pathes.assets, domain)
		if (!fs.statSync(dirPath).isDirectory()) continue
		for (const fileName of fs.readdirSync(dirPath)) {
			if (path.extname(fileName) !== '.js') continue
			const sourceFilename = path.join(dirPath, fileName)
			const text = fs.readFileSync(sourceFilename, { encoding: 'utf8' })
			let file: File
			try {
				file = parse(text, {
					sourceType: 'module',
					allowAwaitOutsideFunction: true // アセットは関数の中に入ることもあるので
				})
			} catch (error) {
				console.error(error)
				t.fail(`構文エラーがあります: ${sourceFilename}`)
				continue
			}
			// 先頭で '../game' を import している => モジュール定義
			const [top, ...rest] = file.program.body
			const isModuleDefinition =
				top.type === 'ImportDeclaration' && top.source.value === '../game'
			if (!isModuleDefinition) continue
			const requireds = new Set(requiredEvents)
			const founds = new Set()
			for (const statement of rest) {
				if (statement.type !== 'ExpressionStatement') continue
				if (statement.expression.type !== 'CallExpression') continue
				if (statement.expression.callee.type !== 'MemberExpression') continue
				const { object, property } = statement.expression.callee
				if (object.type !== 'Identifier') continue
				if (object.name !== 'rule') continue
				requireds.delete(property.name)
				t.falsy(
					founds.has(property.name),
					`${sourceFilename}\nrule.${property.name} が２つ以上含まれています`
				)
				founds.add(property.name)
			}
			if (requireds.size > 0) {
				t.fail(
					`${sourceFilename}\n次のイベントがありません: ${Array.from(
						requireds.values()
					).join()}`
				)
			}
		}
	}
})
