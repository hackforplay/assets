import '../game';

rule.this = '青色のドア';

rule.つくられたとき(async function() {
	this.mod(('▼ スキン', Skin.とじたゲート_ブルー)); // とじている
	this.collisionFlag = true; // はいれないようにする
	/*+ つくられたとき */
});

rule.item = '青色のかぎ';
rule.メッセージされたとき(async function() {
	this.mod(('▼ スキン', Skin.ひらいたゲート_ブルー)); // ひらく！
	this.collisionFlag = false; // はいれるようにする
	/*+ メッセージされたとき */
});

rule.item = 'プレイヤー'; // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	item.warp(this); // ゲートのもう片方にワープ
	/*+ ふまれたとき */
});
