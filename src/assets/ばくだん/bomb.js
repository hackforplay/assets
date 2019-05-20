import '../game'

rule.this = 'ばくだん'

rule.つくられたとき(async function() {
	await this.costume('ばくだん') // 見た目をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1)
	await this.wait(3) // この秒数だけまつ

	const item1 = this.しょうかんする('ばくはつ') // ばくはつ を おこす
	item1.locate(this.mapX, this.mapY) // バクダンと同じばしょにする
	this.destroy() // バクダン を けす

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
