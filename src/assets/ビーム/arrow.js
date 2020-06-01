import '../game'

rule.つくられたとき(async function () {
	await this.みためをかえる('や')
	this.ダメージ = 1
	this.あるくはやさ = 2
	this.かんつうするかいすう = 0

	/*+ つくられたとき */
})

rule.しょうかんされたとき(async function (item) {
	this.とんでいく()
	await this.まつ(2) // この秒数だけ待つ
	this.きえる() // や を けす

	/*+ しょうかんされたとき */
})

rule.つねに(async function () {
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

rule.こうげきするとき(async function () {
	/*+ こうげきするとき */
})

rule.たおされたとき(async function () {
	/*+ たおされたとき */
})

rule.タップされたとき(async function () {
	/*+ タップされたとき */
})
