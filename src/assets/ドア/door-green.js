import '../game'

rule.this = '緑色のドア'

rule.つくられたとき(async function() {
	await this.costume('緑色のドア') // とじている
	this.collisionFlag = true // はいれないようにする

	/*+ つくられたとき */
})

rule.item = '緑色のかぎ'
rule.メッセージされたとき(async function(item) {
	await this.costume('ひらいた緑色のドア') // ひらく！
	this.collisionFlag = false // はいれるようにする

	/*+ メッセージされたとき */
})

rule.item = ('▼ あいて', Rule.Anyone) // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	item.teleport(this) // もう一つのドアにテレポート

	/*+ ふまれたとき */
})

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
