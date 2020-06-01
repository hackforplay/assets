import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のゴースト')
	this.なかま = なかま.モンスター
	this.たいりょく = 3
	this.こうげきりょく = 1
	this.みえるきょり = 1
	this.みえるはんい = 0

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.まつ(2) // この数字のぶん まつ
	this.みえやすさ -= 0.3 // うすくなる
	await this.おいかける('プレイヤー')
	await this.みつける()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		this.みえやすさ = 1 // すがたをあらわす
		await this.こうげきする()

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		this.みえやすさ = 1 // すがたをあらわす

		/*+ こうげきされたとき */
	}
	/*+ こうげきされたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('青色のほうせき', 0, 0) // アイテムをおとす

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
