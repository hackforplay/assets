import '../game';

rule.this = '黒色のドラゴン';

rule.つくられたとき(async function() {
	this.mod(('▼ スキン', Skin.ドラゴン)); // 見た目をきめる
	this.family = ('▼ ファミリー', Family.ドクリツ); // ファミリーを決める
	this.hp = 10; // 体力を決める
	this.atk = 3; // こうげき力を決める
	/*+ つくられたとき */
});

rule.つねに(async function() {
	await this.attack(); // 自分が攻撃する
	/*+ つねに */
});

rule.こうげきされたとき(async function() {
	await this.attack(); // こうげきしかえす
	/*+ こうげきされたとき */
});

rule.たおされたとき(async function() {
	Hack.score += 5; // スコアをアップする
	/*+ たおされたとき */
});
