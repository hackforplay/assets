const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'スター',
	module: './star.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.アイテム, // カテゴリーの参照を指定する
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
		insert: './star-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	//「◯◯を改造する」ファイルに入るコード
	{
		...base,
		scopes: [
			// スコープの参照を配列で指定する. null の場合は常に表示
			sco.こうげきされたとき,
			sco.たおされたとき,
			sco.ふまれたとき,
			sco.ぶつかったとき,
			sco.メッセージされたとき
		],
		insert: './star-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
