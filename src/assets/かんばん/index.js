const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'ぶつかると 読める かんばん', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const wood = {
	...base,
	name: '木のかんばん',
	module: './sign-wood.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './sign_wood.png' // アセットのアイコンへのパス
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
		...wood,
		scopes: scopeCreate,
		insert: './sign-wood-create.js'
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...wood,
		scopes: scopeSummon,
		insert: './sign-wood-summon.js'
	}
]
