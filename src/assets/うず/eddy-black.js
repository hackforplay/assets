import '../game'

rule.this = '黒色のうず'

rule.つくられたとき(async function() {
	await this.costume('黒色のうず') // 見た目をきめる
	this.n('ふれたときのダメージ', ('▼ を', 'イコール'), 1)
	this.n('スピード', ('▼ を', 'イコール'), 1)
	this.n('かんつうする回数', ('▼ を', 'イコール'), 10)

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	this.flyToward() // とんでいく
	await this.wait(5) // この秒数だけ待つ
	this.destroy() // 黒色のうず を けす

	/*+ しょうかんされたとき */
})

// ここから つねに
rule.つねに(async function() {
	/*+ つねに */
})
// ここまで つねに
