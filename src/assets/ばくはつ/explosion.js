import '../game';

rule.this = 'ばくはつ';

rule.つくられたとき(async function() {
	this.skin = Hack.skin('ばくはつ');
	this.frame = [
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		2,
		3,
		3,
		3,
		3,
		3,
		4,
		4,
		4,
		4,
		4
	];
	this.mod(Hack.createDamageMod()); // ダメージオブジェクトにする

	await this.wait(1); // この秒数だけ待つ
	this.destroy(); // ばくはつ を けす
	/*+ つくられたとき */
});

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone);
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
});
// ここまで しょうかんされたとき
