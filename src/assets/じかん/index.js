const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [
		// sco.ゲームがはじまったとき,
		sco.たおされたとき,
		sco.しょうかんされたとき,
		sco.つくられたとき,
		sco.ぶつかったとき,
		sco.こうげきされたとき,
		// sco.つねに,
		sco.ふまれたとき,
		sco.どかれたとき,
		sco.メッセージされたとき,
		sco.へんすうがかわったとき,
		sco.みつけたとき,
		sco.こうげきするとき,
		sco.あるいたとき,
		sco.タップされたとき,
		sco.マップがかわったとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.システム, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: 'じかんをとめる',
		description: 'じかんのすすみを、とめる',
		icon: './timer_stop.png', // アセットのアイコンへのパス
		insert: './timer_stop.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'じかんをうごかす',
		description: 'とめたじかんを、うごかしはじめる',
		icon: './timer_start.png', // アセットのアイコンへのパス
		insert: './timer_start.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'じかんを0にする',
		description: 'じかんに、0を代入',
		icon: './timer_assign0.png', // アセットのアイコンへのパス
		insert: './timer_assign0.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'じかんをすすめる',
		description: 'じかんを、むりやりすすめる',
		icon: './timer_advance.png', // アセットのアイコンへのパス
		insert: './timer_advance.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'じかんをもどす',
		description: 'じかんを、むりやりもどす',
		icon: './timer_back.png', // アセットのアイコンへのパス
		insert: './timer_back.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
