const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'プレイヤーをみつけると かけよってくる', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const brown = {
	...base,
	name: '茶色のイヌ',
	module: './dog-brown.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dog_brown.png', // アセットのアイコンへのパス
	plan: 'free'
}

const black = {
	...base,
	name: '黒色のイヌ',
	module: './dog-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dog_black.png', // アセットのアイコンへのパス
	plan: 'free'
}

const bulldog = {
	...base,
	name: 'ブルドッグ',
	module: './dog-bulldog.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dog_bulldog.png', // アセットのアイコンへのパス
	plan: 'free'
}

const poodle = {
	...base,
	name: 'プードル',
	module: './dog-poodle.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dog_poodle.png', // アセットのアイコンへのパス
	plan: 'free'
}

const shibainu = {
	...base,
	name: 'しばいぬ',
	module: './dog-shibainu.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dog_shibainu.png', // アセットのアイコンへのパス
	plan: 'free'
}

const white = {
	...base,
	name: '白色のイヌ',
	module: './dog-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './dog_white.png', // アセットのアイコンへのパス
	plan: 'free'
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
		insert: './dog-brown-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './dog-black-create.js'
			},
			{
				...bulldog,
				scopes: scopeCreate,
				insert: './dog-bulldog-create.js'
			},
			{
				...poodle,
				scopes: scopeCreate,
				insert: './dog-poodle-create.js'
			},
			{
				...shibainu,
				scopes: scopeCreate,
				insert: './dog-shibainu-create.js'
			},
			{
				...white,
				scopes: scopeCreate,
				insert: './dog-white-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...brown,
		scopes: scopeSummon,
		insert: './dog-brown-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './dog-black-summon.js'
			},
			{
				...bulldog,
				scopes: scopeSummon,
				insert: './dog-bulldog-summon.js'
			},
			{
				...poodle,
				scopes: scopeSummon,
				insert: './dog-poodle-summon.js'
			},
			{
				...shibainu,
				scopes: scopeSummon,
				insert: './dog-shibainu-summon.js'
			},
			{
				...white,
				scopes: scopeSummon,
				insert: './dog-white-summon.js'
			}
		]
	}
]
