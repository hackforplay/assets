import '../game'

rule.this = '赤色のドア'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('赤色のドア') // とじている
	this.collisionFlag = true // はいれないようにする
	/*+ つくられたとき */
})

rule.item = '赤色のかぎ'
rule.メッセージされたとき(async function(item) {
	this.skin = Hack.skin('ひらいた赤色のドア') // ひらく！
	this.collisionFlag = false // はいれるようにする
	/*+ メッセージされたとき */
})

rule.item = ('▼ あいて', Rule.Anyone) // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	item.warp(this) // ゲートのもう片方にワープ
	/*+ ふまれたとき */
})
