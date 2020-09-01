const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [
		// sco.ゲームがはじまったとき,
		// sco.たおされたとき,
		// sco.しょうかんされたとき,
		// sco.つくられたとき,
		sco.ぶつかったとき,
		sco.こうげきされたとき,
		// sco.つねに,
		sco.ふまれたとき,
		sco.どかれたとき,
		sco.メッセージされたとき,
		sco.すすめなかったとき,
		sco.マップがかわったとき,
		sco.みつけたとき,
		sco.こうげきするとき,
		sco.あるいたとき,
		sco.タップされたとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.うごき, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: 'へんしんする',
		description: 'べつの アセットへ へんしんする',
		icon: './transform.png', // アセットのアイコンへのパス
		insert: './transform.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
