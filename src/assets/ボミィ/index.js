const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーを おいかけて ぶつかったら ばくはつ', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const black = {
	...base,
	name: '黒色のボミィ',
	module: './bomy-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './black_bomy.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のボミィ',
	module: './bomy-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './blue_bomy.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のボミィ',
	module: './bomy-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './green_bomy.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のボミィ',
	module: './bomy-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './red_bomy.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のボミィ',
	module: './bomy-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './white_bomy.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のボミィ',
	module: './bomy-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './yellow_bomy.png', // アセットのアイコンへのパス
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
	sco.タップされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...blue,
		scopes: scopeCreate,
		insert: './bomy-blue-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/96d0479ceee078b5e21768c3b2c68540.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './bomy-black-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './bomy-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './bomy-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './bomy-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './bomy-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...blue,
		scopes: scopeSummon,
		insert: './bomy-blue-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './bomy-black-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './bomy-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './bomy-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './bomy-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './bomy-yellow-summon.js'
			}
		]
	}
]
