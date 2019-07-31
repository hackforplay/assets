const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'まほうつかい',
	module: './wizard.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.キャラクター, // カテゴリーの参照を指定する
	description: 'まほうで 何かをしょうかんする あやしい まほうつかい',
	icon: './wizard.png', // アセットのアイコンへのパス
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	//
	{
		...base,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.ゲームがはじまったとき
		],
		insert: './wizard-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/d60778cba6e635593e42adcd8cf136fe.gif' // サムネイル画像
	},
	//
	{
		...base,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.こうげきされたとき,
			sco.たおされたとき,
			sco.ふまれたとき,
			sco.ぶつかったとき,
			sco.メッセージされたとき,
			sco.みつけたとき,
			sco.タップされたとき
		],
		insert: './wizard-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
