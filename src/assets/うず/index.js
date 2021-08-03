const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.スキル, // カテゴリーの参照を配列で指定する
	description: 'まほうの うず。スピードは おそい', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const yellow = {
	...base,
	name: '黄色のうず',
	module: './eddy-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_yellow.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のうず',
	module: './eddy-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_blue.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のうず',
	module: './eddy-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のうず',
	module: './eddy-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_red.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のうず',
	module: './eddy-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './eddy_black.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のうず',
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
	sco.ふまれたとき,
	sco.どかれたとき
]

const scopeSkill = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.つくられたとき,
	sco.つねに,
	sco.すすめなかったとき,
	sco.マップがかわったとき,
	sco.タップされたとき
]

const scopeGive = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ふまれたとき,
	sco.どかれたとき,
	sco.ぶつかったとき
]

module.exports = [
	// Skill
	{
		...red,
		scopes: scopeSkill,
		insert: './eddy-red-skill.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSkill,
				insert: './eddy-black-skill.js'
			},
			{
				...blue,
				scopes: scopeSkill,
				insert: './eddy-blue-skill.js'
			},
			{
				...green,
				scopes: scopeSkill,
				insert: './eddy-green-skill.js'
			},
			{
				...white,
				scopes: scopeSkill,
				insert: './eddy-white-skill.js'
			},
			{
				...yellow,
				scopes: scopeSkill,
				insert: './eddy-yellow-skill.js'
			}
		]
	},
	// Give
	{
		...red,
		scopes: scopeGive,
		insert: './eddy-red-give.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeGive,
				insert: './eddy-black-give.js'
			},
			{
				...blue,
				scopes: scopeGive,
				insert: './eddy-blue-give.js'
			},
			{
				...green,
				scopes: scopeGive,
				insert: './eddy-green-give.js'
			},
			{
				...white,
				scopes: scopeGive,
				insert: './eddy-white-give.js'
			},
			{
				...yellow,
				scopes: scopeGive,
				insert: './eddy-yellow-give.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...red,
		scopes: scopeSummon,
		insert: './eddy-red-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './eddy-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './eddy-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './eddy-green-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './eddy-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './eddy-yellow-summon.js'
			}
		]
	}
]
