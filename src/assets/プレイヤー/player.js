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

rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})

rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
})

rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})

rule.すすめなかったとき(async function() {
	/*+ すすめなかったとき */
})

rule.みつけたとき(async function(item) {
	/*+ みつけたとき */
})

rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
