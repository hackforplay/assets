const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.もの, // カテゴリーの参照を配列で指定する
	description: 'ふむとダメージ！とてもいたい', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

const spike_trap_on = {
	...base,
	name: 'トゲのゆか',
	module: './spike_trap_on.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './spike_trap_on.png' // アセットのアイコンへのパス
}

const spike_trap_off = {
	...base,
	name: 'トゲのないゆか',
	module: './spike_trap_off.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './spike_trap_off.png' // アセットのアイコンへのパス
}

const spike_traps_vertical = {
	...base,
	name: 'たてにならんだトゲ',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './spike_traps_vertical.png' // アセットのアイコンへのパス
}

const spike_traps_horizontal = {
	...base,
	name: 'よこにならんだトゲ',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './spike_traps_horizontal.png' // アセットのアイコンへのパス
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
	sco.こうげきするとき,
	sco.あるいたとき,
	sco.タップされたとき,
	sco.マップがかわったとき
]

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...spike_trap_on,
		scopes: scopeCreate,
		insert: './spike_trap_on-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		thumbnail: 'https://i.gyazo.com/49c8219fd187e8d22a249aad4d0c74c1.gif', // サムネイル画像
		children: [
			{
				...spike_trap_off,
				scopes: scopeCreate,
				insert: './spike_trap_off-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			}
		]
	},
	{
		...spike_traps_vertical,
		scopes: scopeCreate,
		insert: './spike_traps_vertical-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...spike_traps_horizontal,
		scopes: scopeCreate,
		insert: './spike_traps_horizontal-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...spike_trap_on,
		scopes: scopeSummon,
		insert: './spike_trap_on-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...spike_trap_off,
				scopes: scopeSummon,
				insert: './spike_trap_off-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
			}
		]
	}
]
