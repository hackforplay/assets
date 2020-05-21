import '../game'

rule.つくられたとき(async function() {
	Player.set(this)
	await this.みためをかえる('ゆうしゃ男')
	this.なかま = なかま.プレイヤー
	this.たいりょく = 3
	this.こうげきりょく = 1

	/*+ つくられたとき */
})

rule.たおされたとき(async function() {
	ハック.ゲームオーバー()

	/*+ たおされたとき */
})

rule.こうげきするとき(async function() {
	/*+ こうげきするとき */
})

rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})

// ここから こうげきされたとき
rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})
// ここまで こうげきされたとき

// ここから ぶつかったとき
rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
})
// ここまで ぶつかったとき

// ここから メッセージされたとき
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき

// ここから すすめなかったとき
rule.すすめなかったとき(async function() {
	/*+ すすめなかったとき */
})
// ここまで すすめなかったとき

// ここから みつけたとき
rule.みつけたとき(async function(item) {
	/*+ みつけたとき */
})
// ここまで みつけたとき

// ここから しょうかんされたとき
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき

// ここから つねに
rule.つねに(async function() {
	/*+ つねに */
})
// ここまで つねに

// ここから タップされたとき
rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
// ここまで タップされたとき
