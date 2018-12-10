const categories = require('./categories');

exports.ゲームがはじまったとき = {
	name: {
		ja: 'ゲームがはじまったとき',
		en: 'gameStarted'
	},
	defaultActiveCategory: categories.モンスター
};

exports.たおされたとき = {
	name: {
		ja: 'たおされたとき',
		en: 'killed'
	},
	defaultActiveCategory: categories.システム
};

exports.しょうかんされたとき = {
	name: {
		ja: 'しょうかんされたとき',
		en: 'summoned'
	},
	defaultActiveCategory: categories.スキル
};

exports.つくられたとき = {
	name: {
		ja: 'つくられたとき',
		en: 'maked'
	},
	defaultActiveCategory: categories.スキル
};

exports.ぶつかったとき = {
	name: {
		ja: 'ぶつかったとき',
		en: 'collided'
	},
	defaultActiveCategory: categories.システム
};

exports.こうげきされたとき = {
	name: {
		ja: 'こうげきされたとき',
		en: 'attacked'
	},
	defaultActiveCategory: categories.システム
};

exports.つねに = {
	name: {
		ja: 'つねに',
		en: 'constant'
	},
	defaultActiveCategory: categories.システム
};

exports.ふまれたとき = {
	name: {
		ja: 'ふまれたとき',
		en: 'steped on'
	},
	defaultActiveCategory: categories.システム
};

exports.メッセージされたとき = {
	name: {
		ja: 'メッセージされたとき',
		en: 'messaged'
	},
	defaultActiveCategory: categories.システム
};
