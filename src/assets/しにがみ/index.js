const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーを おいかける こわいモンスター', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const purple = {
	...base,
	name: '紫色のしにがみ',
	module: './reaper-purple.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './reaper_purple.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のしにがみ',
	module: './reaper-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './reaper_black.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のしにがみ',
	module: './reaper-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './reaper_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のしにがみ',
	module: './reaper-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './reaper_red.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のしにがみ',
	module: './reaper-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './reaper_white.png' // アセットのアイコンへのパス
}

const yellow = {
	...base,
	name: '黄色のしにがみ',
	module: './reaper-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './reaper_yellow.png' // アセットのアイコンへのパス
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
		...purple,
		scopes: scopeCreate,
		insert: './reaper-purple-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/9eb0dcf45c1993d5e2d04c73e5214792.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './reaper-black-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './reaper-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './reaper-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './reaper-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './reaper-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...purple,
		scopes: scopeSummon,
		insert: './reaper-purple-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './reaper-black-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './reaper-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './reaper-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './reaper-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './reaper-yellow-summon.js'
			}
		]
	}
]
