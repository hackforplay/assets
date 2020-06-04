const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'こうげきされると、でんげきをはなつ！', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const blue = {
	...base,
	name: '青色のデンキクラゲ',
	module: "./man_o'war-blue.js", // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: "./man_o'war_blue.png" // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のデンキクラゲ',
	module: "./man_o'war-black.js", // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: "./man_o'war_black.png", // アセットのアイコンへのパス
	plan: 'paid'
}

const green = {
	...base,
	name: '緑色のデンキクラゲ',
	module: "./man_o'war-green.js", // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: "./man_o'war_green.png", // アセットのアイコンへのパス
	plan: 'paid'
}

const red = {
	...base,
	name: '赤色のデンキクラゲ',
	module: "./man_o'war-red.js", // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: "./man_o'war_red.png", // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のデンキクラゲ',
	module: "./man_o'war-white.js", // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: "./man_o'war_white.png", // アセットのアイコンへのパス
	plan: 'paid'
}

const yellow = {
	...base,
	name: '黄色のデンキクラゲ',
	module: "./man_o'war-yellow.js", // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: "./man_o'war_yellow.png", // アセットのアイコンへのパス
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
	sco.タップされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...blue,
		scopes: scopeCreate,
		insert: "./man_o'war-blue-create.js", // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/63813b567a11b3f2a94556213bd116b3.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: "./man_o'war-black-create.js"
			},
			{
				...green,
				scopes: scopeCreate,
				insert: "./man_o'war-green-create.js"
			},
			{
				...red,
				scopes: scopeCreate,
				insert: "./man_o'war-red-create.js"
			},
			{
				...white,
				scopes: scopeCreate,
				insert: "./man_o'war-white-create.js"
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: "./man_o'war-yellow-create.js"
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...blue,
		scopes: scopeSummon,
		insert: "./man_o'war-blue-summon.js", // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: "./man_o'war-black-summon.js"
			},
			{
				...green,
				scopes: scopeSummon,
				insert: "./man_o'war-green-summon.js"
			},
			{
				...red,
				scopes: scopeSummon,
				insert: "./man_o'war-red-summon.js"
			},
			{
				...white,
				scopes: scopeSummon,
				insert: "./man_o'war-white-summon.js"
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: "./man_o'war-yellow-summon.js"
			}
		]
	}
]
