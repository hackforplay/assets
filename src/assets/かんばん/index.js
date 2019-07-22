const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'ぶつかると 読める かんばん', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const wood = {
	...base,
	name: '木のかんばん',
	module: './sign-wood.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './sign_wood.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のかんばん',
	module: './sign-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './sign_black.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のかんばん',
	module: './sign-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './sign_blue.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のかんばん',
	module: './sign-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './sign_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のかんばん',
	module: './sign-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './sign_red.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のかんばん',
	module: './sign-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './sign_white.png' // アセットのアイコンへのパス
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
		...wood,
		scopes: scopeCreate,
		insert: './sign-wood-create.js',
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './sign-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './sign-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './sign-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './sign-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './sign-white-create.js'
			}
		]
	},

	// 「◯◯を改造する」ファイルに入るコード
	{
		...wood,
		scopes: scopeSummon,
		insert: './sign-wood-summon.js',
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './sign-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './sign-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './sign-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './sign-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './sign-white-summon.js'
			}
		]
	}
]
