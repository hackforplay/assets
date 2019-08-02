const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'おなじ色の どうぞうを うごかす ボタン', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const gold = {
	...base,
	name: '金色のボタン',
	module: './button-gold.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './button_gold_off.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のボタン',
	module: './button-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './button_blue_off.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のボタン',
	module: './button-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './button_green_off.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のボタン',
	module: './button-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './button_red_off.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のボタン',
	module: './button-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './button_black_off.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のボタン',
	module: './button-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './button_white_off.png' // アセットのアイコンへのパス
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
		...gold,
		scopes: scopeCreate,
		insert: './button-gold-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/e0cdb850fe315b20f436d201e94245fa.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './button-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './button-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './button-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './button-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './button-white-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...gold,
		scopes: scopeSummon,
		insert: './button-gold-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './button-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './button-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './button-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './button-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './button-white-summon.js'
			}
		]
	}
]
