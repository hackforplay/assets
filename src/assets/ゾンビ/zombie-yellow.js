import '../game'

rule.つくられたとき(async function () {
	await this.みためをかえる('黄色のゾンビ')
	this.なかま = なかま.モンスター
	this.たいりょく = 3
	this.こうげきりょく = 1

	/*+ つくられたとき */
})

rule.つねに(async function () {
	await this.まつ(1) // この数字のぶん まつ
	await this.おいかける('プレイヤー')
	await this.こうげきする()

	/*+ つねに */
})

rule.たおされたとき(async function () {
	this.しょうかんする('黄色のしたい', 0, 0) // したいになる

	/*+ たおされたとき */
})

rule.こうげきされたとき(async function (item) {
	if (item.は('プレイヤー')) {
		/*+ こうげきされたとき */
	}
	/*+ こうげきされたとき */
})

rule.ぶつかったとき(async function (item) {
	if (item.は('プレイヤー')) {
		/*+ ぶつかったとき */
	}
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

rule.タップされたとき(async function () {
	/*+ タップされたとき */
})
