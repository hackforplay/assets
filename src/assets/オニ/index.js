const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーをみつけると おいかけてくる', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const black = {
	...base,
	name: '黒色のオニ',
	module: './oni-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './oni_black.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のオニ',
	module: './oni-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './oni_blue.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のオニ',
	module: './oni-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './oni_green.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のオニ',
	module: './oni-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './oni_red.png', // アセットのアイコンへのパス
	plan: 'free'
}

const white = {
	...base,
	name: '白色のオニ',
	module: './oni-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './oni_white.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のオニ',
	module: './oni-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './oni_yellow.png', // アセットのアイコンへのパス
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
		...red,
		scopes: scopeCreate,
		insert: './oni-red-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/71878b0e122829d2224eabb557905079.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './oni-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './oni-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './oni-green-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './oni-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './oni-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...red,
		scopes: scopeSummon,
		insert: './oni-red-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './oni-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './oni-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './oni-green-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './oni-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './oni-yellow-summon.js'
			}
		]
	}
]
