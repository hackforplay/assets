import '../game';

rule.this = '石のかいだん';

rule.つくられたとき(async function() {
	this.mod(('▼ スキン', Skin.石のかいだん)); // 見た目をかえる
	/*+ つくられたとき */
});

rule.item = ('▼ あいて', 'プレイヤー');
rule.ふまれたとき(async function(item) {
	item.warp(this); // ふんだキャラクターがワープする
	/*+ ふまれたとき */
});

// ここから メッセージされたとき
rule.メッセージされたとき(async function() {
	/*+ メッセージされたとき */
});
// ここまで メッセージされたとき
