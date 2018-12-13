import '../game';

rule.this = '白色のドラゴン';

rule.つくられたとき(async function() {
	this.skin = Hack.skin('白色のドラゴン'); // 見た目をきめる
	this.family = ('▼ ファミリー', Family.ドクリツ); // ファミリーを決める
	this.hp = 10; // 体力を決める
	this.atk = 3; // こうげき力を決める
	/*+ つくられたとき */
});

rule.つねに(async function() {
	await this.attack(); // 自分が攻撃する
	await this.wait(1); // やすむ
	/*+ つねに */
});

rule.item = ('▼ あいて', Rule.Anyone);
rule.こうげきされたとき(async function(item) {
	await this.attack(); // こうげきしかえす
	/*+ こうげきされたとき */
});

rule.たおされたとき(async function() {
	Hack.score += 5; // スコアをアップする
	/*+ たおされたとき */
});

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone);
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
});
// ここまで しょうかんされたとき

// ここから ぶつかったとき
rule.item = ('▼ あいて', Rule.Anyone);
rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
});
// ここまで ぶつかったとき
