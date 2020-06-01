import '../game'

rule.つくられたとき(async function () {
	await this.みためをかえる('ビーム')
	this.ダメージ = 1
	this.あるくはやさ = 3
	this.かんつうするかいすう = 10

	/*+ つくられたとき */
})

rule.しょうかんされたとき(async function (item) {
	this.とんでいく()
	await this.まつ(1) // この秒数だけ待つ
	this.きえる() // ビーム を けす

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
