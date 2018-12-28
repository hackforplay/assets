import '../game'

rule.this = 'ほのお'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('ほのお') // 見た目をきめる
	this.n('あるくはやさ', ('▼ を', 'イコール'), 1.5)
	this.n('かんつうする回数', ('▼ を', 'イコール'), 0)

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	this.flyToward() // とんでいく
	await this.wait(2) // この秒数だけ待つ
	this.destroy() // ほのお を けす

	/*+ しょうかんされたとき */
})
