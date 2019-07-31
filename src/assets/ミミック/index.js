const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーを みつけると かみついてくる', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const black = {
	...base,
	name: '黒色のミミック',
	module: './mimic-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './black_mimic.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のミミック',
	module: './mimic-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './blue_mimic.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のミミック',
	module: './mimic-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './green_mimic.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のミミック',
	module: './mimic-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './red_mimic.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のミミック',
	module: './mimic-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './white_mimic.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のミミック',
	module: './mimic-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './yellow_mimic.png', // アセットのアイコンへのパス
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
		...red,
		scopes: scopeCreate,
		insert: './mimic-red-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/8238d60a3d6a6bc3e0af171e69a38bdd.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './mimic-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './mimic-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './mimic-green-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './mimic-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './mimic-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...red,
		scopes: scopeSummon,
		insert: './mimic-red-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './mimic-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './mimic-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './mimic-green-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './mimic-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './mimic-yellow-summon.js'
			}
		]
	}
]
