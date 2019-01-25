const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.スキル, // カテゴリーの参照を配列で指定する
	description: 'まほうの うず スピードは おそい', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const yellow = {
	...base,
	module: './eddy-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_yellow.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	module: './eddy-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_blue.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	module: './eddy-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	module: './eddy-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_red.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	module: './eddy-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_black.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	module: './eddy-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_white.png' // アセットのアイコンへのパス
}

const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.メッセージされたとき,
	sco.こうげきされたとき,
	sco.みつけたとき,
	sco.しょうかんされたとき,
	sco.ぶつかったとき,
	sco.ふまれたとき
]

const scopeSkill = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.つくられたとき,
	sco.しょうかんされたとき,
	sco.メッセージされたとき,
	sco.こうげきされたとき,
	sco.みつけたとき
]

const scopeGive = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ふまれたとき,
	sco.ぶつかったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	/*
	{
		...red,
		name: 'スキル赤色のうず',
		scopes: scopeSkill,
		insert: './eddy-red-skill.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				name: 'スキル黒色のうず',
				scopes: scopeSkill,
				insert: './eddy-black-skill.js'
			},
			{
				...blue,
				name: 'スキル青色のうず',
				scopes: scopeSkill,
				insert: './eddy-blue-skill.js'
			},
			{
				...green,
				name: 'スキル緑色のうず',
				scopes: scopeSkill,
				insert: './eddy-green-skill.js'
			},
			{
				...white,
				name: 'スキル白色のうず',
				scopes: scopeSkill,
				insert: './eddy-white-skill.js'
			},
			{
				...yellow,
				name: 'スキル黄色のうず',
				scopes: scopeSkill,
				insert: './eddy-yellow-skill.js'
			}
		]
	},
	*/
	// Give
	{
		...red,
		name: '赤色のうず',
		scopes: scopeGive,
		insert: './eddy-red-give.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				name: '黒色のうず',
				scopes: scopeGive,
				insert: './eddy-black-give.js'
			},
			{
				...blue,
				name: '青色のうず',
				scopes: scopeGive,
				insert: './eddy-blue-give.js'
			},
			{
				...green,
				name: '緑色のうず',
				scopes: scopeGive,
				insert: './eddy-green-give.js'
			},
			{
				...white,
				name: '白色のうず',
				scopes: scopeGive,
				insert: './eddy-white-give.js'
			},
			{
				...yellow,
				name: '黄色のうず',
				scopes: scopeGive,
				insert: './eddy-yellow-give.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...red,
		name: '赤色のうず',
		scopes: scopeSummon,
		insert: './eddy-red-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				name: '黒色のうず',
				scopes: scopeSummon,
				insert: './eddy-black-summon.js'
			},
			{
				...blue,
				name: '青色のうず',
				scopes: scopeSummon,
				insert: './eddy-blue-summon.js'
			},
			{
				...green,
				name: '緑色のうず',
				scopes: scopeSummon,
				insert: './eddy-green-summon.js'
			},
			{
				...white,
				name: '白色のうず',
				scopes: scopeSummon,
				insert: './eddy-white-summon.js'
			},
			{
				...yellow,
				name: '黄色のうず',
				scopes: scopeSummon,
				insert: './eddy-yellow-summon.js'
			}
		]
	}
]
