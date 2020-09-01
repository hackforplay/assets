import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のドラキュラ')
	this.なかま = なかま.モンスター
	this.たいりょく = 10
	this.こうげきりょく = 1
	this.みえるきょり = 1
	this.みえるはんい = 0

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.むてきか = true // ムテキになる
	await this.おいかける('プレイヤー')
	await this.てきをみつける()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.まつ(0.5) // この数字のぶん まつ
		this.むてきか = false // ムテキかいじょ
		await this.こうげきする()
		await this.まつ(1) // この数字のぶん まつ

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

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
