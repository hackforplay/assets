const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'ムチのように 体をふりまわす かわいいスライム', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const blue = {
	...base,
	name: '青色のスライム',
	module: './slime-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './slime_blue.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のスライム',
	module: './slime-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './slime_black.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のスライム',
	module: './slime-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './slime_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のスライム',
	module: './slime-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './slime_red.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のスライム',
	module: './slime-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './slime_white.png' // アセットのアイコンへのパス
}

const yellow = {
	...base,
	name: '黄色のスライム',
	module: './slime-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './slime_yellow.png' // アセットのアイコンへのパス
}

const vertical = {
	...base,
	name: 'たてにならんだスライム',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './slimes_vertical.png' // アセットのアイコンへのパス
}

const horizontal = {
	...base,
	name: 'よこにならんだスライム',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './slimes_horizontal.png' // アセットのアイコンへのパス
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
	sco.メッセージされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...blue,
		scopes: scopeCreate,
		insert: './slime-blue-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './slime-black-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './slime-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './slime-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './slime-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './slime-yellow-create.js'
			}
		]
	},
	{
		...vertical,
		scopes: scopeCreate,
		insert: './slimes_vertical.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...horizontal,
		scopes: scopeCreate,
		insert: './slimes_horizontal.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...blue,
		scopes: scopeSummon,
		insert: './slime-blue-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './slime-black-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './slime-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './slime-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './slime-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './slime-yellow-summon.js'
			}
		]
	}
]
