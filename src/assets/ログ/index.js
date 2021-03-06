const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.システム, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const scopeLog = [
	sco.ゲームがはじまったとき,
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
	sco.みつけたとき,
	sco.こうげきするとき,
	sco.あるいたとき,
	sco.タップされたとき,
	sco.マップがかわったとき
]

const scopeHp = [
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
	sco.みつけたとき,
	sco.こうげきするとき,
	sco.あるいたとき,
	sco.タップされたとき,
	sco.マップがかわったとき
]

module.exports = [
	{
		...base,
		scopes: scopeLog,
		name: 'ログ',
		description: 'ゲームの下に小さなもじがでる',
		icon: './log.png', // アセットのアイコンへのパス
		insert: './log.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		scopes: scopeHp,
		name: 'たいりょくログ',
		description: 'ゲームの下に小さなもじで たいりょくが でる',
		icon: './log_hp.png', // アセットのアイコンへのパス
		insert: './log_hp.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
