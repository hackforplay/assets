const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'あるいているところを、こうげきされると、にげる', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const white = {
	...base,
	name: '白色のネコ',
	module: './cat-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './cat_white.png', // アセットのアイコンへのパス
	plan: 'free'
}

const black = {
	...base,
	name: '黒色のネコ',
	module: './cat-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './cat_black.png', // アセットのアイコンへのパス
	plan: 'free'
}

const calico = {
	...base,
	name: 'ミケネコ',
	module: './cat-calico.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './cat_calico.png', // アセットのアイコンへのパス
	plan: 'free'
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
	sco.タップされたとき,
	sco.マップがかわったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...white,
		scopes: scopeCreate,
		insert: './cat-white-create.js',
		children: [
			{
				...black,
				scopes: scopeCreate,
				insert: './cat-black-create.js'
			},
			{
				...calico,
				scopes: scopeCreate,
				insert: './cat-calico-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...white,
		scopes: scopeSummon,
		insert: './cat-white-summon.js',
		children: [
			{
				...black,
				scopes: scopeSummon,
				insert: './cat-black-summon.js'
			},
			{
				...calico,
				scopes: scopeSummon,
				insert: './cat-calico-summon.js'
			}
		]
	}
]
