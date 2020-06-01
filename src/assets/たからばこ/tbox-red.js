import '../game'

rule.つくられたとき(async function () {
	await this.みためをかえる('赤色のたからばこ') // 見ためをきめる
	this.あいた = false // まだ、あいていない（変数）

	/*+ つくられたとき */
})

rule.こうげきされたとき(async function (item) {
	if (item.は('プレイヤー')) {
		if (this.あいた === true) return // もし、あいていたら、ここで終わる（変数）
		await this.みためをかえる('あいた赤色のたからばこ') // 見ためをかえる
		this.あいた = true // あいた（変数）
		this.しょうかんする('赤色のほうせき', 1, 0) // 赤色のほうせきを出す。この行をけすと、出なくなる

		/*+ こうげきされたとき */
	}
	/*+ こうげきされたとき */
})

rule.つねに(async function () {
	/*+ つねに */
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
