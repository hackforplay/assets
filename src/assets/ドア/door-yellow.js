import '../game';

rule.this = '黄色のドア';

rule.つくられたとき(async function() {
	this.mod(('▼ スキン', Skin.黄色のドア)); // とじている
	this.collisionFlag = true; // はいれないようにする
	/*+ つくられたとき */
});

rule.item = '黄色のかぎ';
rule.メッセージされたとき(async function() {
	this.mod(('▼ スキン', Skin.ひらいた黄色のドア)); // ひらく！
	this.collisionFlag = false; // はいれるようにする
	/*+ メッセージされたとき */
});

rule.item = 'プレイヤー'; // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	item.warp(this); // ゲートのもう片方にワープ
	/*+ ふまれたとき */
});
