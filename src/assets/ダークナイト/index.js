const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'ダークナイト',
	module: './dark_knight.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.キャラクター, // カテゴリーの参照を指定する
	description: 'とおくにいるときと、ちかくにいるときで、うごきがかわる',
	icon: './dark_knight.png', // アセットのアイコンへのパス
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
		insert: './dark_knight-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
		// thumbnail: 'https://i.gyazo.com/b8d97d933be3789bc4b1ea707e59fc50.gif' // サムネイル画像
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
		insert: './dark_knight-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
