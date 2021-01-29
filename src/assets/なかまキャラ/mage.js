import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('メイジ')
	this.なかま = なかま.プレイヤー
	this.たいりょく = 3
	this.こうげきりょく = 1
	this.みえるきょり = 3
	this.みえるはんい = 1

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.おいかける('プレイヤー')
	await this.てきをみつける()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (this.てきかどうか(item)) {
		await this.まつ(1)
		await this.こうげきする()
		await this.うしろにあるく()
		await this.てきをみつける()
		await this.あるく()
		await this.てきをみつける()

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.こうげきするとき(async function() {
	this.しょうかんする('かえん', 3, 1)
	this.しょうかんする('かえん', 3, 0)
	this.しょうかんする('かえん', 3, -1)

	/*+ こうげきするとき */
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

rule.あるいたとき(async function() {
	/*+ あるいたとき */
})

rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
