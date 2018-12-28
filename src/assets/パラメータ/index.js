const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [
		sco.しょうかんされたとき,
		sco.つくられたとき,
		sco.メッセージされたとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.つよさ, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: '体力をかえる',
		description: '体力を この数字に せってい',
		icon: './hoge.png', // アセットのアイコンへのパス
		insert: './hp.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'こうげきりょくをかえる',
		description: 'こうげきりょくを この数字に せってい',
		icon: './hoge.png', // アセットのアイコンへのパス
		insert: './atk.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'スピードをかえる',
		description: 'スピードを この数字に せってい',
		icon: './hoge.png', // アセットのアイコンへのパス
		insert: './speed.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
