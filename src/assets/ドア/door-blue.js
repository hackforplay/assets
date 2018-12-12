import '../game';

rule.this = '青色のドア';

rule.つくられたとき(async function() {
	this.mod(('▼ スキン', Skin.青色のドア)); // とじている
	this.collisionFlag = true; // はいれないようにする
	/*+ つくられたとき */
});

rule.item = '青色のかぎ';
rule.メッセージされたとき(async function() {
	this.mod(('▼ スキン', Skin.ひらいた青色のドア)); // ひらく！
	this.collisionFlag = false; // はいれるようにする
	/*+ メッセージされたとき */
});

rule.item = ('▼ あいて', Rule.Anyone); // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	item.warp(this); // ゲートのもう片方にワープ
	/*+ ふまれたとき */
});
