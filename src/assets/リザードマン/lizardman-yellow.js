import '../game'

rule.this = '黄色のリザードマン'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('黄色のリザードマン') // 見た目をきめる
	this.family = ('▼ ファミリー', Family.ドクリツ) // ファミリーを決める
	this.hp = 3 // 体力を決める
	this.atk = 1 // こうげき力を決める
	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.dir = ('▼ むき', Dir.ランダム) // むきをランダムにする
	await this.walk() // あるく
	await this.attack() // こうげきする
	await this.wait(1) // やすむ
	/*+ つねに */
})

rule.たおされたとき(async function() {
	Hack.score += 1 // スコアをアップする
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
