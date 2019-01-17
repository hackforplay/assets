const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'かぎと同じ色のドアを開けることができる', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const yellow = {
	...base,
	name: '黄色のかぎ',
	module: './key-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './key_yellow.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のかぎ',
	module: './key-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './key_blue.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のかぎ',
	module: './key-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './key_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のかぎ',
	module: './key-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './key_red.png' // アセットのアイコンへのパス
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
	sco.みつけたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...yellow,
		scopes: scopeCreate,
		insert: './key-yellow-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...blue,
				scopes: scopeCreate,
				insert: './key-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './key-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './key-red-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...yellow,
		scopes: scopeSummon,
		insert: './key-yellow-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...blue,
				scopes: scopeSummon,
				insert: './key-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './key-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './key-red-summon.js'
			}
		]
	}
]
