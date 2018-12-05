const categories = require('./categories');

exports.ゲームがはじまったとき = {
	name: {
		ja: 'ゲームがはじまったとき',
		en: 'gameStarted'
	},
	defaultActiveCategory: categories.キャラクター
};

exports.たおされたとき = {
	name: {
		ja: 'たおされたとき',
		en: 'killed'
	},
	defaultActiveCategory: categories.キャラクター
};
