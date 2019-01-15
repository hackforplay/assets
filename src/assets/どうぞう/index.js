const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'このぞうは おなじ色のボタンを おすと うごく', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const gold = {
	...base,
	name: '金色のどうぞう',
	module: './statue-gold.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './statue_gold.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のどうぞう',
	module: './statue-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './statue_blue.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のどうぞう',
	module: './statue-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './statue_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のどうぞう',
	module: './statue-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './statue_red.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のどうぞう',
	module: './statue-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './statue_black.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のどうぞう',
	module: './statue-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './statue_white.png' // アセットのアイコンへのパス
}

const scopeCreate = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ゲームがはじまったとき
]

const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.こうげきされたとき,
	sco.たおされたとき,
	sco.ふまれたとき,
	sco.ぶつかったとき,
	sco.メッセージされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...gold,
		scopes: scopeCreate,
		insert: './statue-gold-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './statue-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './statue-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './statue-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './statue-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './statue-white-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...gold,
		scopes: scopeSummon,
		insert: './statue-gold-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './statue-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './statue-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './statue-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './statue-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './statue-white-summon.js'
			}
		]
	}
]
