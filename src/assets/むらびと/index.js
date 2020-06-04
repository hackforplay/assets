const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.キャラクター, // カテゴリーの参照を配列で指定する
	description: 'むらびと', // 説明文（日本語）
	production: false // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
}

const alex = {
	...base,
	name: 'アレックス',
	module: './villager_alex.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_alex.png', // アセットのアイコンへのパス
	plan: 'free' // 'free' にする
}

const bob = {
	...base,
	name: 'ボブ',
	module: './villager_bob.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_bob.png', // アセットのアイコンへのパス
	plan: 'free' // 'free' にする
}

const charley = {
	...base,
	name: 'チャーリー',
	module: './villager_charley.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_charley.png', // アセットのアイコンへのパス
	plan: 'free' // 'free' にする
}

const dan = {
	...base,
	name: 'ダン',
	module: './villager_dan.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_dan.png', // アセットのアイコンへのパス
	plan: 'free' // 'free' にする
}

const ed = {
	...base,
	name: 'エド',
	module: './villager_ed.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_ed.png', // アセットのアイコンへのパス
	plan: 'free' // 'free' にする
}

const fred = {
	...base,
	name: 'フレッド',
	module: './villager_fred.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_fred.png', // アセットのアイコンへのパス
	plan: 'free' // 'free' にする
}

const ally = {
	...base,
	name: 'アリー',
	module: './villager_ally.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_ally.png', // アセットのアイコンへのパス
	plan: 'free'
}

const becky = {
	...base,
	name: 'ベッキー',
	module: './villager_becky.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_becky.png', // アセットのアイコンへのパス
	plan: 'free'
}

const cathy = {
	...base,
	name: 'キャシー',
	module: './villager_cathy.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_cathy.png', // アセットのアイコンへのパス
	plan: 'free'
}

const dolly = {
	...base,
	name: 'ドリー',
	module: './villager_dolly.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_dolly.png', // アセットのアイコンへのパス
	plan: 'free'
}

const eliza = {
	...base,
	name: 'イライザ',
	module: './villager_eliza.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_eliza.png', // アセットのアイコンへのパス
	plan: 'free'
}

const florrie = {
	...base,
	name: 'フローリー',
	module: './villager_florrie.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './villager_florrie.png', // アセットのアイコンへのパス
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
	sco.みつけたとき,
	sco.タップされたとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...alex,
		scopes: scopeCreate,
		insert: './villager_alex-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...bob,
				scopes: scopeCreate,
				insert: './villager_bob-create.js'
			},
			{
				...charley,
				scopes: scopeCreate,
				insert: './villager_charley-create.js'
			},
			{
				...dan,
				scopes: scopeCreate,
				insert: './villager_dan-create.js'
			},
			{
				...ed,
				scopes: scopeCreate,
				insert: './villager_ed-create.js'
			},
			{
				...fred,
				scopes: scopeCreate,
				insert: './villager_fred-create.js'
			}
		]
	},
	{
		...ally,
		scopes: scopeCreate,
		insert: './villager_ally-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...becky,
				scopes: scopeCreate,
				insert: './villager_becky-create.js'
			},
			{
				...cathy,
				scopes: scopeCreate,
				insert: './villager_cathy-create.js'
			},
			{
				...dolly,
				scopes: scopeCreate,
				insert: './villager_dolly-create.js'
			},
			{
				...eliza,
				scopes: scopeCreate,
				insert: './villager_eliza-create.js'
			},
			{
				...florrie,
				scopes: scopeCreate,
				insert: './villager_florrie-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...alex,
		scopes: scopeSummon,
		insert: './villager_alex-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...bob,
				scopes: scopeSummon,
				insert: './villager_bob-summon.js'
			},
			{
				...charley,
				scopes: scopeSummon,
				insert: './villager_charley-summon.js'
			},
			{
				...dan,
				scopes: scopeSummon,
				insert: './villager_dan-summon.js'
			},
			{
				...ed,
				scopes: scopeSummon,
				insert: './villager_ed-summon.js'
			},
			{
				...fred,
				scopes: scopeSummon,
				insert: './villager_fred-summon.js'
			}
		]
	},
	{
		...ally,
		scopes: scopeSummon,
		insert: './villager_ally-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...becky,
				scopes: scopeSummon,
				insert: './villager_becky-summon.js'
			},
			{
				...cathy,
				scopes: scopeSummon,
				insert: './villager_cathy-summon.js'
			},
			{
				...dolly,
				scopes: scopeSummon,
				insert: './villager_dolly-summon.js'
			},
			{
				...eliza,
				scopes: scopeSummon,
				insert: './villager_eliza-summon.js'
			},
			{
				...florrie,
				scopes: scopeSummon,
				insert: './villager_florrie-summon.js'
			}
		]
	}
]
