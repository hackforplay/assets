const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	description: 'おいしそうな くだもの。たべると たいりょくを かいふく',
	category: cat.もの, // カテゴリーの参照を配列で指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const apple = {
	...base,
	name: 'りんご',
	module: './apple.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './fruit_apple.png' // アセットのアイコンへのパス
}

const orange = {
	...base,
	name: 'オレンジ',
	module: './orange.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './fruit_orange.png' // アセットのアイコンへのパス
}

const peach = {
	...base,
	name: 'もも',
	module: './peach.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './fruit_peach.png' // アセットのアイコンへのパス
}

const pear = {
	...base,
	name: 'なし',
	module: './pear.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './fruit_pear.png' // アセットのアイコンへのパス
}

const banana = {
	...base,
	name: 'バナナ',
	module: './banana.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './fruit_banana.png' // アセットのアイコンへのパス
}

const scopeCreate = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ゲームがはじまったとき
]

const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.こうげきされたとき,
	sco.ぶつかったとき,
	sco.みつけたとき,
	sco.こうげきするとき
]

const scopeDrop = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.たおされたとき,
	sco.ふまれたとき,
	sco.メッセージされたとき,
	sco.すすめなかったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...apple,
		scopes: scopeCreate,
		insert: './apple-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...banana,
		scopes: scopeCreate,
		insert: './banana-create.js'
	},
	{
		...orange,
		scopes: scopeCreate,
		insert: './orange-create.js'
	},
	{
		...peach,
		scopes: scopeCreate,
		insert: './peach-create.js'
	},
	{
		...pear,
		scopes: scopeCreate,
		insert: './pear-create.js'
	},
	// しょうかんする
	{
		...apple,
		scopes: scopeSummon,
		insert: './apple-summon.js'
	},
	{
		...banana,
		scopes: scopeSummon,
		insert: './banana-summon.js'
	},
	{
		...orange,
		scopes: scopeSummon,
		insert: './orange-summon.js'
	},
	{
		...peach,
		scopes: scopeSummon,
		insert: './peach-summon.js'
	},
	{
		...pear,
		scopes: scopeSummon,
		insert: './pear-summon.js'
	},
	// おとす
	{
		...apple,
		scopes: scopeDrop,
		insert: './apple-drop.js'
	},
	{
		...banana,
		scopes: scopeDrop,
		insert: './banana-drop.js'
	},
	{
		...orange,
		scopes: scopeDrop,
		insert: './orange-drop.js'
	},
	{
		...peach,
		scopes: scopeDrop,
		insert: './peach-drop.js'
	},
	{
		...pear,
		scopes: scopeDrop,
		insert: './pear-drop.js'
	}
]
