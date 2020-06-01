import '../game'

rule.つくられたとき(async function () {
	await this.みためをかえる('まるいはか') // 見ためをきめる
	this.たいりょく = 5
	this.なかま = なかま.モンスター

	/*+ つくられたとき */
})

rule.つねに(async function () {
	await this.まつ(10) // この秒数 まつ
	if (this.たいりょく <= 0) return
	await this.しょうかんする('緑色のゾンビ', 1, 0)

	/*+ つねに */
})

rule.こうげきされたとき(async function (item) {
	/*+ こうげきされたとき */
})

rule.ぶつかったとき(async function (item) {
	/*+ ぶつかったとき */
})

rule.メッセージされたとき(async function (item) {
	/*+ メッセージされたとき */
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
