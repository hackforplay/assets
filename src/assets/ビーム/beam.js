import '../game'

rule.this = 'ビーム'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('ビーム') // 見た目をきめる
	this.n('ふれたときのダメージ', ('▼ を', 'イコール'), 1)
	this.n('スピード', ('▼ を', 'イコール'), 3)
	this.n('かんつうする回数', ('▼ を', 'イコール'), 10)

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	this.flyToward() // とんでいく
	await this.wait(1) // この秒数だけ待つ
	this.destroy() // ビーム を けす

	/*+ しょうかんされたとき */
})
