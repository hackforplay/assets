import '../game'

rule.this = '青色のボタン'

rule.つくられたとき(async function() {
	await this.costume('青色のボタン') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.ふまれたとき(async function(item) {
	this.message('青色のどうぞう') // どうぞうにメッセージ

	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
