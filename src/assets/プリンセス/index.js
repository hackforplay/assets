const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'プリンセス',
	module: './princess.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.キャラクター, // カテゴリーの参照を指定する
	description: 'あなたの たすけを まっている。 はなしかけると ゲームクリア',
	icon: './princess.png', // アセットのアイコンへのパス
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
		insert: './princess-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/2653081413ea42eadecea570f72a89e9.gif' // サムネイル画像
	},
	//
	{
		...base,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.こうげきされたとき,
			sco.たおされたとき,
			sco.ふまれたとき,
			sco.どかれたとき,
			sco.ぶつかったとき,
			sco.メッセージされたとき,
			sco.へんすうがかわったとき,
			sco.みつけたとき,
			sco.タップされたとき,
			sco.マップがかわったとき
		],
		insert: './princess-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
