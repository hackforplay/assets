import '../game'

rule.this = 'スター'

rule.つくられたとき(async function() {
	await this.costume('スター') // 見た目をかえる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	item.damageTime = 100 // ムテキにする
	this.destroy() // このアイテムを消す

	/*+ ふまれたとき */
})

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
