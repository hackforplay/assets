import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のドラキュラ')
	this.なかま = なかま.モンスター // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 10) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる
	this.n('みつけられるきょり', ('▼ を', 'イコール'), 1) // みえるきょり
	this.n('みつけられるはんい', ('▼ を', 'イコール'), 0) // しかいの広さ

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.むてきか = true // ムテキになる
	await this.chase4('プレイヤー') // おいかける
	await this.みつける()

	/*+ つねに */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.みつけたとき(async function(item) {
	await this.まつ(0.5) // この数字のぶん まつ
	this.むてきか = false // ムテキかいじょ
	await this.こうげきする()
	await this.まつ(1) // この数字のぶん まつ

	/*+ みつけたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('銀色のほうせき', 0, 0) // アイテムをおとす

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
