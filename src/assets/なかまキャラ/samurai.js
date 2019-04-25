import '../game'

rule.this = 'サムライ'

rule.つくられたとき(async function() {
	await this.costume('サムライ') // 見た目をきめる
	this.family = ('▼ なかま', Family.プレイヤー) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる
	this.n('みつけられるきょり', ('▼ を', 'イコール'), 10) // みえるきょり
	this.n('みつけられるはんい', ('▼ を', 'イコール'), 1) // しかいの広さ
	this.skill = 'ざんげき' // スキルをかえる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.chase4('プレイヤー') // おいかける
	await this.find() // さがす

	/*+ つねに */
})

rule.item = ('▼ あいて', Rule.Enemy)
rule.みつけたとき(async function(item) {
	await this.wait(1) // まつ
	await this.chase4(item) // おいかける
	await this.attack() // こうげきする
	await this.find() // さがす

	/*+ みつけたとき */
})

// ここから ぶつかったとき
rule.item = ('▼ あいて', 'プレイヤー')
rule.ぶつかったとき(async function(item) {
	this.collisionFlag = false // すりぬけるようにする
	await this.wait(1) // まつ
	this.collisionFlag = true // ぶつかるようにする

	/*+ ぶつかったとき */
})
// ここまで ぶつかったとき

// ここから たおされたとき
rule.たおされたとき(async function() {
	/*+ たおされたとき */
})
// ここまで たおされたとき

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
