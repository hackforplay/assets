const sco = require('../../preference/scopes');
const cat = require('../../preference/categories');

const base = {
	scopes: [
		// スコープの参照を配列で指定する. null の場合は常に表示
		sco.ゲームがはじまったとき
	],
	category: cat.アイテム, // カテゴリーの参照を配列で指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
};

// ゲートの例
module.exports = {
	...base,
	name: {
		ja: '青色のゲート', // 日本語でアセットを使う場合の名前
		en: 'blue gate' // 英語でアセットを使う場合の名前
	},
	insert: './gate-blue.ins.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
	module: './gate-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './gate_b_c.png', // アセットのアイコンへのパス
	children: [
		// 複数のアセットをまとめる. アセットの配列を指定する
		{
			...base,
			name: {
				ja: '緑色のゲート',
				en: 'green gate'
			},
			insert: './gate-green.ins.js',
			module: './gate-green.js',
			icon: './gate_g_c.png'
		}
	]
};
