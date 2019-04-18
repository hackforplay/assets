import '../game'

rule.this = '赤色のボススライム'

rule.つくられたとき(async function() {
	await this.costume('赤色のボススライム') // 見た目をきめる
	this.family = ('▼ なかま', Family.モンスター) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 10) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる
	this.n('みつけられるきょり', ('▼ を', 'イコール'), 3) // みえるきょり
	this.n('みつけられるはんい', ('▼ を', 'イコール'), 0) // しかいの広さ

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.wait(3) // まつ
	await this.find() // さがす
	await this.attack() // こうげきする

	/*+ つねに */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.みつけたとき(async function(item) {
	this.しょうかんする('赤色のスライム')

	/*+ みつけたとき */
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

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき

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

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
