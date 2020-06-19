const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	name: 'まほうじん',
	module: './magic_circle.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.もの, // カテゴリーの参照を指定する
	description: 'おかねが ふえているときに ふむと まほうじんが ひかる',
	icon: './magic_circle.png', // アセットのアイコンへのパス
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
		insert: './magic_circle-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/d9dde216fb4fb812fb68ed511464b221.gif' // サムネイル画像
	},
	//「◯◯を改造する」ファイルに入るコード
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
			sco.みつけたとき,
			sco.タップされたとき,
			sco.マップがかわったとき
		],
		insert: './magic_circle-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
