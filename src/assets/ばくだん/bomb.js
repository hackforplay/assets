import '../game';

rule.this = 'ばくだん';

rule.つくられたとき(async function() {
	this.skin = Hack.skin('ばくだん'); // 見た目をきめる
	this.atk = 3; // ばくはつ の ダメージ
	await this.wait(3); // この秒数だけまつ

	const item1 = this.しょうかんする('ばくはつ'); // ばくはつ を おこす
	item1.locate(this.mapX, this.mapY); // バクダンと同じ場所にする
	item1.atk = this.atk;
	this.destroy(); // バクダン を けす
	/*+ つくられたとき */
});

rule.item = ('▼ あいて', Rule.Anyone);
rule.しょうかんされたとき(async function(item) {
	this.atk = item.atk; // しょうかんした人と同じこうげき力にする
	/*+ しょうかんされたとき */
});
