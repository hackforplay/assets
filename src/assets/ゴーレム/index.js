const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'うごきはおそいが、こうげきされると、やりかえす', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const black = {
	...base,
	name: '黒色のゴーレム',
	module: './golem-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './golem_black.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のゴーレム',
	module: './golem-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './golem_blue.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のゴーレム',
	module: './golem-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './golem_green.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のゴーレム',
	module: './golem-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './golem_red.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のゴーレム',
	module: './golem-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './golem_white.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のゴーレム',
	module: './golem-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './golem_yellow.png', // アセットのアイコンへのパス
	plan: 'free'
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
		...yellow,
		scopes: scopeCreate,
		insert: './golem-yellow-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		// thumbnail: 'https://i.gyazo.com/71878b0e122829d2224eabb557905079.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './golem-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './golem-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './golem-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './golem-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './golem-white-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...yellow,
		scopes: scopeSummon,
		insert: './golem-yellow-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './golem-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './golem-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './golem-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './golem-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './golem-white-summon.js'
			}
		]
	}
]
