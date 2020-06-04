const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.スキル, // カテゴリーの参照を配列で指定する
	description: '', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const beam = {
	...base,
	name: 'ビーム',
	module: './beam.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './beam.png' // アセットのアイコンへのパス
}

const fire = {
	...base,
	name: 'ほのお',
	module: './fire.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './fire.png' // アセットのアイコンへのパス
}

const slash = {
	...base,
	name: 'ざんげき',
	module: './slash.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './slash.png' // アセットのアイコンへのパス
}

const arrow = {
	...base,
	name: 'や',
	module: './arrow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './arrow.png' // アセットのアイコンへのパス
}

const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.つくられたとき,
	sco.しょうかんされたとき,
	sco.メッセージされたとき,
	sco.こうげきされたとき,
	sco.みつけたとき,
	sco.タップされたとき
]

const scopeGive = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ふまれたとき,
	sco.どかれたとき,
	sco.ぶつかったとき
]

module.exports = [
	// 「◯◯を改造する」ファイルに入るコード
	{
		...beam,
		scopes: scopeSummon,
		insert: './beam-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...fire,
		scopes: scopeSummon,
		insert: './fire-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...slash,
		scopes: scopeSummon,
		insert: './slash-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...arrow,
		scopes: scopeSummon,
		insert: './arrow-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// 「ふんだ、ぶつかった」相手にスキルを与える
	{
		...beam,
		scopes: scopeGive,
		insert: './beam-give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...fire,
		scopes: scopeGive,
		insert: './fire-give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...slash,
		scopes: scopeGive,
		insert: './slash-give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...arrow,
		scopes: scopeGive,
		insert: './arrow-give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
