const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.スキル, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const explosion = {
	...base,
	name: 'ばくはつ',
	description: 'めのまえを、ドカーン！',
	module: './explosion.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './explosion.png' // アセットのアイコンへのパス
}

const lightning = {
	...base,
	name: 'でんげき',
	description: 'じぶんのまわりに、ビリビリ！',
	module: './lightning.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './lightning.png' // アセットのアイコンへのパス
}

const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.つくられたとき,
	sco.しょうかんされたとき,
	sco.メッセージされたとき,
	sco.へんすうがかわったとき,
	sco.こうげきされたとき,
	sco.みつけたとき,
	sco.タップされたとき,
	sco.マップがかわったとき
]

const scopeGive = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ふまれたとき,
	sco.どかれたとき,
	sco.ぶつかったとき
]

module.exports = [
	// スキル習得
	{
		...explosion,
		scopes: scopeSummon,
		insert: './explosion-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...lightning,
		scopes: scopeSummon,
		insert: './lightning-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// 踏んだ、ぶつかった相手にスキル付与
	{
		...explosion,
		scopes: scopeGive,
		insert: './explosion-give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...lightning,
		scopes: scopeGive,
		insert: './lightning-give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
