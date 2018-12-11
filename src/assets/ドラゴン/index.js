const sco = require('../../preference/scopes');
const cat = require('../../preference/categories');

const base = {
	scopes: [
		// スコープの参照を配列で指定する. null の場合は常に表示
		sco.ゲームがはじまったとき
	],
	category: cat.モンスター, // カテゴリーの参照を配列で指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
};

module.exports = {
	...base,
	name: {
		ja: '赤色のドラゴン', // 日本語でアセットを使う場合の名前
		en: 'red dragon' // 英語でアセットを使う場合の名前
	},
	insert: './dragon-red.ins.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
	module: './dragon-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './red_dragon.png', // アセットのアイコンへのパス
	children: [
		// 複数のアセットをまとめる. アセットの配列を指定する
		{
			...base,
			name: {
				ja: '黒色のドラゴン',
				en: 'black dragon'
			},
			insert: './dragon-black.ins.js',
			module: './dragon-black.js',
			icon: './black_dragon.png'
		},
		{
			...base,
			name: {
				ja: '青色のドラゴン',
				en: 'blue dragon'
			},
			insert: './dragon-blue.ins.js',
			module: './dragon-blue.js',
			icon: './blue_dragon.png'
		},
		{
			...base,
			name: {
				ja: '緑色のドラゴン',
				en: 'green dragon'
			},
			insert: './dragon-green.ins.js',
			module: './dragon-green.js',
			icon: './green_dragon.png'
		},
		{
			...base,
			name: {
				ja: '白色のドラゴン',
				en: 'white dragon'
			},
			insert: './dragon-white.ins.js',
			module: './dragon-white.js',
			icon: './white_dragon.png'
		},
		{
			...base,
			name: {
				ja: '黄色のドラゴン',
				en: 'yellow dragon'
			},
			insert: './dragon-yellow.ins.js',
			module: './dragon-yellow.js',
			icon: './yellow_dragon.png'
		}
	]
};
