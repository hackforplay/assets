import '../game'

rule.this = '緑色のドア'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('緑色のドア') // とじている
	this.collisionFlag = true // はいれないようにする
	/*+ つくられたとき */
})

rule.item = '緑色のかぎ'
rule.メッセージされたとき(async function(item) {
	this.skin = Hack.skin('ひらいた緑色のドア') // ひらく！
	this.collisionFlag = false // はいれるようにする
	/*+ メッセージされたとき */
})

rule.item = ('▼ あいて', Rule.Anyone) // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	item.teleport(this) // もう一つのドアにテレポート
	/*+ ふまれたとき */
})
