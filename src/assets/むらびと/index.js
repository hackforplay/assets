const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'むらびと', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const alex = {
	...base,
	name: 'アレックス',
	module: './villager_alex.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_alex.png', // アセットのアイコンへのパス
	plan: 'free' // 'free' にする
}

const ally = {
	...base,
	name: 'アリー',
	module: './villager_ally.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_ally.png', // アセットのアイコンへのパス
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
	sco.ぶつかったとき,
	sco.メッセージされたとき,
	sco.みつけたとき,
	sco.タップされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...alex,
		scopes: scopeCreate,
		insert: './villager_alex-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...ally,
		scopes: scopeCreate,
		insert: './villager_ally-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...alex,
		scopes: scopeSummon,
		insert: './villager_alex-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...ally,
		scopes: scopeSummon,
		insert: './villager_ally-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
