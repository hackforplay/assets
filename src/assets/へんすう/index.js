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
		sco.つねに,
		sco.ふまれたとき,
		sco.どかれたとき,
		sco.メッセージされたとき,
		sco.へんすうがかわったとき,
		sco.すすめなかったとき,
		sco.マップがかわったとき,
		sco.みつけたとき,
		sco.タップされたとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.システム, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const scopeDeclare = [sco.ゲームがはじまったとき]

const scopeUp = [
	sco.たおされたとき,
	sco.しょうかんされたとき,
	sco.つくられたとき,
	sco.ぶつかったとき,
	sco.こうげきされたとき,
	sco.つねに,
	sco.ふまれたとき,
	sco.どかれたとき,
	sco.メッセージされたとき,
	sco.へんすうがかわったとき,
	sco.すすめなかったとき,
	sco.マップがかわったとき,
	sco.みつけたとき,
	sco.タップされたとき
]

module.exports = [
	{
		...base,
		name: 'へんすうをせってい',
		description: 'へんすう「スコア」を0にする',
		scopes: scopeDeclare,
		icon: './variable_declare.png', // アセットのアイコンへのパス
		insert: './variable_declare.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'へんすうを１ふやす',
		description: 'へんすう「スコア」に+1する',
		scopes: scopeUp,
		icon: './variable_up.png', // アセットのアイコンへのパス
		insert: './variable_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'へんすうでゲームクリア',
		description: 'へんすう「スコア」が10のとき、ゲームクリア',
		scopes: scopeUp,
		icon: './variable_gameclear.png', // アセットのアイコンへのパス
		insert: './variable_gameclear.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
