const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'かべ と ゆか、トグルスイッチで きりかえられる', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const yellow = {
	...base,
	name: '黄色のとつブロック',
	module: './pf-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './pf_yellow_on.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のとつブロック',
	module: './pf-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './pf_blue_on.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のとつブロック',
	module: './pf-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './pf_green_on.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のとつブロック',
	module: './pf-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './pf_red_on.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のとつブロック',
	module: './pf-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './pf_black_on.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のとつブロック',
	module: './pf-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './pf_white_on.png' // アセットのアイコンへのパス
}

const scopeCreate = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ゲームがはじまったとき
]

/*
const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.こうげきされたとき,
	sco.たおされたとき,
	sco.ふまれたとき,
	sco.ぶつかったとき,
	sco.メッセージされたとき
]
*/

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...red,
		scopes: scopeCreate,
		insert: './pf-red-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/b840030465db07b2ab4dc8b7e4ba0583.gif', // サムネイル画像
		children: [
			{
				...blue,
				scopes: scopeCreate,
				insert: './pf-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './pf-green-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './pf-yellow-create.js'
			},
			{
				...black,
				scopes: scopeCreate,
				insert: './pf-black-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './pf-white-create.js'
			}
		]
	}
	/*
	// 「◯◯を改造する」ファイルに入るコード
	{
		...red,
		scopes: scopeSummon,
		insert: './pf-red-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...blue,
				scopes: scopeSummon,
				insert: './pf-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './pf-green-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './pf-yellow-summon.js'
			}
		]
	}
	*/
]
