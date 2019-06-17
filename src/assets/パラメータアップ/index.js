const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.つよさ, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const scope = [
	sco.しょうかんされたとき,
	sco.メッセージされたとき,
	sco.こうげきされたとき,
	sco.みつけたとき,
	sco.こうげきするとき,
	sco.じかんがすすんだとき,
	sco.すすめなかったとき
]

const scopeGive = [sco.ふまれたとき, sco.ぶつかったとき, sco.たおされたとき]

module.exports = [
	//  this.n
	{
		...base,
		name: '体力アップ',
		description: '数字の分だけ　さらに体力アップ',
		scopes: scope,
		icon: './hp_up.png', // アセットのアイコンへのパス
		insert: './hp_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'こうげきりょくアップ',
		description: '数字の分だけ さらに こうげきりょくアップ',
		scopes: scope,
		icon: './atk_up.png', // アセットのアイコンへのパス
		insert: './atk_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'スピードアップ',
		description: '数字の分だけ さらにスピードアップ',
		scopes: scope,
		icon: './speed_up.png', // アセットのアイコンへのパス
		insert: './speed_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'おかねをふやす',
		description: '数字の分だけ さらにお金をふやす',
		scopes: scope,
		icon: './money_up.png', // アセットのアイコンへのパス
		insert: './money_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'とおくまでみえる',
		description: 'みつけられるきょりを のばす',
		scopes: scope,
		icon: './eyesight_up.png', // アセットのアイコンへのパス
		insert: './eyesight_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'しやをひろげる',
		description: 'みつけられるはんいを ひろくする',
		scopes: scope,
		icon: './field_of_view_up.png', // アセットのアイコンへのパス
		insert: './field_of_view_up.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	//  item.n
	{
		...base,
		name: '体力アップ',
		description: 'ふんだ/ぶつかった相手の 体力アップ',
		scopes: scopeGive,
		icon: './hp_up.png', // アセットのアイコンへのパス
		insert: './hp_up_give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'こうげきりょくアップ',
		description: 'ふんだ/ぶつかった相手の こうげきりょくアップ',
		scopes: scopeGive,
		icon: './atk_up.png', // アセットのアイコンへのパス
		insert: './atk_up_give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'スピードアップ',
		description: 'ふんだ/ぶつかった相手の スピードアップ',
		scopes: scopeGive,
		icon: './speed_up.png', // アセットのアイコンへのパス
		insert: './speed_up_give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'おかねをふやす',
		description: 'ふんだ/ぶつかった相手の お金をふやす',
		scopes: scopeGive,
		icon: './money_up.png', // アセットのアイコンへのパス
		insert: './money_up_give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'とおくまでみえる',
		description: 'ふんだ/ぶつかった相手の みつけられるきょりを のばす',
		scopes: scopeGive,
		icon: './eyesight_up.png', // アセットのアイコンへのパス
		insert: './eyesight_up_give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'しやをひろげる',
		description: 'ふんだ/ぶつかった相手の みつけられるはんいを ひろくする',
		scopes: scopeGive,
		icon: './field_of_view_up.png', // アセットのアイコンへのパス
		insert: './field_of_view_up_give.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
