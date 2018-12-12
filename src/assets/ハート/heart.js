import '../game';

rule.this = 'ハート';

rule.つくられたとき(async function() {
	this.mod(('▼ スキン', Skin.ハート)); // 見た目をきめる
	/*+ つくられたとき */
});

rule.item = ('▼ あいて', 'プレイヤー');
rule.ぶつかったとき(async function(item) {
	item.hp += 1;
	this.destroy();
	/*+ ぶつかったとき */
});

// ここから しょうかんされたとき
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
});
// ここまで しょうかんされたとき
