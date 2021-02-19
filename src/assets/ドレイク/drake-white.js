import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のドレイク')
	this.なかま = なかま.モンスター
	this.たいりょく = 10
	this.こうげきりょく = 1
	this.スキル = 'どくえき'
	this.あるくはやさ = 0.5

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.てきをみつける()
	await this.まつ(1)
	await this.おいかける('プレイヤー')
	await this.おいかける('プレイヤー')
	await this.まつ(0.5)
	await this.こうげきする()
	await this.まつ(1)

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.うしろにあるく()
		await this.うしろにあるく()
		await this.こうげきする()

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
