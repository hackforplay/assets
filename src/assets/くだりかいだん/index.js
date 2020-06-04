const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'ふむと べつのマップ(map)に いどう できる', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const down = {
	...base,
	name: 'くだりかいだん',
	module: './down-stairs.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './down_stairs.png' // アセットのアイコンへのパス
}

const scopeCreate = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ゲームがはじまったとき
]
/*
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.こうげきされたとき,
	sco.たおされたとき,
	sco.ふまれたとき,sco.どかれたとき,
	sco.ぶつかったとき,
	sco.メッセージされたとき
]
*/

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...down,
		scopes: scopeCreate,
		insert: './down-stairs-create.js',
		thumbnail: 'https://i.gyazo.com/4c045b6ab37a333cd8cf6b172a6c562b.gif', // サムネイル画像
		children: []
	}
	/*
	// 「◯◯を改造する」ファイルに入るコード
	{
		...down,
		scopes: scopeSummon,
		insert: './down-stairs-summon.js',
		children: []
	}
	*/
]
