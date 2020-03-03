import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('まほうつかい')
	this.なかま = なかま.モンスター // なかまをきめる
	this.たいりょく = 3
	this.こうげきりょく = 1

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.teleportRandom() // ランダムな場所にテレポート
	await this.むきをかえる(むき.ランダム)
	await this.まつ(2) // この秒数だけまつ
	await this.こうげきする()
	this.しょうかんする('黒色のスライム', 1, 0)
	await this.まつ(1) // この秒数だけまつ

	/*+ つねに */
})

rule.たおされたとき(async function() {
	this.しょうかんする('青色のほうせき', 0, 0)

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
