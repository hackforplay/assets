import '../game'

rule.this = '緑色のまじょねこ'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('緑色のまじょねこ') // 見た目をきめる
	this.family = ('▼ なかま', Family.ドクリツ) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 0) // こうげき力をきめる
	this.n('みつけられるきょり', ('▼ を', 'イコール'), 10) // みえるきょり
	this.n('みつけられるはんい', ('▼ を', 'イコール'), 1) // しかいの広さ

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.teleportRandom() // ランダムな場所にテレポート
	await this.turn(('▼ むき', Dir.ランダム))
	await this.find() // さがす
	await this.wait(4) // 数字のぶん、まつ
	await this.find() // さがす

	/*+ つねに */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.みつけたとき(async function(item) {
	await this.wait(1) // まつ
	this.しょうかんする('緑色のうず').flyToward(item) // itemにむかってとんでいく
	await this.attack() // こうげきする
	await this.wait(3) // まつ

	/*+ みつけたとき */
})

rule.たおされたとき(async function() {
	this.おとす('青色のほうせき') // アイテムをおとす
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
