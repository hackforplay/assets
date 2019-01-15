import '../game'

rule.this = '赤色のどうぞう'

rule.つくられたとき(async function() {
	await this.costume('赤色のどうぞう') // みためをきめる
	this.moved = false // まだ動いてない

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	if (!this.moved) {
		await this.walk() // あるく
		this.moved = true // もう動いた

		/*+ メッセージされたとき */
	}
})

// ここから こうげきされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})
// ここまで こうげきされたとき

// ここから ぶつかったとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
})
// ここまで ぶつかったとき
