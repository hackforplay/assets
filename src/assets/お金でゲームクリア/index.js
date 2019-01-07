const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	scopes: [sco.ぶつかったとき, sco.ふまれたとき],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.システム, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	{
		...base,
		name: 'おかねでゲームクリア',
		description: 'もし、おかねが10以上なら、ゲームクリア',
		icon: './hoge.png', // アセットのアイコンへのパス
		insert: './money_gameclear.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'おかねでゲームオーバー',
		description: 'もし、おかねが0より小さいなら、ゲームオーバー',
		icon: './hoge.png', // アセットのアイコンへのパス
		insert: './money_gameover.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
