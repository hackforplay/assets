const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'だんだん、とうめいになっていく、こわいモンスター', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const purple = {
	...base,
	name: '紫色のゴースト',
	module: './ghost-purple.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './ghost_purple.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のゴースト',
	module: './ghost-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './ghost_blue.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のゴースト',
	module: './ghost-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './ghost_green.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のゴースト',
	module: './ghost-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './ghost_red.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のゴースト',
	module: './ghost-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './ghost_white.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のゴースト',
	module: './ghost-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './ghost_yellow.png', // アセットのアイコンへのパス
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
		...purple,
		scopes: scopeCreate,
		insert: './ghost-purple-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/652f35cd160588bf174cdcc2252e7709.gif', // サムネイル画像
		children: [
			{
				...blue,
				scopes: scopeCreate,
				insert: './ghost-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './ghost-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './ghost-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './ghost-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './ghost-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...purple,
		scopes: scopeSummon,
		insert: './ghost-purple-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...blue,
				scopes: scopeSummon,
				insert: './ghost-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './ghost-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './ghost-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './ghost-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './ghost-yellow-summon.js'
			}
		]
	}
]
