import '../game'

rule.this = '青色のかぎ'

rule.つくられたとき(async function() {
	await this.costume('青色のかぎ') // 見た目をかえる
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	this.message('青色のドア') // 青色のドアをひらく
	this.talk('青色の ドアが ひらいた！')
	this.destroy() // このアイテムを消す
	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
