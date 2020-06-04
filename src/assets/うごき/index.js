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
		sco.すすめなかったとき,
		sco.みつけたとき,
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
		name: 'まつ',
		description: '数字のぶんだけ 少し まつ',
		icon: './wait.png', // アセットのアイコンへのパス
		insert: './wait.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'こうげきする',
		description: '目の前を こうげき！',
		icon: './attack.png', // アセットのアイコンへのパス
		insert: './attack.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '左にカニあるき',
		description: 'むいている ほうこうは そのまま',
		icon: './walkLeft.png', // アセットのアイコンへのパス
		insert: './walkLeft.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'あるく',
		description: 'いっぽ あるく',
		icon: './walk.png', // アセットのアイコンへのパス
		insert: './walk.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '右にカニあるき',
		description: 'むいている ほうこうは そのまま',
		icon: './walkRight.png', // アセットのアイコンへのパス
		insert: './walkRight.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'おいかける',
		description: 'ターゲットに むかって すすむ',
		icon: './chase.png', // アセットのアイコンへのパス
		insert: './chase4.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'おいかける(ナナメあり)',
		description: 'おいかける時、ナナメにすすむ こともある',
		icon: './chase.png', // アセットのアイコンへのパス
		insert: './chase8.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
