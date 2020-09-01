const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [
		sco.しょうかんされたとき,
		sco.つくられたとき,
		sco.メッセージされたとき,
		sco.へんすうがかわったとき,
		sco.みつけたとき,
		sco.こうげきされたとき,
		sco.すすめなかったとき,
		sco.マップがかわったとき,
		sco.ぶつかったとき,
		sco.こうげきするとき,
		sco.あるいたとき,
		sco.タップされたとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.つよさ, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: '体力をかえる',
		description: '体力を この数字に せってい',
		icon: './hp.png', // アセットのアイコンへのパス
		insert: './hp.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'こうげきりょくをかえる',
		description: 'こうげきりょくを この数字に せってい',
		icon: './atk.png', // アセットのアイコンへのパス
		insert: './atk.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'スピードをかえる',
		description: 'スピードを この数字に せってい',
		icon: './speed.png', // アセットのアイコンへのパス
		insert: './speed.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'いくらもっている？',
		description: 'もっている おかねを この数字に せってい',
		icon: './money.png', // アセットのアイコンへのパス
		insert: './money.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'プレイヤーのなかまになる',
		description: 'プレイヤーのなかまは、プレイヤーからこうげきされない',
		icon: './family_player.png', // アセットのアイコンへのパス
		insert: './family_player.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'モンスターのなかまになる',
		description: 'モンスターのなかまどうしは、こうげきをうけない',
		icon: './family_monster.png', // アセットのアイコンへのパス
		insert: './family_monster.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'みつけられるきょり',
		description: '',
		icon: './eyesight.png', // アセットのアイコンへのパス
		insert: './eyesight.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'みつけられるはんい',
		description: '',
		icon: './field_of_view.png', // アセットのアイコンへのパス
		insert: './field_of_view.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'うごけなくなる',
		description: '',
		icon: './frozen_false.png', // アセットのアイコンへのパス
		insert: './frozen_false.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...base,
				name: 'うごけるようになる',
				description: '',
				icon: './frozen_true.png', // アセットのアイコンへのパス
				insert: './frozen_true.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			}
		]
	}
]
