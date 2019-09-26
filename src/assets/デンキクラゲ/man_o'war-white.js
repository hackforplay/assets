import '../game'

rule.つくられたとき(async function() {
	await this.costume('白色のデンキクラゲ') // 見た目をきめる
	this.family = ('▼ なかま', Family.モンスター) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる
	this.skill = 'でんげき' // スキルをきめる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.wait(1) // まつ
	await this.turn(('▼ むき', Dir.ランダム)) // ランダムにどこかを向く
	await this.walk() // あるく

	/*+ つねに */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	await this.attack() // こうげきする
	await this.wait(1) // まつ

	/*+ こうげきされたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('青色のほうせき', 0, 0) // アイテムをおとす

	/*+ たおされたとき */
})

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
