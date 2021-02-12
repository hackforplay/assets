import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('ナイト男')
	this.なかま = なかま.プレイヤー
	this.たいりょく = 20
	this.こうげきりょく = 1
	this.みえるきょり = 5
	this.みえるはんい = 0

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.おいかける('プレイヤー')
	await this.てきをみつける()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (this.てきかどうか(item)) {
		await this.あるく()
		await this.こうげきする()
		await this.まつ(2)
		await this.てきをみつける()

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
})

rule.たおされたとき(async function() {
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

rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})

rule.こうげきするとき(async function() {
	/*+ こうげきするとき */
})

rule.あるいたとき(async function() {
	/*+ あるいたとき */
})

rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
