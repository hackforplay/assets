import '../game'

rule.this = 'まほうつかい'

rule.つくられたとき(async function() {
	await this.costume('まほうつかい') // 見た目をきめる
	this.family = ('▼ なかま', Family.モンスター) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // たいりょくをきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげきりょくをきめる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.teleportRandom() // ランダムな場所にテレポート
	await this.turn(('▼ むき', Dir.ランダム)) // ランダムにどこかを向く
	await this.wait(2) // この秒数だけまつ
	await this.attack() // こうげきする
	this.しょうかんする('黒色のスライム')
	await this.wait(1) // この秒数だけまつ

	/*+ つねに */
})

rule.たおされたとき(async function() {
	this.しょうかんする('青色のほうせき')

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

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
