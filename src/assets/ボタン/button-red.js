import '../game'

rule.this = '赤色のボタン'

rule.つくられたとき(async function() {
	await this.costume('赤色のボタン') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.ふまれたとき(async function(item) {
	this.message('赤色のどうぞう') // どうぞうにメッセージ

	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
