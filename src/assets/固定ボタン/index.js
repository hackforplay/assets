const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.システム, // カテゴリーの参照を配列で指定する
	description: 'タップできるボタン。がめんに、こていされている', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const spade = {
	...base,
	name: 'スペードのボタン',
	module: './button-spade.js',
	icon: './button_spade.png'
}

const heart = {
	...base,
	name: 'ハートのボタン',
	module: './button-heart.js',
	icon: './button_heart.png'
}

const diamond = {
	...base,
	name: 'ダイヤのボタン',
	module: './button-diamond.js',
	icon: './button_diamond.png'
}

const club = {
	...base,
	name: 'クラブのボタン',
	module: './button-club.js',
	icon: './button_club.png'
}

const triangle = {
	...base,
	name: 'さんかくボタン',
	module: './button-triangle.js',
	icon: './button_triangle.png'
}

const circle = {
	...base,
	name: 'まるボタン',
	module: './button-circle.js',
	icon: './button_circle.png'
}

const cross = {
	...base,
	name: 'ばつボタン',
	module: './button-cross.js',
	icon: './button_cross.png'
}

const square = {
	...base,
	name: 'しかくボタン',
	module: './button-square.js',
	icon: './button_square.png'
}

const scopeCreate = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ゲームがはじまったとき,
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
		...spade,
		scopes: scopeCreate,
		insert: './button-spade-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		// thumbnail: 'https://i.gyazo.com/e0cdb850fe315b20f436d201e94245fa.gif', // サムネイル画像
		children: [
			{
				...heart,
				scopes: scopeCreate,
				insert: './button-heart-create.js'
			},
			{
				...diamond,
				scopes: scopeCreate,
				insert: './button-diamond-create.js'
			},
			{
				...club,
				scopes: scopeCreate,
				insert: './button-club-create.js'
			},
			{
				...triangle,
				scopes: scopeCreate,
				insert: './button-triangle-create.js'
			},
			{
				...circle,
				scopes: scopeCreate,
				insert: './button-circle-create.js'
			},
			{
				...cross,
				scopes: scopeCreate,
				insert: './button-cross-create.js'
			},
			{
				...square,
				scopes: scopeCreate,
				insert: './button-square-create.js'
			}
		]
	}
]
