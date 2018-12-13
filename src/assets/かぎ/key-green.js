import '../game';

rule.this = '緑色のかぎ';

rule.つくられたとき(async function() {
	this.skin = Hack.skin('緑色のかぎ'); // 見た目をかえる
	/*+ つくられたとき */
});

rule.item = ('▼ あいて', 'プレイヤー');
rule.ふまれたとき(async function(item) {
	this.message('緑色のドア'); // ゲート_イエローをひらく
	Hack.log('緑色の ドアが ひらいた！');
	this.destroy(); // このアイテムを消す
	/*+ ふまれたとき */
});

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone);
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
});
// ここまで メッセージされたとき
