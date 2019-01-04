import '../game'

rule.this = '赤色のドア'

rule.つくられたとき(async function() {
	await this.costume('赤色のドア') // とじている
	this.collisionFlag = true // はいれないようにする
	/*+ つくられたとき */
})

rule.item = '赤色のかぎ'
rule.メッセージされたとき(async function(item) {
	await this.costume('ひらいた赤色のドア') // ひらく！
	this.collisionFlag = false // はいれるようにする
	/*+ メッセージされたとき */
})

rule.item = ('▼ あいて', Rule.Anyone) // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	item.teleport(this) // もう一つのドアにテレポート
	/*+ ふまれたとき */
})
