import '../game'

rule.つくられたとき(async function() {
	await this.costume('赤色のゾンビ') // 見た目をきめる
	this.family = ('▼ なかま', Family.モンスター) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.wait(1) // この数字のぶん まつ
	await this.chase4('プレイヤー') // おいかける
	await this.attack() // こうげきする

	/*+ つねに */
})

rule.たおされたとき(async function() {
	this.しょうかんする('赤色のしたい', 0, 0) // したいになる

	/*+ たおされたとき */
})

// ここから こうげきされたとき
rule.item = ('▼ あいて', 'プレイヤー')
rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})
// ここまで こうげきされたとき

// ここから ぶつかったとき
rule.item = ('▼ あいて', 'プレイヤー')
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

// ここから すすめなかったとき
rule.すすめなかったとき(async function() {
	/*+ すすめなかったとき */
})
// ここまで すすめなかったとき

// ここから みつけたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.みつけたとき(async function(item) {
	/*+ みつけたとき */
})
// ここまで みつけたとき

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき

// ここから こうげきするとき
rule.こうげきするとき(async function() {
	/*+ こうげきするとき */
})
// ここまで こうげきするとき

// ここから タップされたとき
rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
// ここまで タップされたとき
