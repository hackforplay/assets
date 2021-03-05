import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('ダークナイト')
	this.なかま = なかま.モンスター
	this.たいりょく = 10
	this.こうげきりょく = 1
	this.みえるきょり = 3
	this.みえるはんい = 1

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.まつ(らんすう(3))
	await this.おいかける('プレイヤー')
	await this.てきをみつける()
	await this.こうげきする()
	this.しょうかんする('ダークハンド')
	await this.てきをみつける()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	await this.おいかける(item)
	await this.おいかける(item)
	await this.まつ(0.5)
	await this.こうげきする()
	await this.みぎにあるく()
	await this.こうげきする()
	await this.てきをみつける()

	/*+ みつけたとき */
})

rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ こうげきされたとき */
	}

	await this.まつ(1)
	this.しょうかんする('ダークハンド', 0, 0)
	await this.テレポートランダム()
	await this.まつ(1)

	/*+ こうげきされたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('金色のほうせき', 0, 0)

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

rule.あるいたとき(async function() {
	/*+ あるいたとき */
})

rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
