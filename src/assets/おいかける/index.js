const sco = require('../../preference/scopes');
const cat = require('../../preference/categories');

const base = {
	scopes: [sco.つねに],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: cat.スキル, // カテゴリーの参照を指定する
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
};

module.exports = [
	{
		...base,
		name: 'おいかける',
		description: 'ターゲットに むかって すすむ',
		icon: './hoge.png', // アセットのアイコンへのパス
		insert: './chase4.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	{
		...base,
		name: 'おいかける(ナナメあり)',
		description: 'おいかける時、ナナメにすすむ こともある',
		icon: './hoge.png', // アセットのアイコンへのパス
		insert: './chase8.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	}
];
