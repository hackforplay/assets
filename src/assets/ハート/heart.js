import '../game'

rule.this = 'ハート'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('ハート') // 見た目をきめる
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ぶつかったとき(async function(item) {
	item.n('たいりょく', ('▼ を', 'ふやす'), 1)
	this.destroy()
	/*+ ぶつかったとき */
})

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき
