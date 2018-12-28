const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [
		sco.ゲームがはじまったとき,
		sco.たおされたとき,
		sco.しょうかんされたとき,
		// sco.つくられたとき,
		sco.ぶつかったとき,
		sco.こうげきされたとき,
		sco.つねに,
		sco.ふまれたとき,
		sco.メッセージされたとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.システム, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: '文字を出す',
		description: '書きかえれば、すきな文字をゲームに出せる',
		icon: './log.png', // アセットのアイコンへのパス
		insert: './log.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '文字をけす',
		description: 'テキストウィンドウを みえないように できる',
		icon: './delete_log.png', // アセットのアイコンへのパス
		insert: './delete_log.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
