import '../game';

rule.this = '赤色のドア';

rule.つくられたとき(async function() {
	this.mod(('▼ スキン', Skin.とじたゲート_レッド)); // とじている
	this.collisionFlag = true; // はいれないようにする
	/*+ つくられたとき */
});

rule.item = '赤色のかぎ';
rule.メッセージされたとき(async function() {
	this.mod(('▼ スキン', Skin.ひらいたゲート_レッド)); // ひらく！
	this.collisionFlag = false; // はいれるようにする
	/*+ メッセージされたとき */
});

rule.item = 'プレイヤー'; // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	item.warp(this); // ゲートのもう片方にワープ
	/*+ ふまれたとき */
});
