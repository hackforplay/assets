const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'どんどんゾンビがわいてくる、おそろしいはか', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const block = {
	...base,
	name: 'しかくいはか',
	module: './grave-block.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './grave_block.png' // アセットのアイコンへのパス
}

const cross = {
	...base,
	name: 'じゅうじのはか',
	module: './grave-cross.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './grave_cross.png' // アセットのアイコンへのパス
}

const gothic = {
	...base,
	name: 'とがったはか',
	module: './grave-gothic.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './grave_gothic.png' // アセットのアイコンへのパス
}

const round = {
	...base,
	name: 'まるいはか',
	module: './grave-round.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './grave_round.png' // アセットのアイコンへのパス
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
	sco.どかれたとき,
	sco.ぶつかったとき,
	sco.メッセージされたとき,
	sco.へんすうがかわったとき,
	sco.みつけたとき,
	sco.こうげきするとき,
	sco.あるいたとき,
	sco.タップされたとき,
	sco.マップがかわったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...cross,
		scopes: scopeCreate,
		insert: './grave-cross-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/fa65096f4555bd0263fbdf12f0665592.gif', // サムネイル画像
		children: [
			{
				...block,
				scopes: scopeCreate,
				insert: './grave-block-create.js'
			},
			{
				...gothic,
				scopes: scopeCreate,
				insert: './grave-gothic-create.js'
			},
			{
				...round,
				scopes: scopeCreate,
				insert: './grave-round-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...cross,
		scopes: scopeSummon,
		insert: './grave-cross-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...block,
				scopes: scopeSummon,
				insert: './grave-block-summon.js'
			},
			{
				...gothic,
				scopes: scopeSummon,
				insert: './grave-gothic-summon.js'
			},
			{
				...round,
				scopes: scopeSummon,
				insert: './grave-round-summon.js'
			}
		]
	}
]
