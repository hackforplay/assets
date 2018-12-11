const sco = require('../../preference/scopes');
const cat = require('../../preference/categories');

const base = {
	scopes: [
		// スコープの参照を配列で指定する. null の場合は常に表示
		sco.しょうかんされたとき
	],
	category: cat.モンスター, // カテゴリーの参照を配列で指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
};

module.exports = {
	...base,
	name: {
		ja: '紫色のしにがみ', // 日本語でアセットを使う場合の名前
		en: 'purple reaper' // 英語でアセットを使う場合の名前
	},
	insert: './reaper-purple.ins.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
	module: './reaper-purple.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './purple_reaper.png', // アセットのアイコンへのパス
	children: [
		// 複数のアセットをまとめる. アセットの配列を指定する
		{
			...base,
			name: {
				ja: '黒色のしにがみ',
				en: 'black reaper'
			},
			insert: './reaper-black.ins.js',
			module: './reaper-black.js',
			icon: './black_reaper.png'
		},
		{
			...base,
			name: {
				ja: '緑色のしにがみ',
				en: 'green reaper'
			},
			insert: './reaper-green.ins.js',
			module: './reaper-green.js',
			icon: './green_reaper.png'
		},
		{
			...base,
			name: {
				ja: '赤色のしにがみ',
				en: 'red reaper'
			},
			insert: './reaper-red.ins.js',
			module: './reaper-red.js',
			icon: './red_reaper.png'
		},
		{
			...base,
			name: {
				ja: '白色のしにがみ',
				en: 'white reaper'
			},
			insert: './reaper-white.ins.js',
			module: './reaper-white.js',
			icon: './white_reaper.png'
		},
		{
			...base,
			name: {
				ja: '黄色のしにがみ',
				en: 'yellow reaper'
			},
			insert: './reaper-yellow.ins.js',
			module: './reaper-yellow.js',
			icon: './yellow_reaper.png'
		}
	]
};
