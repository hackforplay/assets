const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'こうげきしても　ビクともしない じゃまな いわ', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const rock = {
	...base,
	name: 'いわ',
	module: './rock.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './rock.png' // アセットのアイコンへのパス
}

const rocks_vertical = {
	...base,
	name: 'たてにならんだいわ',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './rocks_vertical.png' // アセットのアイコンへのパス
}

const rocks_horizontal = {
	...base,
	name: 'よこにならんだいわ',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './rocks_horizontal.png' // アセットのアイコンへのパス
}

const scopeCreate = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ゲームがはじまったとき
]

const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.こうげきされたとき,
	sco.たおされたとき,
	sco.ふまれたとき,
	sco.ぶつかったとき,
	sco.メッセージされたとき,
	sco.みつけたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...rock,
		scopes: scopeCreate,
		insert: './rock-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...rocks_vertical,
		scopes: scopeCreate,
		insert: './rocks_vertical-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...rocks_horizontal,
		scopes: scopeCreate,
		insert: './rocks_horizontal-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...rock,
		scopes: scopeSummon,
		insert: './rock-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
