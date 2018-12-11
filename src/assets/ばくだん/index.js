const sco = require('../../preference/scopes');
const cat = require('../../preference/categories');

module.exports = {
	name: {
		ja: 'ばくだん', // 日本語でアセットを使う場合の名前
		en: 'bomb' // 英語でアセットを使う場合の名前
	},
	scopes: [
		// スコープの参照を配列で指定する. null の場合は常に表示
		sco.ゲームがはじまったとき,
		sco.こうげきされたとき,
		sco.たおされたとき,
		sco.つねに,
		sco.ふまれたとき,
		sco.ぶつかったとき,
		sco.メッセージされたとき
	],
	insert: null, // 追加ボタン用のコードへのパス. null の場合は追加不可
	module: './bomb.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.アイテム, // カテゴリーの参照を指定する
	icon: './bomb.png', // アセットのアイコンへのパス
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
};
