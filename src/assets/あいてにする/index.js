const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.うごき, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const scope = [
	sco.しょうかんされたとき,
	sco.こうげきされたとき,
	sco.メッセージされたとき,
	sco.ふまれたとき,
	sco.どかれたとき,
	sco.みつけたとき,
	sco.ぶつかったとき
]

module.exports = [
	{
		...base,
		name: 'てきをこうげき',
		description: 'もし、あいて(item)が てき なら、こうげきする',
		scopes: scope,
		icon: './enemy_attack.png', // アセットのアイコンへのパス
		insert: './enemy_attack.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'あいてをかいふく',
		description: 'あいて(item)の たいりょくを、かいふくする',
		scopes: scope,
		icon: './item_heal.png', // アセットのアイコンへのパス
		insert: './item_heal.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'てきをけす',
		description: 'もし、あいて(item)が てき なら、たいりょくを0にする',
		scopes: scope,
		icon: './enemy_destroy.png', // アセットのアイコンへのパス
		insert: './enemy_destroy.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'あいてをけす',
		description: 'あいて(item)の たいりょくを、0にする',
		scopes: scope,
		icon: './item_destroy.png', // アセットのアイコンへのパス
		insert: './item_destroy.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
