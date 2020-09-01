const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'スター',
	module: './star.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.もの, // カテゴリーの参照を指定する
	description: 'とると 少しのあいだ ムテキになる',
	icon: './star.png', // アセットのアイコンへのパス
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
		insert: './star-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/0d5093a4099d8e091900d2f0e93b7723.gif' // サムネイル画像
	},
	// しょうかんする
	{
		...base,
		scopes: [
			sco.こうげきされたとき,
			sco.ぶつかったとき,
			sco.みつけたとき,
			sco.こうげきするとき,
			sco.タップされたとき
		],
		insert: './star-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
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
			sco.へんすうがかわったとき,
			sco.すすめなかったとき,
			sco.マップがかわったとき
		],
		insert: './star-drop.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
