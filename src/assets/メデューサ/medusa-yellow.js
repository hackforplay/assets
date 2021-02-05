import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('黄色のメデューサ')
	this.なかま = なかま.モンスター
	this.たいりょく = 5
	this.こうげきりょく = 1
	this.みえるきょり = 10
	this.みえるはんい = 0
	this.スキル = 'せきかこうせん'

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.むきをかえる(むき.ランダム)
	await this.あるく()
	await this.てきをみつける()
	for (let i = 0; i < 3; i++) {
		await this.むきをかえる(むき.みぎて) // キャラから見て右をむく
		await this.あるく()
		await this.てきをみつける()
		await this.まつ(1)
	}

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.うしろにあるく()
		await this.こうげきする()
		await this.まつ(1)
		await this.てきをみつける()

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('赤色のほうせき', 0, 0)

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
