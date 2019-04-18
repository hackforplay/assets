import '../game'

rule.this = 'ハート'

rule.つくられたとき(async function() {
	await this.costume('ハート') // 見た目をきめる
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	item.n('たいりょく', ('▼ を', 'ふやす'), 1)
	this.destroy()
	/*+ ふまれたとき */
})

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
