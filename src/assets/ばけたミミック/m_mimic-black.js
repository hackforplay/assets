import '../game'

rule.this = '黒色のばけたミミック'

rule.つくられたとき(async function() {
	await this.costume('黒色のたからばこ') // 見た目をきめる
	this.family = ('▼ なかま', Family.ドクリツ) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 4) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる
	this.showHpLabel = false // HPひょうじを見えないようにする

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.こうげきされたとき(async function(item) {
	await this.chase4(item) // おいかける
	this.へんしんする('黒色のミミック') // ミミックに へんしんする

	/*+ こうげきされたとき */
})

rule.たおされたとき(async function() {
	rule.つくる('青色のほうせき', this.mapX, this.mapY) // アイテムをおとす

	/*+ たおされたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	this.へんしんする('黒色のミミック') // ミミックに へんしんする

	/*+ メッセージされたとき */
})

// ここから ぶつかったとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
})
// ここまで ぶつかったとき

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき
