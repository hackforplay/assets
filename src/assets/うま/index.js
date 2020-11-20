const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'あるいているところを、こうげきされると、にげる', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const brown = {
	...base,
	name: '茶色のうま',
	module: './horse-brown.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './horse_brown.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const black = {
	...base,
	name: '黒色のうま',
	module: './horse-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './horse_black.png', // アセットのアイコンへのパス
	plan: 'paid'
}

const white = {
	...base,
	name: '白色のうま',
	module: './horse-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './horse_white.png', // アセットのアイコンへのパス
	plan: 'free' // 'free' にする
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
		...brown,
		scopes: scopeCreate,
		insert: './horse-brown-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './horse-black-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './horse-white-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...brown,
		scopes: scopeSummon,
		insert: './horse-brown-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './horse-black-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './horse-white-summon.js'
			}
		]
	}
]
