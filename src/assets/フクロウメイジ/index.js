const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: '話しかけると スキルブックをくれる', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const black = {
	...base,
	name: '黒色のフクロウメイジ',
	module: './owlmage-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './owlmage_black.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const blue = {
	...base,
	name: '青色のフクロウメイジ',
	module: './owlmage-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './owlmage_blue.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のフクロウメイジ',
	module: './owlmage-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './owlmage_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のフクロウメイジ',
	module: './owlmage-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './owlmage_red.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のフクロウメイジ',
	module: './owlmage-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './owlmage_white.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のフクロウメイジ',
	module: './owlmage-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './owlmage_yellow.png', // アセットのアイコンへのパス
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
		...green,
		scopes: scopeCreate,
		insert: './owlmage-green-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/1ca1c69f4bcc829ea347862aec7a7076.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './owlmage-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './owlmage-blue-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './owlmage-red-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './owlmage-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './owlmage-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...green,
		scopes: scopeSummon,
		insert: './owlmage-green-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './owlmage-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './owlmage-blue-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './owlmage-red-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './owlmage-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './owlmage-yellow-summon.js'
			}
		]
	}
]
