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

const knight_female = {
	...base,
	name: 'ナイト女',
	description: 'てきをみつけると、けんでこうげき。たいりょくがおおい',
	module: './knight_female.js',
	icon: './knight_female.png' // アセットのアイコンへのパス
}

const knight_male = {
	...base,
	name: 'ナイト男',
	description: 'てきをみつけると、けんでこうげき。たいりょくがおおい',
	module: './knight_male.js',
	icon: './knight_male.png' // アセットのアイコンへのパス
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
	{
		...knight_female,
		scopes: scopeCreate,
		insert: './knight_female-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/cb38ffce3ae075d8752276497e5b02ba.gif' // サムネイル画像
	},
	{
		...knight_male,
		scopes: scopeCreate,
		insert: './knight_male-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/5204c82d683964bfc46a983095a5e417.gif' // サムネイル画像
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
	},
	{
		...knight_female,
		scopes: scopeSummon,
		insert: './knight_female-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...knight_male,
		scopes: scopeSummon,
		insert: './knight_male-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
]
