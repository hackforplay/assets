import '../game';

rule.this = 'かくしかいだん';

rule.つくられたとき(async function() {
	this.skin = Hack.skin('石のかいだん'); // 見た目をかえる
	this.opacity = 0; // とうめいになる
	/*+ つくられたとき */
});

rule.item = ('▼ あいて', 'プレイヤー');
rule.ふまれたとき(async function(item) {
	item.warp(this); // ふんだキャラクターがワープする
	/*+ ふまれたとき */
});

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone);
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
});
// ここまで メッセージされたとき
