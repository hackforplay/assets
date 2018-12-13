import '../game';

rule.this = 'ばくはつ';

rule.つくられたとき(async function() {
	this.skin = Hack.skin('ばくはつ');
	this.mod(Hack.createDamageMod()); // ダメージオブジェクトにする

	await this.wait(1); // この秒数だけ待つ
	this.destroy(); // ばくはつ を けす
	/*+ つくられたとき */
});

// ここから しょうかんされたとき
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
});
// ここまで しょうかんされたとき
