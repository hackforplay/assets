const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'じかんがたつと、べつのモンスターに、へんしんする', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const black = {
	...base,
	name: '黒色のタマゴ',
	module: './monster_egg-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './monster_egg_black.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のタマゴ',
	module: './monster_egg-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './monster_egg_blue.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のタマゴ',
	module: './monster_egg-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './monster_egg_green.png', // アセットのアイコンへのパス
	plan: 'free'
}

const red = {
	...base,
	name: '赤色のタマゴ',
	module: './monster_egg-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './monster_egg_red.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のタマゴ',
	module: './monster_egg-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './monster_egg_white.png', // アセットのアイコンへのパス
	plan: 'paid' // 'free' にする
}

const yellow = {
	...base,
	name: '黄色のタマゴ',
	module: './monster_egg-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './monster_egg_yellow.png', // アセットのアイコンへのパス
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
		...green,
		scopes: scopeCreate,
		insert: './monster_egg-green-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/d00795078302993a4c525ec60a34012c.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './monster_egg-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './monster_egg-blue-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './monster_egg-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './monster_egg-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './monster_egg-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...green,
		scopes: scopeSummon,
		insert: './monster_egg-green-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './monster_egg-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './monster_egg-blue-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './monster_egg-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './monster_egg-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './monster_egg-yellow-summon.js'
			}
		]
	}
]
