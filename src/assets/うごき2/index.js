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
		sco.メッセージされたとき,
		sco.すすめなかったとき,
		sco.みつけたとき,
		sco.こうげきするとき,
		sco.タップされたとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.うごき, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: '上をむく',
		description: '',
		icon: './direction_up.png', // アセットのアイコンへのパス
		insert: './direction_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '右をむく',
		description: '',
		icon: './direction_right.png', // アセットのアイコンへのパス
		insert: './direction_right.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '下をむく',
		description: '',
		icon: './direction_down.png', // アセットのアイコンへのパス
		insert: './direction_down.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '左をむく',
		description: '',
		icon: './direction_left.png', // アセットのアイコンへのパス
		insert: './direction_left.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'むきをランダムに',
		description: 'ランダムに どこかを むく',
		icon: './direction_random.png', // アセットのアイコンへのパス
		insert: './direction_random.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '右手をむく',
		description: 'キャラクターからみて、右をむく',
		icon: './right_hand.png', // アセットのアイコンへのパス
		insert: './right_hand.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '左手をむく',
		description: 'キャラクターからみて、左をむく',
		icon: './left_hand.png', // アセットのアイコンへのパス
		insert: './left_hand.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'うしろをむく',
		description: 'キャラクターからみて、うしろをむく',
		icon: './behind.png', // アセットのアイコンへのパス
		insert: './behind.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'さがす',
		description: '目をこらして さがす ',
		icon: './find.png', // アセットのアイコンへのパス
		insert: './find.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
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
