const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'おかねをつかって、買ってみよう', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const merchant = {
	...base,
	name: 'しょうにん',
	module: './merchant-normal.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './merchant.png', // アセットのアイコンへのパス
	plan: 'free' // 'free' にする
}

const fire = {
	...base,
	name: 'ほのおのしょうにん',
	module: './merchant-fire.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './merchant_fire.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const water = {
	...base,
	name: 'みずのしょうにん',
	module: './merchant-water.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './merchant_water.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const wind = {
	...base,
	name: 'かぜのしょうにん',
	module: './merchant-wind.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './merchant_wind.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const light = {
	...base,
	name: 'ひかりのしょうにん',
	module: './merchant-light.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './merchant_light.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const dark = {
	...base,
	name: 'やみのしょうにん',
	module: './merchant-dark.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './merchant_dark.png', // アセットのアイコンへのパス
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
	sco.ぶつかったとき,
	sco.メッセージされたとき,
	sco.みつけたとき,
	sco.タップされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...merchant,
		scopes: scopeCreate,
		insert: './merchant-normal-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/97980fd989d125a85e42aeb7011bc8ac.gif', // サムネイル画像
		children: [
			{
				...fire,
				scopes: scopeCreate,
				insert: './merchant-fire-create.js'
			},
			{
				...water,
				scopes: scopeCreate,
				insert: './merchant-water-create.js'
			},
			{
				...wind,
				scopes: scopeCreate,
				insert: './merchant-wind-create.js'
			},
			{
				...light,
				scopes: scopeCreate,
				insert: './merchant-light-create.js'
			},
			{
				...dark,
				scopes: scopeCreate,
				insert: './merchant-dark-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...merchant,
		scopes: scopeSummon,
		insert: './merchant-normal-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...fire,
				scopes: scopeSummon,
				insert: './merchant-fire-summon.js'
			},
			{
				...water,
				scopes: scopeSummon,
				insert: './merchant-water-summon.js'
			},
			{
				...wind,
				scopes: scopeSummon,
				insert: './merchant-wind-summon.js'
			},
			{
				...light,
				scopes: scopeSummon,
				insert: './merchant-light-summon.js'
			},
			{
				...dark,
				scopes: scopeSummon,
				insert: './merchant-dark-summon.js'
			}
		]
	}
]
