import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('緑色のまじょねこ')
	this.なかま = なかま.ドクリツ
	this.たいりょく = 3
	this.こうげきりょく = 0
	this.みえるきょり = 10
	this.みえるはんい = 1

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.テレポートランダム()
	await this.むきをかえる(むき.ランダム)
	await this.みつける()
	await this.まつ(4) // 数字のぶん、まつ
	await this.みつける()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.まつ(1)
		this.しょうかんする('緑色のうず').flyToward(item) // itemにむかってとんでいく
		await this.こうげきする()
		await this.まつ(3)

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

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
