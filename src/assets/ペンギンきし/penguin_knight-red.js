import '../game'

rule.this = '赤色のペンギンきし'

rule.つくられたとき(async function() {
	await this.costume('赤色のペンギンきし') // 見た目をきめる
	this.family = ('▼ なかま', Family.ドクリツ) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる
	this.n('みつけられるきょり', ('▼ を', 'イコール'), 10) // みえるきょり
	this.n('みつけられるはんい', ('▼ を', 'イコール'), 0) // しかいの広さ

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.turn(('▼ むき', Dir.ランダム)) // むきをランダムにする
	await this.walk() // あるく
	await this.find() // さがす
	await this.wait(2) // まつ

	/*+ つねに */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.みつけたとき(async function(item) {
	await this.walk() // あるく
	await this.attack() // こうげき
	await this.find() // さがす

	/*+ みつけたとき */
})

rule.たおされたとき(async function() {
	this.おとす('緑色のほうせき') // アイテムをおとす
	/*+ たおされたとき */
})

// ここから すすめなかったとき
rule.すすめなかったとき(async function() {
	/*+ すすめなかったとき */
})
// ここまで すすめなかったとき

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

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき

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
