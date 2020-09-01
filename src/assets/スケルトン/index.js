const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーをおいかけ、ゆみやでこうげきしてくる', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const black = {
	...base,
	name: '黒色のスケルトン',
	module: './skeleton-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skeleton_black.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のスケルトン',
	module: './skeleton-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skeleton_blue.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のスケルトン',
	module: './skeleton-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skeleton_green.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のスケルトン',
	module: './skeleton-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skeleton_red.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のスケルトン',
	module: './skeleton-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skeleton_white.png', // アセットのアイコンへのパス
	plan: 'free' // 'free' にする
}

const yellow = {
	...base,
	name: '黄色のスケルトン',
	module: './skeleton-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skeleton_yellow.png', // アセットのアイコンへのパス
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
		...white,
		scopes: scopeCreate,
		insert: './skeleton-white-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/ab745b6efbcb10d34fc3754ca80ccd70.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './skeleton-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './skeleton-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './skeleton-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './skeleton-red-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './skeleton-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...white,
		scopes: scopeSummon,
		insert: './skeleton-white-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './skeleton-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './skeleton-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './skeleton-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './skeleton-red-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './skeleton-yellow-summon.js'
			}
		]
	}
]
