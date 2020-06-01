import '../game'

rule.つくられたとき(async function () {
	await this.みためをかえる('白色のドラゴン')
	this.なかま = なかま.ドクリツ
	this.たいりょく = 10
	this.こうげきりょく = 3
	this.スキル = 'ほのお'

	/*+ つくられたとき */
})

rule.つねに(async function () {
	await this.まつ(1)
	await this.こうげきする()

	/*+ つねに */
})

rule.たおされたとき(async function () {
	this.しょうかんする('赤色のほうせき', 0, 0) // アイテムをおとす

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
