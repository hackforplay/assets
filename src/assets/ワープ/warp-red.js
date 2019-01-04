import '../game'

rule.this = '赤色のワープ'

rule.つくられたとき(async function() {
	await this.costume('赤色のワープ') // 見た目をかえる
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.ふまれたとき(async function(item) {
	item.teleport(this) // ふんだキャラクターがテレポートする
	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
