const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーをみつけると こぶんのスライムをしょうかん', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const blue = {
	...base,
	name: '青色のボススライム',
	module: './bossslime-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './blue_bossslime.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のボススライム',
	module: './bossslime-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './black_bossslime.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のボススライム',
	module: './bossslime-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './green_bossslime.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のボススライム',
	module: './bossslime-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './red_bossslime.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のボススライム',
	module: './bossslime-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './white_bossslime.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のボススライム',
	module: './bossslime-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './yellow_bossslime.png', // アセットのアイコンへのパス
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
		insert: './bossslime-blue-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './bossslime-black-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './bossslime-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './bossslime-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './bossslime-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './bossslime-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...blue,
		scopes: scopeSummon,
		insert: './bossslime-blue-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './bossslime-black-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './bossslime-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './bossslime-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './bossslime-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './bossslime-yellow-summon.js'
			}
		]
	}
]
