import '../game'

rule.this = 'スター'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('スター') // 見た目をかえる
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ぶつかったとき(async function(item) {
	item.damageTime = 100 // ムテキにする
	this.destroy() // このアイテムを消す
	/*+ ぶつかったとき */
})

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき
