const sco = require('../../preference/scopes');
const cat = require('../../preference/categories');

const base = {
	scopes: [
		// スコープの参照を配列で指定する. null の場合は常に表示
		sco.ゲームがはじまったとき
	],
	category: cat.せっち, // カテゴリーの参照を配列で指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
};

// ゲートの例
module.exports = {
	...base,
	name: {
		ja: '黄色のドア', // 日本語でアセットを使う場合の名前
		en: 'yellow door' // 英語でアセットを使う場合の名前
	},
	insert: './door-yellow.ins.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
	module: './door-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './door_y_c.png', // アセットのアイコンへのパス
	children: [
		// 複数のアセットをまとめる. アセットの配列を指定する
		{
			...base,
			name: {
				ja: '青色のドア',
				en: 'blue door'
			},
			insert: './door-blue.ins.js',
			module: './door-blue.js',
			icon: './door_b_c.png'
		},
		{
			...base,
			name: {
				ja: '緑色のドア',
				en: 'green door'
			},
			insert: './door-green.ins.js',
			module: './door-green.js',
			icon: './door_g_c.png'
		},
		{
			...base,
			name: {
				ja: '赤色のドア',
				en: 'red door'
			},
			insert: './door-red.ins.js',
			module: './door-red.js',
			icon: './door_r_c.png'
		}
	]
};
