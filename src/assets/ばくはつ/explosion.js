import '../game'

rule.this = 'ばくはつ'

rule.つくられたとき(async function() {
	await this.costume('ばくはつ') // 見た目をきめる
	this.n('ふれたときのダメージ', ('▼ を', 'イコール'), 3)
	this.showHpLabel = false // HPひょうじを見えないようにする
	this.n('たいりょく', ('▼ を', 'イコール'), 0) // きえる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	this.n('ふれたときのダメージ', ('▼ を', 'イコール'), item.atk) // ばくだんの攻撃力と同じにする

	/*+ しょうかんされたとき */
})
