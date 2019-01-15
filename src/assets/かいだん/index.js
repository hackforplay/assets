const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'ふむと べつのマップ(map)に いどう できる', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const stone = {
	...base,
	name: '石のかいだん',
	module: './stairs-stone.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './stairs_stone.png' // アセットのアイコンへのパス
}

const wood = {
	...base,
	name: '木のかいだん',
	module: './stairs-wood.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './stairs_wood.png' // アセットのアイコンへのパス
}

const cave = {
	...base,
	name: '土のかいだん',
	module: './stairs-cave.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './stairs_cave.png' // アセットのアイコンへのパス
}

const secret = {
	...base,
	name: 'かくしかいだん',
	module: './stairs-secret.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './stairs_secret.png' // アセットのアイコンへのパス
}

const scopeCreate = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ゲームがはじまったとき
]
/*
const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.こうげきされたとき,
	sco.たおされたとき,
	sco.ふまれたとき,
	sco.ぶつかったとき,
	sco.メッセージされたとき
]
*/

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...stone,
		scopes: scopeCreate,
		insert: './stairs-stone-create.js',
		children: [
			{
				...wood,
				scopes: scopeCreate,
				insert: './stairs-wood-create.js'
			},
			{
				...cave,
				scopes: scopeCreate,
				insert: './stairs-cave-create.js'
			}
		]
	},
	{
		...secret,
		scopes: scopeCreate,
		insert: './stairs-secret-create.js'
	}
	/*
	// 「◯◯を改造する」ファイルに入るコード
	{
		...stone,
		scopes: scopeSummon,
		insert: './stairs-stone-summon.js',
		children: [
			{
				...wood,
				scopes: scopeSummon,
				insert: './stairs-wood-summon.js'
			},
			{
				...cave,
				scopes: scopeSummon,
				insert: './stairs-cave-summon.js'
			}
		]
	},
	{
		...secret,
		scopes: scopeSummon,
		insert: './stairs-secret-summon.js'
	}
	*/
]
