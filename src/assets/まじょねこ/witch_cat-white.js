import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のまじょねこ')
	this.なかま = なかま.ドクリツ // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 0) // こうげき力をきめる
	this.n('みつけられるきょり', ('▼ を', 'イコール'), 10) // みえるきょり
	this.n('みつけられるはんい', ('▼ を', 'イコール'), 1) // しかいの広さ

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.teleportRandom() // ランダムな場所にテレポート
	await this.turn(むき.ランダム)
	await this.みつける()
	await this.まつ(4) // 数字のぶん、まつ
	await this.みつける()

	/*+ つねに */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.みつけたとき(async function(item) {
	await this.まつ(1)
	this.しょうかんする('白色のうず').flyToward(item) // itemにむかってとんでいく
	await this.こうげきする()
	await this.まつ(3)

	/*+ みつけたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('青色のほうせき', 0, 0) // アイテムをおとす
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
