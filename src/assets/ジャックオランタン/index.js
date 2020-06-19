const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'ジャックオランタン',
	module: './jack-o-lantern.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.もの, // カテゴリーの参照を指定する
	description: 'じかんがたつと、ゴーストをしょうかんする、おそろしいアイテム',
	icon: './jack-o-lantern.png', // アセットのアイコンへのパス
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
		insert: './jack-o-lantern-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/b8b0167c6de9f48839f699a6bf14abd9.gif' // サムネイル画像
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
			sco.どかれたとき,
			sco.メッセージされたとき,
			sco.すすめなかったとき,
			sco.マップがかわったとき
		],
		insert: './jack-o-lantern-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
