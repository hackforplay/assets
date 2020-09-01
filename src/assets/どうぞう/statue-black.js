import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('黒色のどうぞう') // みためをきめる

	/*+ つくられたとき */
})

rule.メッセージされたとき(async function(item) {
	await this.あるく()

	/*+ メッセージされたとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})

rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
})

rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
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

rule.こうげきするとき(async function() {
	/*+ こうげきするとき */
})

rule.あるいたとき(async function() {
	/*+ あるいたとき */
})

rule.たおされたとき(async function() {
	/*+ たおされたとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
