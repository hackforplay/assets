import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('スイカ')
	this.たいりょく = 1
	this.たいりょくがみえるか = false // HPひょうじを見えないようにする

	/*+ つくられたとき */
})

rule.たおされたとき(async function(item) {
	this.しょうかんする('きられたスイカ', 1, 0)
	this.しょうかんする('きられたスイカ', 0, 1)
	this.しょうかんする('きられたスイカ', -1, 0)
	this.しょうかんする('きられたスイカ', 0, -1)

	/*+ たおされたとき */
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

rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
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

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
