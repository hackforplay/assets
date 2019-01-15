import '../game'

rule.this = '黄色のボタン'

rule.つくられたとき(async function() {
	await this.costume('黄色のボタン') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.ふまれたとき(async function(item) {
	this.message('金色のどうぞう') // どうぞうにメッセージ

	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
