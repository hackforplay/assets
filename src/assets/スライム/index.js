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

// ゲートの例
module.exports = {
	...base,
	name: {
		ja: '青色のスライム', // 日本語でアセットを使う場合の名前
		en: 'blue slime' // 英語でアセットを使う場合の名前
	},
	insert: './slime-blue.ins.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
	module: './slime-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './slime.png', // アセットのアイコンへのパス
	children: [
		// 複数のアセットをまとめる. アセットの配列を指定する
		{
			...base,
			name: {
				ja: '黒色のスライム',
				en: 'black slime'
			},
			insert: './slime-black.ins.js',
			module: './slime-black.js',
			icon: './slime.png'
		},
		{
			...base,
			name: {
				ja: '緑色のスライム',
				en: 'green slime'
			},
			insert: './slime-green.ins.js',
			module: './slime-green.js',
			icon: './slime.png'
		},
		{
			...base,
			name: {
				ja: '赤色のスライム',
				en: 'red slime'
			},
			insert: './slime-red.ins.js',
			module: './slime-red.js',
			icon: './slime.png'
		},
		{
			...base,
			name: {
				ja: '白色のスライム',
				en: 'white slime'
			},
			insert: './slime-white.ins.js',
			module: './slime-white.js',
			icon: './slime.png'
		},
		{
			...base,
			name: {
				ja: '黄色のスライム',
				en: 'yellow slime'
			},
			insert: './slime-yellow.ins.js',
			module: './slime-yellow.js',
			icon: './slime.png'
		}
	]
};
