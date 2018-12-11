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
		ja: '緑色のリザードマン', // 日本語でアセットを使う場合の名前
		en: 'green lizardman' // 英語でアセットを使う場合の名前
	},
	insert: './lizardman-green.ins.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
	module: './lizardman-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './green_lizardman.png', // アセットのアイコンへのパス
	children: [
		// 複数のアセットをまとめる. アセットの配列を指定する
		{
			...base,
			name: {
				ja: '黒色のリザードマン',
				en: 'black lizardman'
			},
			insert: './lizardman-black.ins.js',
			module: './lizardman-black.js',
			icon: './black_lizardman.png'
		},
		{
			...base,
			name: {
				ja: '青色のリザードマン',
				en: 'blue lizardman'
			},
			insert: './lizardman-blue.ins.js',
			module: './lizardman-blue.js',
			icon: './blue_lizardman.png'
		},
		{
			...base,
			name: {
				ja: '赤色のリザードマン',
				en: 'red lizardman'
			},
			insert: './lizardman-red.ins.js',
			module: './lizardman-red.js',
			icon: './red_lizardman.png'
		},
		{
			...base,
			name: {
				ja: '白色のリザードマン',
				en: 'white lizardman'
			},
			insert: './lizardman-white.ins.js',
			module: './lizardman-white.js',
			icon: './white_lizardman.png'
		},
		{
			...base,
			name: {
				ja: '黄色のリザードマン',
				en: 'yellow lizardman'
			},
			insert: './lizardman-yellow.ins.js',
			module: './lizardman-yellow.js',
			icon: './yellow_lizardman.png'
		}
	]
};
