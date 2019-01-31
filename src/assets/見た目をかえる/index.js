const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [
		// sco.ゲームがはじまったとき,
		// sco.たおされたとき,
		sco.しょうかんされたとき,
		sco.つくられたとき,
		sco.ぶつかったとき,
		sco.こうげきされたとき,
		// sco.つねに,
		sco.ふまれたとき,
		sco.メッセージされたとき,
		sco.みつけたとき,
		sco.こうげきするとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.みため, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: 'とうめいになる',
		description: '数字が0で とうめい。0.5だと うっすら とうめいになる',
		icon: './invisible.png', // アセットのアイコンへのパス
		insert: './invisible.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'おおきさをかえる',
		description: '数字を 大きくすると そのぶん 大きくなる',
		icon: './scale.png', // アセットのアイコンへのパス
		insert: './scale.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
