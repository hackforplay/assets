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
		name: 'テレポート',
		description: 'きめた いちに テレポート',
		icon: './locate.png', // アセットのアイコンへのパス
		insert: './locate.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'マップいどう',
		description: 'いちと マップを きめて テレポート',
		icon: './map_change.png', // アセットのアイコンへのパス
		insert: './map_change.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'おとす',
		description: 'じぶんの いるばしょに ものや キャラクターを おとす',
		icon: './drop.png', // アセットのアイコンへのパス
		insert: './drop.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
