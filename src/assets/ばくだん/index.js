const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'ばくだん',
	module: './bomb.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.もの, // カテゴリーの参照を指定する
	description: '時間がたつと ドカーン！ その時間は ちょうせつできる',
	icon: './bomb.png', // アセットのアイコンへのパス
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const skill = {
	name: 'スキル ばくだん',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.スキル // カテゴリーの参照を指定する
}

module.exports = [
	// ゲームにおく
	{
		...base,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.ゲームがはじまったとき
		],
		insert: './bomb-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// 改造
	{
		...base,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.こうげきされたとき,
			sco.たおされたとき,
			sco.ふまれたとき,
			sco.ぶつかったとき,
			sco.メッセージされたとき
		],
		insert: './bomb-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// スキル
	{
		...base,
		...skill,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.つくられたとき,
			sco.しょうかんされたとき,
			sco.メッセージされたとき,
			sco.こうげきされたとき
		],
		insert: './bomb-skill.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// 「ふまれた、ぶつかったとき」用スキル
	{
		...base,
		...skill,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.ふまれたとき,
			sco.ぶつかったとき
		],
		insert: './bomb-give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
