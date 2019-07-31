const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'こうげきされるまで とうめい。 ばくだんで はんげきしてくるぞ', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const black = {
	...base,
	name: '黒色のニンジャ',
	module: './ninja-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './black_chameleon_ninja.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のニンジャ',
	module: './ninja-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './blue_chameleon_ninja.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のニンジャ',
	module: './ninja-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './green_chameleon_ninja.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のニンジャ',
	module: './ninja-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './red_chameleon_ninja.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のニンジャ',
	module: './ninja-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './white_chameleon_ninja.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のニンジャ',
	module: './ninja-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './yellow_chameleon_ninja.png', // アセットのアイコンへのパス
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
		...black,
		scopes: scopeCreate,
		insert: './ninja-black-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/2562ffba47780cd72d1afa14af2c8161.gif', // サムネイル画像
		children: [
			{
				...blue,
				scopes: scopeCreate,
				insert: './ninja-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './ninja-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './ninja-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './ninja-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './ninja-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...black,
		scopes: scopeSummon,
		insert: './ninja-black-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...blue,
				scopes: scopeSummon,
				insert: './ninja-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './ninja-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './ninja-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './ninja-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './ninja-yellow-summon.js'
			}
		]
	}
]
