import '../game'

rule.this = '白色のリザードマン'

rule.つくられたとき(async function() {
	await this.costume('白色のリザードマン') // 見た目をきめる
	this.family = ('▼ ファミリー', Family.ドクリツ) // ファミリーをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.dir = ('▼ むき', Dir.ランダム) // むきをランダムにする
	await this.walk() // あるく
	await this.attack() // こうげきする
	await this.wait(1) // やすむ

	/*+ つねに */
})

rule.すすめなかったとき(async function() {
	this.dir = ('▼ むき', Dir.ランダム) // むきをランダムにする
	await this.walk() // あるく

	/*+ すすめなかったとき */
})

rule.たおされたとき(async function() {
	rule.つくる('緑色のほうせき', this.mapX, this.mapY) // アイテムをおとす

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
