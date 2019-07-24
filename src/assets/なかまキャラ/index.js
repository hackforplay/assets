const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const samurai = {
	...base,
	name: 'サムライ',
	description: 'てきをみつけると、ざんげきでこうげき',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	module: './samurai.js',
	icon: './samurai.png' // アセットのアイコンへのパス
}

const hunter = {
	...base,
	name: 'ハンター',
	description: 'てきをみつけると、弓矢でこうげき',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	module: './hunter.js',
	icon: './hunter.png' // アセットのアイコンへのパス
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
	sco.みつけたとき,
	sco.タップされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...samurai,
		scopes: scopeCreate,
		insert: './samurai-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...hunter,
		scopes: scopeCreate,
		insert: './hunter-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// 「◯◯の中身」ファイルに入るコード
	{
		...samurai,
		scopes: scopeSummon,
		insert: './samurai-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...hunter,
		scopes: scopeSummon,
		insert: './hunter-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
