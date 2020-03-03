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
	module: './スキルbook-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './スキルbook_blue.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のスキルブック',
	module: './スキルbook-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './スキルbook_black.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のスキルブック',
	module: './スキルbook-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './スキルbook_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のスキルブック',
	module: './スキルbook-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './スキルbook_red.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のスキルブック',
	module: './スキルbook-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './スキルbook_white.png' // アセットのアイコンへのパス
}

const yellow = {
	...base,
	name: '黄色のスキルブック',
	module: './スキルbook-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './スキルbook_yellow.png' // アセットのアイコンへのパス
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
		insert: './スキルbook-blue-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/f777a68142b1e9604087ffef5d3290ad.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './スキルbook-black-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './スキルbook-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './スキルbook-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './スキルbook-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './スキルbook-yellow-create.js'
			}
		]
	},
	// しょうかんするコード
	{
		...blue,
		scopes: scopeSummon,
		insert: './スキルbook-blue-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './スキルbook-black-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './スキルbook-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './スキルbook-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './スキルbook-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './スキルbook-yellow-summon.js'
			}
		]
	},
	// おとすコード
	{
		...blue,
		scopes: scopeDrop,
		insert: './スキルbook-blue-drop.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeDrop,
				insert: './スキルbook-black-drop.js'
			},
			{
				...green,
				scopes: scopeDrop,
				insert: './スキルbook-green-drop.js'
			},
			{
				...red,
				scopes: scopeDrop,
				insert: './スキルbook-red-drop.js'
			},
			{
				...white,
				scopes: scopeDrop,
				insert: './スキルbook-white-drop.js'
			},
			{
				...yellow,
				scopes: scopeDrop,
				insert: './スキルbook-yellow-drop.js'
			}
		]
	}
]
