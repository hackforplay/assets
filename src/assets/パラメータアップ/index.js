const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [
		sco.こうげきされたとき,
		sco.つねに,
		// sco.ふまれたとき,
		sco.ぶつかったとき,
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
		name: '体力アップ',
		description: '数字の分だけ　さらに体力アップ',
		icon: './hoge.png', // アセットのアイコンへのパス
		insert: './hp_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'こうげきりょくアップ',
		description: '数字の分だけ さらに こうげきりょくアップ',
		icon: './hoge.png', // アセットのアイコンへのパス
		insert: './atk_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'スピードアップ',
		description: '数字の分だけ さらにスピードアップ',
		icon: './hoge.png', // アセットのアイコンへのパス
		insert: './speed_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
