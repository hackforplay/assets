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
		// sco.ふまれたとき,
		sco.メッセージされたとき,
		sco.すすめなかったとき,
		sco.みつけたとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.うごき, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: 'まつ',
		description: '数字のぶんだけ 少し まつ',
		icon: './wait.png', // アセットのアイコンへのパス
		insert: './wait.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'テレポートランダム',
		description: 'ランダムな位置に テレポート',
		icon: './teleportRandom.png', // アセットのアイコンへのパス
		insert: './teleportRandom.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'はなす',
		description: 'ひとこと はなす',
		icon: './talk.png', // アセットのアイコンへのパス
		insert: './talk.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'といかける',
		description: 'せんたくしを えらんで かいわする',
		icon: './ask.png', // アセットのアイコンへのパス
		insert: './ask.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
