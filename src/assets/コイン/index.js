const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'コイン',
	module: './coin.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.もの, // カテゴリーの参照を指定する
	description: 'とると おかね(money)が ふえる',
	icon: './coin.png', // アセットのアイコンへのパス
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	//「ステージ」ファイルに入るコード
	{
		...base,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.ゲームがはじまったとき
		],
		insert: './coin-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/2d151991006d2df70cdba15cc83ce168.gif' // サムネイル画像
	},
	// しょうかんする
	{
		...base,
		scopes: [
			sco.こうげきされたとき,
			sco.ぶつかったとき,
			sco.みつけたとき,
			sco.こうげきするとき,
			sco.タップされたとき,
			sco.マップがかわったとき
		],
		insert: './coin-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// おとす
	{
		...base,
		scopes: [
			sco.たおされたとき,
			sco.ふまれたとき,
			sco.どかれたとき,
			sco.あるいたとき,
			sco.メッセージされたとき,
			sco.すすめなかったとき
		],
		insert: './coin-drop.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
