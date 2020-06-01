import '../game'

rule.つくられたとき(async function () {
	await this.みためをかえる('白色のミミック')
	this.なかま = なかま.ドクリツ
	this.たいりょく = 4
	this.こうげきりょく = 1
	this.みえるきょり = 10
	this.みえるはんい = 1

	/*+ つくられたとき */
})

rule.つねに(async function () {
	await this.みつける()
	await this.まつ(1)
	await this.あるく()
	this.むきをかえる(むき.ランダム)

	/*+ つねに */
})

rule.みつけたとき(async function (item) {
	if (item.は('プレイヤー')) {
		await this.おいかける(item)
		await this.こうげきする()
		await this.みつける()

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.たおされたとき(async function () {
	this.しょうかんする('青色のほうせき', 0, 0) // アイテムをおとす

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

rule.しょうかんされたとき(async function (item) {
	/*+ しょうかんされたとき */
})

rule.こうげきするとき(async function () {
	/*+ こうげきするとき */
})

rule.タップされたとき(async function () {
	/*+ タップされたとき */
})
