import '../game'

rule.this = '金色のほうせき'

rule.つくられたとき(async function() {
	await this.costume('金色のほうせき') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	item.n('おかね', ('▼ を', 'ふやす'), 100)
	this.destroy() // このアイテムを消す

	/*+ ふまれたとき */
})

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき

// ここから つねに
rule.つねに(async function(item) {
	/*+ つねに */
})
// ここまで つねに
