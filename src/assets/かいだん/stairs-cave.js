import '../game'

rule.this = '土のかいだん'

rule.つくられたとき(async function() {
	await this.costume('土のかいだん') // 見た目をかえる
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
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
