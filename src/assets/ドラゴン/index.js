const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: '火を吹いてこうげき', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const black = {
	...base,
	name: '黒色のドラゴン',
	module: './dragon-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dragon_black.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のドラゴン',
	module: './dragon-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dragon_blue.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のドラゴン',
	module: './dragon-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dragon_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のドラゴン',
	module: './dragon-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dragon_red.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のドラゴン',
	module: './dragon-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dragon_white.png' // アセットのアイコンへのパス
}

const yellow = {
	...base,
	name: '黄色のドラゴン',
	module: './dragon-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dragon_yellow.png' // アセットのアイコンへのパス
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
	sco.どかれたとき,
	sco.ぶつかったとき,
	sco.メッセージされたとき,
	sco.みつけたとき,
	sco.タップされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...red,
		scopes: scopeCreate,
		insert: './dragon-red-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/5812265ee91ccb2fd771b5ac2e48ee6d.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './dragon-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './dragon-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './dragon-green-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './dragon-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './dragon-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...red,
		scopes: scopeSummon,
		insert: './dragon-red-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './dragon-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './dragon-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './dragon-green-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './dragon-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './dragon-yellow-summon.js'
			}
		]
	}
]
