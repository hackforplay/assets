const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: '10びょうたつと、生きかえってゾンビにもどる', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const black = {
	...base,
	name: '黒色のしたい',
	module: './deadbody-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './deadbody_black.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のしたい',
	module: './deadbody-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './deadbody_blue.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のしたい',
	module: './deadbody-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './deadbody_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のしたい',
	module: './deadbody-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './deadbody_red.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のしたい',
	module: './deadbody-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './deadbody_white.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のしたい',
	module: './deadbody-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './deadbody_yellow.png', // アセットのアイコンへのパス
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
	sco.タップされたとき,
	sco.マップがかわったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...green,
		scopes: scopeCreate,
		insert: './deadbody-green-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/80e3884be40922255e9bfd566251bd77.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './deadbody-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './deadbody-blue-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './deadbody-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './deadbody-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './deadbody-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...green,
		scopes: scopeSummon,
		insert: './deadbody-green-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './deadbody-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './deadbody-blue-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './deadbody-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './deadbody-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './deadbody-yellow-summon.js'
			}
		]
	}
]
