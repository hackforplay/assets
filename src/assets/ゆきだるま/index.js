const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'ゆきだるま',
	module: './snowman.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.もの, // カテゴリーの参照を指定する
	description: 'はなしかけると 赤色のかぎをくれる',
	icon: './snowman.png', // アセットのアイコンへのパス
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
		insert: './snowman-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/198008ca3c46d6b26f5c8a7bc433c81e.gif' // サムネイル画像
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
			sco.たおされたとき,
			sco.ふまれたとき,
			sco.メッセージされたとき,
			sco.すすめなかったとき
		],
		insert: './snowman-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
