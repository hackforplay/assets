const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.システム, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const scopeHp = [sco.ゲームがはじまったとき]

const scopeText = [
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
	sco.じかんがすすんだとき,
	sco.すすめなかったとき,
	sco.あるいたとき,
	sco.タップされたとき,
	sco.マップがかわったとき
]

module.exports = [
	{
		...base,
		name: 'こうげきりょくを見せる',
		scopes: scopeHp,
		description: 'ゲームの左上に、こうげきりょくの数値をひょうじ',
		icon: './showLabel_atk.png', // アセットのアイコンへのパス
		insert: './showLabel_atk.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'タイムをかくす',
		scopes: scopeHp,
		description: '今のじかんを見えなくする',
		icon: './hideLabel_time.png', // アセットのアイコンへのパス
		insert: './hideLabel_time.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'ラベルをだす',
		scopes: scopeText,
		description: 'キャラクターの上に もじを だす',
		icon: './label_show.png', // アセットのアイコンへのパス
		insert: './label_show.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'ラベルをかくす',
		scopes: scopeText,
		description: 'キャラクターの上の もじを かくす',
		icon: './label_hide.png', // アセットのアイコンへのパス
		insert: './label_hide.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
