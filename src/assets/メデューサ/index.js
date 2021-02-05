const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーをみつけると せきかこうせん でこうげき', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const black = {
	...base,
	name: '黒色のメデューサ',
	module: './medusa-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './medusa_black.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のメデューサ',
	module: './medusa-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './medusa_blue.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のメデューサ',
	module: './medusa-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './medusa_green.png', // アセットのアイコンへのパス
	plan: 'free'
}

const red = {
	...base,
	name: '赤色のメデューサ',
	module: './medusa-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './medusa_red.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のメデューサ',
	module: './medusa-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './medusa_white.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のメデューサ',
	module: './medusa-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './medusa_yellow.png', // アセットのアイコンへのパス
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
		...green,
		scopes: scopeCreate,
		insert: './medusa-green-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/68960552c3b9454f7395f878240d0bd1.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './medusa-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './medusa-blue-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './medusa-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './medusa-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './medusa-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...green,
		scopes: scopeSummon,
		insert: './medusa-green-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './medusa-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './medusa-blue-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './medusa-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './medusa-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './medusa-yellow-summon.js'
			}
		]
	}
]
