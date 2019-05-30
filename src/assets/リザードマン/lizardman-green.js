import '../game'

rule.this = '緑色のリザードマン'

rule.つくられたとき(async function() {
	await this.costume('緑色のリザードマン') // 見た目をきめる
	this.family = ('▼ なかま', Family.ドクリツ) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.turn(('▼ むき', Dir.ランダム)) // むきをランダムにする
	await this.walk() // あるく
	await this.attack() // こうげきする
	await this.wait(1) // まつ

	/*+ つねに */
})

rule.すすめなかったとき(async function() {
	await this.turn(('▼ むき', Dir.ランダム)) // むきをランダムにする
	await this.walk() // あるく

	/*+ すすめなかったとき */
})

rule.たおされたとき(async function() {
	this.おとす('緑色のほうせき') // アイテムをおとす

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

// ここから ふまれたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.ふまれたとき(async function(item) {
	/*+ ふまれたとき */
})
// ここまで ふまれたとき
