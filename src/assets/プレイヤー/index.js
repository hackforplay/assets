const sco = require('../../preference/scopes');
const cat = require('../../preference/categories');

// プレイヤーの例
module.exports = {
	name: 'プレイヤー',
	scopes: [sco.ゲームがはじまったとき], // スコープの参照を配列で指定する. null の場合は常に表示
	insert: null, // 追加ボタン用のコードへのパス. null の場合は追加不可
	module: './player.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.キャラクター, // カテゴリーの参照を指定する
	description: 'あなたが うごかす キャラクターのこと',
	icon: './player.png', // アセットのアイコンへのパス
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
};
