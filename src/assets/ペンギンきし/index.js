const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーを みつけると ちょとつもうしん', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const black = {
	...base,
	name: '黒色のペンギンきし',
	module: './penguin_knight-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './black_penguin_knight.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のペンギンきし',
	module: './penguin_knight-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './blue_penguin_knight.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のペンギンきし',
	module: './penguin_knight-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './green_penguin_knight.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のペンギンきし',
	module: './penguin_knight-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './red_penguin_knight.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のペンギンきし',
	module: './penguin_knight-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './white_penguin_knight.png' // アセットのアイコンへのパス
}

const yellow = {
	...base,
	name: '黄色のペンギンきし',
	module: './penguin_knight-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './yellow_penguin_knight.png' // アセットのアイコンへのパス
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
		insert: './penguin_knight-red-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './penguin_knight-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './penguin_knight-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './penguin_knight-green-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './penguin_knight-white-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './penguin_knight-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...red,
		scopes: scopeSummon,
		insert: './penguin_knight-red-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './penguin_knight-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './penguin_knight-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './penguin_knight-green-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './penguin_knight-white-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './penguin_knight-yellow-summon.js'
			}
		]
	}
]
