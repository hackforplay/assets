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
	module: './samurai.js',
	icon: './samurai.png' // アセットのアイコンへのパス
}

const hunter = {
	...base,
	name: 'ハンター',
	description: 'てきをみつけると、弓矢でこうげき',
	module: './hunter.js',
	icon: './hunter.png' // アセットのアイコンへのパス
}

const mage = {
	...base,
	name: 'メイジ',
	description: 'てきをみつけると、かえんでこうげき',
	module: './mage.js',
	icon: './mage.png' // アセットのアイコンへのパス
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
		...samurai,
		scopes: scopeCreate,
		insert: './samurai-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/008ef3c285294a8bd2f1fa39ad70f6a9.gif' // サムネイル画像
	},
	{
		...hunter,
		scopes: scopeCreate,
		insert: './hunter-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/8646c38f64bc2ce4cb94e9ff222b96bf.gif' // サムネイル画像
	},
	{
		...mage,
		scopes: scopeCreate,
		insert: './mage-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/981b788134e39111cb541f4cf5a1855d.gif' // サムネイル画像
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
	},
	{
		...mage,
		scopes: scopeSummon,
		insert: './mage-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
