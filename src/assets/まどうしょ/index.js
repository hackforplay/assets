const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [
		sco.ゲームがはじまったとき,
		sco.たおされたとき,
		sco.しょうかんされたとき,
		sco.つくられたとき,
		sco.ぶつかったとき,
		sco.こうげきされたとき,
		// sco.つねに,
		sco.ふまれたとき,
		sco.どかれたとき,
		sco.メッセージされたとき,
		sco.みつけたとき,
		sco.こうげきするとき,
		sco.タップされたとき,
		sco.マップがかわったとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.システム, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: 'まどうしょ',
		description:
			'まどうしょがひかり、プログラミングのまほうが、つかえるようになる',
		icon: './grimoire.png', // アセットのアイコンへのパス
		insert: './grimoire.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...base,
				name: 'まどうしょをけす',
				description: 'まどうしょのなかみを、はくしにする',
				icon: './grimoire_delete.png', // アセットのアイコンへのパス
				insert: './grimoire_delete.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			}
		]
	}
]
