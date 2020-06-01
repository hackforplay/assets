import '../game'

rule.つくられたとき(async function () {
	await this.みためをかえる('黒色のトグルスイッチ') // 見た目をかえる

	/*+ つくられたとき */
})

rule.こうげきされたとき(async function (item) {
	this.メッセージする('黒色のとつブロック') // 黒色のブロックにメッセージ
	this.メッセージする('白色のとつブロック') // 白色のブロックにメッセージ
	this.へんしんする('白色のトグルスイッチ') // スイッチきりかえ

	/*+ こうげきされたとき */
})

rule.つねに(async function () {
	/*+ つねに */
})

rule.ぶつかったとき(async function (item) {
	/*+ ぶつかったとき */
})

rule.じかんがすすんだとき(async function () {
	/*+ じかんがすすんだとき */
})

rule.すすめなかったとき(async function () {
	/*+ すすめなかったとき */
})

rule.みつけたとき(async function (item) {
	/*+ みつけたとき */
})

rule.しょうかんされたとき(async function (item) {
	/*+ しょうかんされたとき */
})

rule.こうげきするとき(async function () {
	/*+ こうげきするとき */
})

rule.たおされたとき(async function () {
	/*+ たおされたとき */
})

rule.タップされたとき(async function () {
	/*+ タップされたとき */
})

rule.メッセージされたとき(async function (item) {
	/*+ メッセージされたとき */
})
