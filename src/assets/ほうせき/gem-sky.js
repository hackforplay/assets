import '../game'

rule.this = '水色のほうせき'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('水色のほうせき') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ぶつかったとき(async function(item) {
	item.n('おかね', ('▼ を', 'ふやす'), 300)
	this.destroy() // このアイテムを消す

	/*+ ぶつかったとき */
})

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき
