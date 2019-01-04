import '../game'

rule.this = '銀色のほうせき'

rule.つくられたとき(async function() {
	await this.costume('銀色のほうせき') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ぶつかったとき(async function(item) {
	item.n('おかね', ('▼ を', 'ふやす'), 50)
	this.destroy() // このアイテムを消す

	/*+ ぶつかったとき */
})

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき
