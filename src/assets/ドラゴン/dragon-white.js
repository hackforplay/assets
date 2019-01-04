import '../game'

rule.this = '白色のドラゴン'

rule.つくられたとき(async function() {
	await this.costume('白色のドラゴン') // 見た目をきめる
	this.family = ('▼ ファミリー', Family.ドクリツ) // ファミリーをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 10) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 3) // こうげき力をきめる
	this.skill = 'ほのお' // スキルをきめる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.wait(1) // やすむ
	await this.attack() // こうげき

	/*+ つねに */
})

rule.たおされたとき(async function() {
	rule.つくる('赤色のほうせき', this.mapX, this.mapY) // アイテムをおとす

	/*+ たおされたとき */
})

// ここから こうげきされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})
// ここまで こうげきされたとき

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき

// ここから ぶつかったとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
})
// ここまで ぶつかったとき
