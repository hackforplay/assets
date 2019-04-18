import '../game'

rule.this = '赤色のかぎ'

rule.つくられたとき(async function() {
	await this.costume('赤色のかぎ') // 見た目をかえる
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	this.message('赤色のドア') // 赤色のドアをひらく
	this.talk('赤色の ドアが ひらいた！')
	this.destroy() // このアイテムを消す
	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
