import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('黄色のトグルスイッチ') // 見た目をかえる

	/*+ つくられたとき */
})

rule.こうげきされたとき(async function(item) {
	this.メッセージする('黄色のとつブロック') // 黄色のブロックにメッセージ
	this.メッセージする('緑色のとつブロック') // 緑色のブロックにメッセージ
	this.へんしんする('緑色のトグルスイッチ') // スイッチきりかえ

	/*+ こうげきされたとき */
})

rule.つねに(async function() {
	/*+ つねに */
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

rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})

rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
