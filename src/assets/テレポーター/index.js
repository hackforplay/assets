const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'どこかのばしょに テレポートしてしまう まほうのゆか', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const blue = {
	...base,
	name: '青色のテレポーター',
	module: './teleporter-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './teleporter_blue.png' // アセットのアイコンへのパス
}

const black = {
	...base,
	name: '黒色のテレポーター',
	module: './teleporter-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './teleporter_black.png' // アセットのアイコンへのパス
}

const green = {
	...base,
	name: '緑色のテレポーター',
	module: './teleporter-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './teleporter_green.png' // アセットのアイコンへのパス
}

const red = {
	...base,
	name: '赤色のテレポーター',
	module: './teleporter-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './teleporter_red.png' // アセットのアイコンへのパス
}

const white = {
	...base,
	name: '白色のテレポーター',
	module: './teleporter-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './teleporter_white.png' // アセットのアイコンへのパス
}

const yellow = {
	...base,
	name: '黄色のテレポーター',
	module: './teleporter-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './teleporter_yellow.png' // アセットのアイコンへのパス
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
	sco.あるいたとき,
	sco.メッセージされたとき,
	sco.すすめなかったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...white,
		scopes: scopeCreate,
		insert: './teleporter-white-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/e608db50eb7abd09162c69ac4ec02bad.gif', // サムネイル画像
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './teleporter-black-create.js'
			},
			{
				...blue,
				scopes: scopeCreate,
				insert: './teleporter-blue-create.js'
			},
			{
				...green,
				scopes: scopeCreate,
				insert: './teleporter-green-create.js'
			},
			{
				...red,
				scopes: scopeCreate,
				insert: './teleporter-red-create.js'
			},
			{
				...yellow,
				scopes: scopeCreate,
				insert: './teleporter-yellow-create.js'
			}
		]
	},
	// しょうかんするコード
	{
		...white,
		scopes: scopeSummon,
		insert: './teleporter-white-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './teleporter-black-summon.js'
			},
			{
				...blue,
				scopes: scopeSummon,
				insert: './teleporter-blue-summon.js'
			},
			{
				...green,
				scopes: scopeSummon,
				insert: './teleporter-green-summon.js'
			},
			{
				...red,
				scopes: scopeSummon,
				insert: './teleporter-red-summon.js'
			},
			{
				...yellow,
				scopes: scopeSummon,
				insert: './teleporter-yellow-summon.js'
			}
		]
	},
	// おとすコード
	{
		...white,
		scopes: scopeDrop,
		insert: './teleporter-white-drop.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...black,
				scopes: scopeDrop,
				insert: './teleporter-black-drop.js'
			},
			{
				...blue,
				scopes: scopeDrop,
				insert: './teleporter-blue-drop.js'
			},
			{
				...green,
				scopes: scopeDrop,
				insert: './teleporter-green-drop.js'
			},
			{
				...red,
				scopes: scopeDrop,
				insert: './teleporter-red-drop.js'
			},
			{
				...yellow,
				scopes: scopeDrop,
				insert: './teleporter-yellow-drop.js'
			}
		]
	}
]
