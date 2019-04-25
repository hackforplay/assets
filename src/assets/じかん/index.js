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
		sco.メッセージされたとき,
		sco.みつけたとき,
		sco.こうげきするとき
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
		description: 'じかん(Hack.time)のすすみを、とめる',
		icon: './timer_stop.png', // アセットのアイコンへのパス
		insert: './timer_stop.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'じかんをうごかす',
		description: 'とめたじかん(Hack.time)を、うごかしはじめる',
		icon: './timer_start.png', // アセットのアイコンへのパス
		insert: './timer_start.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'じかんを0にする',
		description: 'じかん(Hack.time)に、0を代入',
		icon: './timer_assign0.png', // アセットのアイコンへのパス
		insert: './timer_assign0.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'じかんをすすめる',
		description: 'じかん(Hack.time)を、むりやりすすめる',
		icon: './timer_advance.png', // アセットのアイコンへのパス
		insert: './timer_advance.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'じかんをもどす',
		description: 'じかん(Hack.time)を、むりやりもどす',
		icon: './timer_back.png', // アセットのアイコンへのパス
		insert: './timer_back.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
