const categories = require('./categories');

exports.ゲームがはじまったとき = {
	name: 'ゲームがはじまったとき',
	defaultActiveCategory: categories.モンスター
};

exports.たおされたとき = {
	name: 'たおされたとき',
	defaultActiveCategory: categories.システム
};

exports.しょうかんされたとき = {
	name: 'しょうかんされたとき',
	defaultActiveCategory: categories.スキル
};

exports.つくられたとき = {
	name: 'つくられたとき',
	defaultActiveCategory: categories.スキル
};

exports.ぶつかったとき = {
	name: 'ぶつかったとき',
	defaultActiveCategory: categories.システム
};

exports.こうげきされたとき = {
	name: 'こうげきされたとき',
	defaultActiveCategory: categories.スキル
};

exports.つねに = {
	name: 'つねに',
	defaultActiveCategory: categories.スキル
};

exports.ふまれたとき = {
	name: 'ふまれたとき',
	defaultActiveCategory: categories.システム
};

exports.メッセージされたとき = {
	name: 'メッセージされたとき',
	defaultActiveCategory: categories.システム
};
