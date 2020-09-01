const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const green = {
	...base,
	name: '緑色のほうせき',
	description: 'おかねを 1 ふやす ほうせき（ふやす数字は 変えられる）', // 説明文（日本語）
	module: './gem-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './gem_green.png' // アセットのアイコンへのパス
}

const blue = {
	...base,
	name: '青色のほうせき',
	description: 'おかねを 5 ふやす ほうせき（ふやす数字は 変えられる）',
	module: './gem-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './gem_blue.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のほうせき',
	description: 'おかねを 20 ふやす ほうせき（ふやす数字は 変えられる）',
	module: './gem-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './gem_red.png' // アセットのアイコンへのパス
}

const silver = {
	...base,
	name: '銀色のほうせき',
	description: 'おかねを 50 ふやす ほうせき（ふやす数字は 変えられる）',
	module: './gem-silver.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './gem_silver.png' // アセットのアイコンへのパス
}

const gold = {
	...base,
	name: '金色のほうせき',
	description: 'おかねを 100 ふやす ほうせき（ふやす数字は 変えられる）',
	module: './gem-gold.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './gem_gold.png' // アセットのアイコンへのパス
}

const sky = {
	...base,
	name: '水色のほうせき',
	description: 'おかねを 300 ふやす ほうせき（ふやす数字は 変えられる）',
	module: './gem-sky.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './gem_sky.png' // アセットのアイコンへのパス
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
	sco.こうげきするとき,
	sco.あるいたとき,
	sco.タップされたとき,
	sco.マップがかわったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...green,
		scopes: scopeCreate,
		insert: './gem-green-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/32c95112b111edbac65d253c839a0e52.gif', // サムネイル画像
		children: [
			{
				...blue,
				scopes: scopeCreate,
				insert: './gem-blue-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './gem-red-create.js'
			},
			{
				...silver,
				scopes: scopeCreate,
				insert: './gem-silver-create.js'
			},
			{
				...gold,
				scopes: scopeCreate,
				insert: './gem-gold-create.js'
			},
			{
				...sky,
				scopes: scopeCreate,
				insert: './gem-sky-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...green,
		scopes: scopeSummon,
		insert: './gem-green-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...blue,
				scopes: scopeSummon,
				insert: './gem-blue-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './gem-red-summon.js'
			},
			{
				...silver,
				scopes: scopeSummon,
				insert: './gem-silver-summon.js'
			},
			{
				...gold,
				scopes: scopeSummon,
				insert: './gem-gold-summon.js'
			},
			{
				...sky,
				scopes: scopeSummon,
				insert: './gem-sky-summon.js'
			}
		]
	}
]
