const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'ばくはつ',
	module: './explosion.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.スキル, // カテゴリーの参照を指定する
	description: '',
	icon: './explosion.png', // アセットのアイコンへのパス
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.つくられたとき,
	sco.しょうかんされたとき,
	sco.メッセージされたとき,
	sco.こうげきされたとき
]

const scopeGive = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ふまれたとき,
	sco.ぶつかったとき
]

module.exports = [
	// スキル習得
	{
		...base,
		scopes: scopeSummon,
		insert: './explosion-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// 踏んだ、ぶつかった相手にスキル付与
	{
		...base,
		scopes: scopeGive,
		insert: './explosion-give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
