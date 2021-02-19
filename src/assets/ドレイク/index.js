const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーをみつけると どくえき でこうげき', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const black = {
	...base,
	name: '黒色のドレイク',
	module: './drake-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './drake_black.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のドレイク',
	module: './drake-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './drake_blue.png', // アセットのアイコンへのパス
	plan: 'free'
}

const green = {
	...base,
	name: '緑色のドレイク',
	module: './drake-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './drake_green.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のドレイク',
	module: './drake-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './drake_red.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のドレイク',
	module: './drake-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './drake_white.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のドレイク',
	module: './drake-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './drake_yellow.png', // アセットのアイコンへのパス
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
	sco.どかれたとき,
	sco.ぶつかったとき,
	sco.メッセージされたとき,
	sco.へんすうがかわったとき,
	sco.みつけたとき,
	sco.タップされたとき,
	sco.マップがかわったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...blue,
		scopes: scopeCreate,
		insert: './drake-blue-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		// thumbnail: 'https://i.gyazo.com/71878b0e122829d2224eabb557905079.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './drake-black-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './drake-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './drake-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './drake-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './drake-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...blue,
		scopes: scopeSummon,
		insert: './drake-blue-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './drake-black-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './drake-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './drake-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './drake-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './drake-yellow-summon.js'
			}
		]
	}
]
