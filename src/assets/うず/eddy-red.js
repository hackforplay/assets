import '../game'

rule.this = '赤色のうず'

rule.つくられたとき(async function() {
	await this.costume('赤色のうず') // 見た目をきめる
	this.n('ふれたときのダメージ', ('▼ を', 'イコール'), 1)
	this.n('スピード', ('▼ を', 'イコール'), 1)
	this.n('かんつうする回数', ('▼ を', 'イコール'), 10)

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	this.flyToward() // とんでいく
	await this.wait(5) // この秒数だけ待つ
	this.destroy() // 赤色のうず を けす

	/*+ しょうかんされたとき */
})

// ここから つねに
rule.つねに(async function() {
	this.frame = [0, 0, 2, 2, 1, 1] // アニメーション設定
	/*+ つねに */
})
// ここまで つねに
