const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'ふらふらと あてもなく とびまわる', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const balck = {
	...base,
	name: 'カラス',
	module: './crow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './crow.png', // アセットのアイコンへのパス
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
		...balck,
		scopes: scopeCreate,
		insert: './crow-create.js'
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...balck,
		scopes: scopeSummon,
		insert: './crow-summon.js'
	}
]
