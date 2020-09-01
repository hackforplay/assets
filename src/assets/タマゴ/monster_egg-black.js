import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('黒色のタマゴ')
	this.なかま = なかま.モンスター
	this.たいりょく = 3
	this.こうげきりょく = 1

	/*+ つくられたとき */

	await this.まつ(らんすう(20))

	let ばんごう = らんすう(3)
	if (ばんごう === 0) {
		await this.へんしんする('黒色のドラゴン') // へんしんする
	}
	if (ばんごう === 1) {
		await this.へんしんする('黒色のリザードマン') // へんしんする
	}
	if (ばんごう === 2) {
		await this.へんしんする('赤色のペンギンきし') // へんしんする
	}
})

rule.たおされたとき(async function() {
	this.しょうかんする('緑色のほうせき', 0, 0) // アイテムをおとす

	/*+ たおされたとき */
})

rule.つねに(async function() {
	/*+ つねに */
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
