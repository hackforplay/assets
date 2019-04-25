import '../game'

rule.this = 'ざんげき'

rule.つくられたとき(async function() {
	await this.costume('ざんげき') // 見た目をきめる
	this.n('ふれたときのダメージ', ('▼ を', 'イコール'), 1)
	this.n('スピード', ('▼ を', 'イコール'), 2)
	this.n('かんつうする回数', ('▼ を', 'イコール'), 10)

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	this.flyToward() // とんでいく
	await this.wait(0.2) // この秒数だけ待つ
	this.destroy() // ざんげき を けす

	/*+ しょうかんされたとき */
})

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
