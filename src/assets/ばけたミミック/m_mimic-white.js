import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のたからばこ')
	this.なかま = なかま.ドクリツ
	this.たいりょく = 4
	this.こうげきりょく = 1
	this.たいりょくがみえるか = false // HPひょうじを見えないようにする

	/*+ つくられたとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.おいかける(item)
		this.へんしんする('白色のミミック') // ミミックに へんしんする

		/*+ こうげきされたとき */
	}
	/*+ こうげきされたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('青色のほうせき', 0, 0) // アイテムをおとす

	/*+ たおされたとき */
})

rule.メッセージされたとき(async function(item) {
	this.へんしんする('白色のミミック') // ミミックに へんしんする

	/*+ メッセージされたとき */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
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
