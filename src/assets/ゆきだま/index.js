const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'ゆきだま',
	module: './snowball.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.もの, // カテゴリーの参照を指定する
	description: 'ふたつ あわせると ゆきだるまになる',
	icon: './snowball.png', // アセットのアイコンへのパス
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
		insert: './snowball-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/0f50952c0f7460589bcbb16737731f66.gif' // サムネイル画像
	},
	// しょうかんする
	{
		...base,
		scopes: [
			sco.こうげきされたとき,
			sco.ぶつかったとき,
			sco.みつけたとき,
			sco.こうげきするとき,
			sco.あるいたとき,
			sco.タップされたとき,
			sco.たおされたとき,
			sco.ふまれたとき,
			sco.どかれたとき,
			sco.メッセージされたとき,
			sco.へんすうがかわったとき,
			sco.すすめなかったとき,
			sco.マップがかわったとき
		],
		insert: './snowball-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
