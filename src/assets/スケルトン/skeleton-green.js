import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('緑色のスケルトン')
	this.なかま = なかま.モンスター
	this.たいりょく = 3
	this.こうげきりょく = 1
	this.みえるきょり = 10
	this.みえるはんい = 0
	this.スキル = 'や'

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.おいかける('プレイヤー')
	await this.てきをみつける()
	await this.まつ(2)

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.まつ(2)
		await this.こうげきする()
		await this.てきをみつける()

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('青色のほうせき', 0, 0) // アイテムをおとす

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

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
