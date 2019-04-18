const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.システム, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const scopeItem = [
	sco.ぶつかったとき,
	sco.ふまれたとき,
	sco.メッセージされたとき,
	sco.こうげきされたとき,
	sco.メッセージされたとき
]

const scopeThis = [sco.つねに, sco.メッセージされたとき]

module.exports = [
	{
		...base,
		name: 'おかねでゲームクリア',
		description: 'もし、おかねが10以上なら、ゲームクリア',
		scopes: scopeItem,
		icon: './money_gameclear.png', // アセットのアイコンへのパス
		insert: './money_gameclear.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'おかねでゲームオーバー',
		description: 'もし、おかねが0以下なら、ゲームオーバー',
		scopes: scopeItem,
		icon: './money_gameover.png', // アセットのアイコンへのパス
		insert: './money_gameover.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '自分のおかねでゲームクリア',
		description: 'もし、おかねが10以上なら、ゲームクリア',
		scopes: scopeThis,
		icon: './money_gameclear.png', // アセットのアイコンへのパス
		insert: './money_gameclear_this.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: '自分のおかねでゲームオーバー',
		description: 'もし、おかねが0以下なら、ゲームオーバー',
		scopes: scopeThis,
		icon: './money_gameover.png', // アセットのアイコンへのパス
		insert: './money_gameover_this.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
