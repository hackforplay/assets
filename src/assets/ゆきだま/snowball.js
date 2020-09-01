import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('ゆきだま') // みためをきめる

	/*+ つくられたとき */
})

rule.ぶつかったとき(async function(item) {
	if (item.name === 'プレイヤー') {
		this.forward = item.forward // あいてと同じ方向を向く
		await this.あるく()
	}

	if (item.name === 'ゆきだま') {
		this.きえる() // じぶんを けす
		item.きえる() // あいてを けす
		this.しょうかんする('ゆきだるま', 1, 0)
	}

	/*+ ぶつかったとき */
})

rule.すすめなかったとき(async function() {
	this.きえる() // じぶんを けす
	this.しょうかんする('ゆきだま', -1, 0)

	/*+ すすめなかったとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})

rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})

rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
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

rule.たおされたとき(async function() {
	/*+ たおされたとき */
})

rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
