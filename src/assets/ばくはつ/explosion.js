import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('ばくはつ')
	this.ダメージ = 3
	this.あるくはやさ = 0
	this.たいりょくがみえるか = false // HPひょうじを見えないようにする
	this.たいりょく = 0 // きえる

	/*+ つくられたとき */
})

rule.しょうかんされたとき(async function(item) {
	this.ダメージ = item.こうげきりょく // ばくだんの攻撃力と同じにする

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

rule.あるいたとき(async function() {
	/*+ あるいたとき */
})

rule.たおされたとき(async function() {
	/*+ たおされたとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
