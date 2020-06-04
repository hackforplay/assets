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

const watermelon = {
	...base,
	name: 'スイカ',
	module: './watermelon.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './watermelon.png' // アセットのアイコンへのパス
}

const watermelon_slice = {
	...base,
	name: 'きられたスイカ',
	module: './watermelon_slice.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './watermelon_slice.png' // アセットのアイコンへのパス
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
	sco.こうげきするとき,
	sco.タップされたとき
]

const scopeDrop = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.たおされたとき,
	sco.ふまれたとき,
	sco.どかれたとき,
	sco.メッセージされたとき,
	sco.すすめなかったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...apple,
		scopes: scopeCreate,
		insert: './apple-create.js',
		thumbnail: 'https://i.gyazo.com/97c37865f8f63d142d259f800319d1b4.gif' // サムネイル画像
	},
	{
		...banana,
		scopes: scopeCreate,
		insert: './banana-create.js',
		thumbnail: 'https://i.gyazo.com/0e00fd8cf3ad52f57575d4eaae5f5661.gif' // サムネイル画像
	},
	{
		...orange,
		scopes: scopeCreate,
		insert: './orange-create.js',
		thumbnail: 'https://i.gyazo.com/c83abd5e3c05ad7c6336bd08e5ac9ec3.gif' // サムネイル画像
	},
	{
		...peach,
		scopes: scopeCreate,
		insert: './peach-create.js',
		thumbnail: 'https://i.gyazo.com/eecddd706d2a0ca0673387696e0b8e4c.gif' // サムネイル画像
	},
	{
		...pear,
		scopes: scopeCreate,
		insert: './pear-create.js',
		thumbnail: 'https://i.gyazo.com/286b40d2e6dd0d93dff173f611251d44.gif' // サムネイル画像
	},
	{
		...watermelon,
		scopes: scopeCreate,
		insert: './watermelon-create.js',
		thumbnail: 'https://i.gyazo.com/2c8c5b6182d11feb55f11fbf0fb55f88.gif', // サムネイル画像
		children: [
			{
				...watermelon_slice,
				scopes: scopeCreate,
				insert: './watermelon_slice-create.js'
			}
		]
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
	{
		...watermelon,
		scopes: scopeSummon,
		insert: './watermelon-summon.js',
		children: [
			{
				...watermelon_slice,
				scopes: scopeSummon,
				insert: './watermelon_slice-summon.js'
			}
		]
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
	},
	{
		...watermelon,
		scopes: scopeDrop,
		insert: './watermelon-drop.js',
		children: [
			{
				...watermelon_slice,
				scopes: scopeDrop,
				insert: './watermelon_slice-drop.js'
			}
		]
	}
]
