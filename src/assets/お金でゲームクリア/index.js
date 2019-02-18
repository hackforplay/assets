const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [
		sco.つくられたとき,
		sco.つねに,
		sco.ぶつかったとき,
		sco.ふまれたとき,
		sco.メッセージされたとき,
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
		name: 'おかねでゲームクリア',
		description: 'もし、おかねが10以上なら、ゲームクリア',
		icon: './money_gameclear.png', // アセットのアイコンへのパス
		insert: './money_gameclear.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'おかねでゲームオーバー',
		description: 'もし、おかねが0以下なら、ゲームオーバー',
		icon: './money_gameover.png', // アセットのアイコンへのパス
		insert: './money_gameover.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
