const sco = require('../../preference/scopes');
const cat = require('../../preference/categories');

const base = {
	category: cat.せっち, // カテゴリーの参照を配列で指定する
	description: 'こうげきしても　ビクともしない じゃまな いわ', // 説明文（日本語）
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
};

const rock = {
	...base,
	name: 'いわ',
	module: './rock.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './rock.png' // アセットのアイコンへのパス
};

const rocks = {
	...base,
	name: 'たてにならんだいわ',
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	icon: './rocks.png' // アセットのアイコンへのパス
};

const scopeCreate = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.ゲームがはじまったとき
];

const scopeSummon = [
	// スコープの参照を配列で指定する. null の場合は常に表示
	sco.こうげきされたとき,
	sco.たおされたとき,
	sco.つねに,
	sco.ふまれたとき,
	sco.ぶつかったとき,
	sco.メッセージされたとき
];

module.exports = [
	// 「ステージ」ファイルに入るコード
	{
		...rock,
		scopes: scopeCreate,
		insert: './rock-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...rocks,
				scopes: scopeCreate,
				insert: './rocks-create.js'
			}
		]
	},
	// 「◯◯を改造する」ファイルに入るコード
	{
		...rock,
		scopes: scopeSummon,
		insert: './rock-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
];
