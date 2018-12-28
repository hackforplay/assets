import '../game'

rule.this = 'ばくはつ'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('ばくはつ') // 見た目をきめる
	this.n('ふれたときのダメージ', ('▼ を', 'イコール'), 3)
	await this.wait(1) // この秒数だけ待つ
	this.destroy() // ばくはつを けす

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	this.n('ふれたときのダメージ', ('▼ を', 'イコール'), item.atk) // ばくだんの攻撃力と同じにする

	/*+ しょうかんされたとき */
})

// ここから つねに
rule.つねに(async function() {
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
		4,
		5,
		5,
		5,
		5,
		5,
		null
	]
	/*+ つねに */
})
// ここまで つねに
