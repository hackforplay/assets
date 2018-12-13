import '../game';

rule.this = '土のかいだん';

rule.つくられたとき(async function() {
	this.skin = Hack.skin('土のかいだん'); // 見た目をかえる
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
