const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'おなじ色の どうぞうをうごかす ふしぎなボタン', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const yellow = {
	...base,
	name: '黄色のトグルスイッチ',
	module: './toggle-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './toggle_yellow.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のトグルスイッチ',
	module: './toggle-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './toggle_blue.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のトグルスイッチ',
	module: './toggle-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './toggle_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のトグルスイッチ',
	module: './toggle-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './toggle_red.png' // アセットのアイコンへのパス
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
	sco.メッセージされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...red,
		scopes: scopeCreate,
		insert: './toggle-red-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...blue,
				scopes: scopeCreate,
				insert: './toggle-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './toggle-green-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './toggle-yellow-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...red,
		scopes: scopeSummon,
		insert: './toggle-red-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...blue,
				scopes: scopeSummon,
				insert: './toggle-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './toggle-green-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './toggle-yellow-summon.js'
			}
		]
	}
]
