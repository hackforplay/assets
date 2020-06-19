const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'コウモリじょうたいのときは、ムテキ', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const black = {
	...base,
	name: '黒色のドラキュラ',
	module: './vampire-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './vampire_black.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のドラキュラ',
	module: './vampire-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './vampire_blue.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のドラキュラ',
	module: './vampire-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './vampire_green.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のドラキュラ',
	module: './vampire-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './vampire_red.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のドラキュラ',
	module: './vampire-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './vampire_white.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のドラキュラ',
	module: './vampire-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './vampire_yellow.png', // アセットのアイコンへのパス
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
	sco.みつけたとき,
	sco.タップされたとき,
	sco.マップがかわったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...black,
		scopes: scopeCreate,
		insert: './vampire-black-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/bfcc8a84db7a5fba5cb512750d4b9b7b.gif', // サムネイル画像
		children: [
			{
				...blue,
				scopes: scopeCreate,
				insert: './vampire-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './vampire-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './vampire-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './vampire-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './vampire-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...black,
		scopes: scopeSummon,
		insert: './vampire-black-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...blue,
				scopes: scopeSummon,
				insert: './vampire-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './vampire-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './vampire-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './vampire-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './vampire-yellow-summon.js'
			}
		]
	}
]
