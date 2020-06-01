import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('緑色のボススライム')
	this.なかま = なかま.モンスター
	this.たいりょく = 10
	this.こうげきりょく = 1
	this.みえるきょり = 3
	this.みえるはんい = 0

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.まつ(3)
	await this.みつける()
	await this.こうげきする()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		this.しょうかんする('緑色のスライム', 1, 0)

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('赤色のほうせき', 0, 0) // アイテムをおとす

	/*+ たおされたとき */
})

rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ こうげきされたとき */
	}
	/*+ こうげきされたとき */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
})

rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})

rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})

rule.すすめなかったとき(async function() {
	/*+ すすめなかったとき */
})

rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})

rule.こうげきするとき(async function() {
	/*+ こうげきするとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
