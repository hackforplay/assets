const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'ランダムにテレポートし プレイヤーをみつけると まほうでこうげき', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const blue = {
	...base,
	name: '青色のまじょねこ',
	module: './witch_cat-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './blue_witch_cat.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のまじょねこ',
	module: './witch_cat-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './black_witch_cat.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のまじょねこ',
	module: './witch_cat-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './green_witch_cat.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のまじょねこ',
	module: './witch_cat-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './red_witch_cat.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のまじょねこ',
	module: './witch_cat-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './white_witch_cat.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のまじょねこ',
	module: './witch_cat-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './yellow_witch_cat.png', // アセットのアイコンへのパス
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
		...blue,
		scopes: scopeCreate,
		insert: './witch_cat-blue-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/0a2ad658e70f2cdfc81bbe3df8f2664c.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './witch_cat-black-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './witch_cat-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './witch_cat-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './witch_cat-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './witch_cat-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...blue,
		scopes: scopeSummon,
		insert: './witch_cat-blue-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './witch_cat-black-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './witch_cat-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './witch_cat-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './witch_cat-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './witch_cat-yellow-summon.js'
			}
		]
	}
]
