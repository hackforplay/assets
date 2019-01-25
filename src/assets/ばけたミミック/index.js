const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'こうげきされると ミミックに へんしんする', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const black = {
	...base,
	name: '黒色のばけたミミック',
	module: './m_mimic-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './tbox_black_c.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のばけたミミック',
	module: './m_mimic-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './tbox_blue_c.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のばけたミミック',
	module: './m_mimic-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './tbox_green_c.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のばけたミミック',
	module: './m_mimic-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './tbox_red_c.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のばけたミミック',
	module: './m_mimic-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './tbox_white_c.png' // アセットのアイコンへのパス
}

const yellow = {
	...base,
	name: '黄色のばけたミミック',
	module: './m_mimic-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './tbox_yellow_c.png' // アセットのアイコンへのパス
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
	sco.みつけたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...red,
		scopes: scopeCreate,
		insert: './m_mimic-red-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './m_mimic-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './m_mimic-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './m_mimic-green-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './m_mimic-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './m_mimic-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...red,
		scopes: scopeSummon,
		insert: './m_mimic-red-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './m_mimic-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './m_mimic-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './m_mimic-green-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './m_mimic-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './m_mimic-yellow-summon.js'
			}
		]
	}
]
