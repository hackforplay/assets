import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のオニ')
	this.なかま = なかま.モンスター
	this.たいりょく = 10
	this.こうげきりょく = 2
	this.みえるきょり = 10
	this.みえるはんい = 0

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.あるくはやさ = 0.5
	await this.まつ(1)
	await this.むきをかえる(むき.ランダム)
	await this.あるく()
	await this.てきをみつける()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		this.あるくはやさ = 2
		await this.あるく()
		await this.こうげきする()
		await this.てきをみつける()

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('銀色のほうせき', 0, 0) // アイテムをおとす

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

rule.あるいたとき(async function() {
	/*+ あるいたとき */
})

rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
