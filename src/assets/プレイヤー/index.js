const cat = require('../../preference/categories');

// プレイヤーの例
module.exports = {
	name: {
		ja: 'プレイヤー', // 日本語でアセットを使う場合の名前
		en: 'player' // 英語でアセットを使う場合の名前
	},
	scopes: null, // スコープの参照を配列で指定する. null の場合は常に表示
	insert: null, // 追加ボタン用のコードへのパス. null の場合は追加不可
	module: './player.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.キャラクター, // カテゴリーの参照を指定する
	icon: './player.png', // アセットのアイコンへのパス
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
};
