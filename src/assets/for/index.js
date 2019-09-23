const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [
		// sco.ゲームがはじまったとき
		sco.たおされたとき,
		sco.しょうかんされたとき,
		sco.つくられたとき,
		sco.ぶつかったとき,
		sco.こうげきされたとき,
		// sco.つねに,
		sco.ふまれたとき,
		sco.メッセージされたとき,
		sco.みつけたとき,
		sco.こうげきするとき,
		// sco.じかんがすすんだとき,
		sco.すすめなかったとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.システム, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: 'れんぞくばくだん',
		description: 'れんぞくで ばくだんをおく',
		icon: './for.png', // アセットのアイコンへのパス
		insert: './for.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
