import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('でんげき')
	this.ダメージ = 1
	this.たいりょくがみえるか = false // HPひょうじを見えないようにする
	this.たいりょく = 0 // きえる

	/*+ つくられたとき */
})

rule.しょうかんされたとき(async function(item) {
	await this.いく(item.ひだりから, item.うえから) // itemのばしょにしょうかんされる

	/*+ しょうかんされたとき */
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

rule.こうげきするとき(async function() {
	/*+ こうげきするとき */
})

rule.たおされたとき(async function() {
	/*+ たおされたとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
