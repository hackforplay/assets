import '../game'

rule.this = 'ほのお'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('ほのお') // 見た目をきめる
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	this.mod(Hack.createDamageMod(item.atk, item)) // ダメージオブジェクトにする
	item.shoot(this, item.forward, 5) // このスピードで打ち出される
	await this.wait(1) // この秒数だけ待つ
	this.destroy() // ほのお を けす
	/*+ しょうかんされたとき */
})
