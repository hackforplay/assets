const sco = require('../../preference/scopes');
const cat = require('../../preference/categories');

const base = {
	name: 'ハート',
	module: './heart.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.アイテム, // カテゴリーの参照を指定する
	description: '体力(hp)を かいふくする うれしいアイテム！',
	icon: './heart.png', // アセットのアイコンへのパス
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
};

module.exports = [
	//
	{
		...base,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.ゲームがはじまったとき
		],
		insert: './heart-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	//
	{
		...base,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.こうげきされたとき,
			sco.たおされたとき,
			sco.つねに,
			sco.ふまれたとき,
			sco.ぶつかったとき,
			sco.メッセージされたとき
		],
		insert: './heart-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
];
