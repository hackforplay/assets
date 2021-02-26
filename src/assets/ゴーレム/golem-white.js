import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のゴーレム')
	this.なかま = なかま.モンスター
	this.たいりょく = 15
	this.こうげきりょく = 1
	this.あるくはやさ = 0.5

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.まつ(3)
	await this.むきをかえる(むき.ランダム)
	await this.あるく()
	await this.まつ(0.5)
	await this.こうげきする()

	/*+ つねに */
})

rule.たおされたとき(async function() {
	this.しょうかんする('銀色のほうせき', 0, 0) // アイテムをおとす

	/*+ たおされたとき */
})

rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ こうげきされたとき */
	}

	await this.まつ(0.5)
	await this.おいかける(item)
	await this.まつ(0.5)
	await this.こうげきする()

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

rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
