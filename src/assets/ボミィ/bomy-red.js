import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('赤色のボミィ')
	this.なかま = なかま.ドクリツ
	this.たいりょく = 3
	this.こうげきりょく = 1

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.おいかける('プレイヤー')
	await this.まつ(1)

	/*+ つねに */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		this.へんしんする('ばくはつ') // ばくはつ
		await this.まつ(0.7)
		this.しょうかんする('緑色のほうせき', 0, 0) // アイテムをおとす

		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('緑色のほうせき', 0, 0) // アイテムをおとす

	/*+ たおされたとき */
})

rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ こうげきされたとき */
	}
	/*+ こうげきされたとき */
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

rule.みつけたとき(async function(item) {
	/*+ みつけたとき */
})

rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})

rule.こうげきするとき(async function() {
	/*+ こうげきするとき */
})

rule.あるいたとき(async function() {
	/*+ あるいたとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
