const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	scopes: [sco.じかんがすすんだとき, sco.タップされたとき],
	category: cat.システム, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: 'じかんでゲームクリア',
		description: 'もし、じかんが20になったら、ゲームクリア',
		icon: './timer_gameclear.png', // アセットのアイコンへのパス
		insert: './timer_gameclear.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'じかんでゲームオーバー',
		description: 'もし、じかんが20になったら、ゲームオーバー',
		icon: './timer_gameover.png', // アセットのアイコンへのパス
		insert: './timer_gameover.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
