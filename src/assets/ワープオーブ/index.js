const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'ぶつかると もう一つの オーブに ワープできる', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const blue = {
	...base,
	name: '青色のワープオーブ',
	module: './warp_orb-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './warp_orb_blue.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のワープオーブ',
	module: './warp_orb-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './warp_orb_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のワープオーブ',
	module: './warp_orb-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './warp_orb_red.png' // アセットのアイコンへのパス
}

const yellow = {
	...base,
	name: '黄色のワープオーブ',
	module: './warp_orb-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './warp_orb_yellow.png' // アセットのアイコンへのパス
}

const vertical = {
	...base,
	name: 'たてにならんだワープオーブ',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './warp_orbs_vertical.png' // アセットのアイコンへのパス
}

const horizontal = {
	...base,
	name: 'よこにならんだワープオーブ',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './warp_orbs_horizontal.png' // アセットのアイコンへのパス
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
		...blue,
		scopes: scopeCreate,
		insert: './warp_orb-blue-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://gyazo.com/5d54db0d4bd9be660eded0846f0429e0', // サムネイル画像
		children: [
			{
				...green,
				scopes: scopeCreate,
				insert: './warp_orb-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './warp_orb-red-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './warp_orb-yellow-create.js'
			},
			{
				...vertical,
				scopes: scopeCreate,
				insert: './warp_orbs_vertical.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...horizontal,
				scopes: scopeCreate,
				insert: './warp_orbs_horizontal.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			}
		]
	},

	// 「◯◯を改造する」ファイルに入るコード
	{
		...blue,
		scopes: scopeSummon,
		insert: './warp_orb-blue-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...green,
				scopes: scopeSummon,
				insert: './warp_orb-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './warp_orb-red-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './warp_orb-yellow-summon.js'
			}
		]
	}
]
