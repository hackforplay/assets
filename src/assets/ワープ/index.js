const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description:
		'ふむとワープできる すごいゆか。 改造して とうめいにすると おもしろい', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const blue = {
	...base,
	name: '青色のワープ',
	module: './warp-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './warp_blue.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のワープ',
	module: './warp-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './warp_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のワープ',
	module: './warp-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './warp_red.png' // アセットのアイコンへのパス
}

const yellow = {
	...base,
	name: '黄色のワープ',
	module: './warp-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './warp_yellow.png' // アセットのアイコンへのパス
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
	sco.タップされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...blue,
		scopes: scopeCreate,
		insert: './warp-blue-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/d30d387ac8bc588b2776cdf9697880f4.gif', // サムネイル画像
		children: [
			{
				...green,
				scopes: scopeCreate,
				insert: './warp-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './warp-red-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './warp-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...blue,
		scopes: scopeSummon,
		insert: './warp-blue-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...green,
				scopes: scopeSummon,
				insert: './warp-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './warp-red-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './warp-yellow-summon.js'
			}
		]
	}
]
