import '../game'

rule.つくられたとき(async function () {
	await this.みためをかえる('青色のボタン')

	/*+ つくられたとき */
})

rule.ふまれたとき(async function (item) {
	if (item.は('プレイヤー')) {
		await this.みためをかえる('おされた青色のボタン') // 見た目をかえる
		this.メッセージする('青色のどうぞう')
		await this.まつ(1)
		await this.みためをかえる('青色のボタン') // 見た目をかえる

		/*+ ふまれたとき */
	}
	/*+ ふまれたとき */
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
