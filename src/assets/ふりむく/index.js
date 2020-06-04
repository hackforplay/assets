const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.うごき, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const scopeTo = [
	sco.たおされたとき,
	sco.しょうかんされたとき,
	sco.こうげきされたとき,
	sco.メッセージされたとき,
	sco.ふまれたとき,
	sco.どかれたとき,
	sco.みつけたとき,
	sco.ぶつかったとき
]

const scopeToPlayer = [
	// sco.ゲームがはじまったとき,
	sco.たおされたとき,
	sco.しょうかんされたとき,
	sco.つくられたとき,
	sco.ぶつかったとき,
	sco.こうげきされたとき,
	sco.つねに,
	sco.ふまれたとき,
	sco.どかれたとき,
	sco.メッセージされたとき,
	sco.すすめなかったとき,
	sco.みつけたとき,
	sco.こうげきするとき,
	sco.タップされたとき
]

module.exports = [
	{
		...base,
		name: 'ふりむく',
		description: 'あいて(item)の方を むく',
		scopes: scopeTo,
		icon: './faceTo.png', // アセットのアイコンへのパス
		insert: './faceTo.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'プレイヤーの方をむく',
		description: '',
		scopes: scopeToPlayer,
		icon: './faceToPlayer.png', // アセットのアイコンへのパス
		insert: './faceToPlayer.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
