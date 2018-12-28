import '../game'

rule.this = '黄色のかぎ'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('黄色のかぎ') // 見た目をかえる
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	this.message('黄色のドア') // 黄色のドアをひらく
	Hack.log('黄色の ドアが ひらいた！')
	this.destroy() // このアイテムを消す
	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
