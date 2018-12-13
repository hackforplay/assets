import '../game';

rule.this = 'ダイヤモンド';

rule.つくられたとき(async function() {
	this.skin = Hack.skin('ダイヤモンド'); // 見た目をきめる
	/*+ つくられたとき */
});

rule.item = ('▼ あいて', 'プレイヤー');
rule.ぶつかったとき(async function(item) {
	this.destroy(); // このアイテムを消す
	Hack.score += 10; // スコアをアップする
	/*+ ぶつかったとき */
});

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone);
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
});
// ここまで しょうかんされたとき
