const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'スキルをおぼえることができるアイテム', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const blue = {
	...base,
	name: '青色のスキルブック',
	module: './skillbook-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skillbook_blue.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のスキルブック',
	module: './skillbook-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skillbook_black.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のスキルブック',
	module: './skillbook-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skillbook_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のスキルブック',
	module: './skillbook-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skillbook_red.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のスキルブック',
	module: './skillbook-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skillbook_white.png' // アセットのアイコンへのパス
}

const yellow = {
	...base,
	name: '黄色のスキルブック',
	module: './skillbook-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './skillbook_yellow.png' // アセットのアイコンへのパス
}

const scopeCreate = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ゲームがはじまったとき
]

const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.こうげきされたとき,
	sco.ぶつかったとき,
	sco.みつけたとき,
	sco.こうげきするとき,
	sco.タップされたとき
]

const scopeDrop = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.たおされたとき,
	sco.ふまれたとき,
	sco.メッセージされたとき,
	sco.すすめなかったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...blue,
		scopes: scopeCreate,
		insert: './skillbook-blue-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/f777a68142b1e9604087ffef5d3290ad.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './skillbook-black-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './skillbook-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './skillbook-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './skillbook-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './skillbook-yellow-create.js'
			}
		]
	},
	// しょうかんするコード
	{
		...blue,
		scopes: scopeSummon,
		insert: './skillbook-blue-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './skillbook-black-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './skillbook-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './skillbook-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './skillbook-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './skillbook-yellow-summon.js'
			}
		]
	},
	// おとすコード
	{
		...blue,
		scopes: scopeDrop,
		insert: './skillbook-blue-drop.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeDrop,
				insert: './skillbook-black-drop.js'
			},
			{
				...green,
				scopes: scopeDrop,
				insert: './skillbook-green-drop.js'
			},
			{
				...red,
				scopes: scopeDrop,
				insert: './skillbook-red-drop.js'
			},
			{
				...white,
				scopes: scopeDrop,
				insert: './skillbook-white-drop.js'
			},
			{
				...yellow,
				scopes: scopeDrop,
				insert: './skillbook-yellow-drop.js'
			}
		]
	}
]
