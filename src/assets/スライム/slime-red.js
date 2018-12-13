import '../game';

rule.this = '赤色のスライム';

rule.つくられたとき(function() {
	this.skin = Hack.skin('赤色のスライム'); // 見た目を決める
	this.family = ('▼ ファミリー', Family.ドクリツ); // ファミリーを決める
	this.hp = 3; // 体力を決める
	this.atk = 1; // こうげき力を決める
	/*+ つくられたとき */
});

rule.つねに(async function() {
	await this.attack(); // こうげきする
	await this.wait(1); // やすむ
	/*+ つねに */
});

rule.たおされたとき(async function() {
	Hack.score += 1; // スコアをアップする
	/*+ たおされたとき */
});

// ここから こうげきされたとき
rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
});
// ここまで こうげきされたとき

// ここから しょうかんされたとき
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
});
// ここまで しょうかんされたとき

// ここから ぶつかったとき
rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
});
// ここまで ぶつかったとき
