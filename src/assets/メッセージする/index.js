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
		sco.マップがかわったとき,
		sco.みつけたとき,
		sco.こうげきするとき,
		sco.あるいたとき,
		sco.タップされたとき
	],
	description: '',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.うごき, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: 'メッセージする',
		description: '赤色のとつブロックに メッセージする',
		icon: './message.png', // アセットのアイコンへのパス
		insert: './message.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...base,
				name: '黒色のとつブロックにメッセージ',
				icon: './message_pf_black_on.png', // アセットのアイコンへのパス
				insert: './message_pf_black_on.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...base,
				name: '青色のとつブロックにメッセージ',
				icon: './message_pf_blue_on.png', // アセットのアイコンへのパス
				insert: './message_pf_blue_on.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...base,
				name: '緑色のとつブロックにメッセージ',
				icon: './message_pf_green_on.png', // アセットのアイコンへのパス
				insert: './message_pf_green_on.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...base,
				name: '白色のとつブロックにメッセージ',
				icon: './message_pf_white_on.png', // アセットのアイコンへのパス
				insert: './message_pf_white_on.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...base,
				name: '黄色のとつブロックにメッセージ',
				icon: './message_pf_yellow_on.png', // アセットのアイコンへのパス
				insert: './message_pf_yellow_on.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			}
		]
	},
	{
		...base,
		name: 'トゲのゆかにメッセージ',
		description: 'トゲのゆか、トゲのないゆか どちらにもメッセージ',
		icon: './message_spike_trap.png', // アセットのアイコンへのパス
		insert: './message_spike_trap.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '黄色のドアにメッセージ',
		icon: './message_door_yellow.png', // アセットのアイコンへのパス
		insert: './message_door_yellow.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...base,
				name: '青色のドアにメッセージ',
				icon: './message_door_blue.png', // アセットのアイコンへのパス
				insert: './message_door_blue.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...base,
				name: '緑色のドアにメッセージ',
				icon: './message_door_green.png', // アセットのアイコンへのパス
				insert: './message_door_green.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...base,
				name: '赤色のドアにメッセージ',
				icon: './message_door_red.png', // アセットのアイコンへのパス
				insert: './message_door_red.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			}
		]
	},
	{
		...base,
		name: '金色のどうぞうにメッセージ',
		icon: './message_statue_gold.png', // アセットのアイコンへのパス
		insert: './message_statue_gold.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...base,
				name: '黒色のどうぞうにメッセージ',
				icon: './message_statue_black.png', // アセットのアイコンへのパス
				insert: './message_statue_black.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...base,
				name: '青色のどうぞうにメッセージ',
				icon: './message_statue_blue.png', // アセットのアイコンへのパス
				insert: './message_statue_blue.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...base,
				name: '緑色のどうぞうにメッセージ',
				icon: './message_statue_green.png', // アセットのアイコンへのパス
				insert: './message_statue_green.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...base,
				name: '赤色のどうぞうにメッセージ',
				icon: './message_statue_red.png', // アセットのアイコンへのパス
				insert: './message_statue_red.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			},
			{
				...base,
				name: '白色のどうぞうにメッセージ',
				icon: './message_statue_white.png', // アセットのアイコンへのパス
				insert: './message_statue_white.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			}
		]
	}
]
