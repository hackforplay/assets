const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーをおいかける。やられると、したいになる', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const black = {
	...base,
	name: '黒色のゾンビ',
	module: './zombie-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './zombie_black.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のゾンビ',
	module: './zombie-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './zombie_blue.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のゾンビ',
	module: './zombie-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './zombie_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のゾンビ',
	module: './zombie-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './zombie_red.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のゾンビ',
	module: './zombie-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './zombie_white.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のゾンビ',
	module: './zombie-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './zombie_yellow.png', // アセットのアイコンへのパス
	plan: 'paid'
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
	sco.メッセージされたとき,
	sco.みつけたとき,
	sco.タップされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...green,
		scopes: scopeCreate,
		insert: './zombie-green-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './zombie-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './zombie-blue-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './zombie-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './zombie-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './zombie-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...green,
		scopes: scopeSummon,
		insert: './zombie-green-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './zombie-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './zombie-blue-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './zombie-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './zombie-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './zombie-yellow-summon.js'
			}
		]
	}
]
