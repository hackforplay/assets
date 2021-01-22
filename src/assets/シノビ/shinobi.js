import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('シノビ')
	this.なかま = なかま.モンスター
	this.たいりょく = 5
	this.こうげきりょく = 1
	this.みえるきょり = 6
	this.みえるはんい = 0

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.おいかける('プレイヤー')
	await this.てきをみつける()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.まつ(0.5)
		this.あるくはやさ = 10
		await this.あるく(5)
		this.あるくはやさ = 1
		await this.こうげきする()
		await this.まつ(1)

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.すすめなかったとき(async function() {
	await this.こうげきする()

	/*+ すすめなかったとき */
})

rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.みためをかえる('すがおのシノビ')
		await this.まつ(0.1)
		this.テレポートランダム()

		/*+ こうげきされたとき */
	}
	/*+ こうげきされたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('銀色のほうせき', 0, 0) // アイテムをおとす
	/*+ たおされたとき */
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
