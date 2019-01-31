const categories = require('./categories')

exports.ゲームがはじまったとき = {
	name: 'ゲームがはじまったとき',
	defaultActiveCategory: categories.キャラクター
}

exports.たおされたとき = {
	name: 'たおされたとき',
	defaultActiveCategory: categories.システム
}

exports.しょうかんされたとき = {
	name: 'しょうかんされたとき',
	defaultActiveCategory: categories.つよさ
}

exports.つくられたとき = {
	name: 'つくられたとき',
	defaultActiveCategory: categories.スキル
}

exports.ぶつかったとき = {
	name: 'ぶつかったとき',
	defaultActiveCategory: categories.うごき
}

exports.こうげきされたとき = {
	name: 'こうげきされたとき',
	defaultActiveCategory: categories.うごき
}

exports.つねに = {
	name: 'つねに',
	defaultActiveCategory: categories.うごき
}

exports.ふまれたとき = {
	name: 'ふまれたとき',
	defaultActiveCategory: categories.もの
}

exports.メッセージされたとき = {
	name: 'メッセージされたとき',
	defaultActiveCategory: categories.つよさ
}

exports.すすめなかったとき = {
	name: 'すすめなかったとき',
	defaultActiveCategory: categories.つよさ
}

exports.みつけたとき = {
	name: 'みつけたとき',
	defaultActiveCategory: categories.うごき
}

exports.こうげきするとき = {
	name: 'こうげきするとき',
	defaultActiveCategory: categories.システム
}
