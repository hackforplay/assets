import '../game';

rule.this = '緑色のワープ';

rule.つくられたとき(async function() {
	this.skin = Hack.skin('緑色のワープ'); // 見た目をかえる
	/*+ つくられたとき */
});

rule.item = ('▼ あいて', Rule.Anyone);
rule.ふまれたとき(async function(item) {
	item.warp(this); // ふんだキャラクターがワープする
	/*+ ふまれたとき */
});

// ここから メッセージされたとき
rule.メッセージされたとき(async function() {
	/*+ メッセージされたとき */
});
// ここまで メッセージされたとき
