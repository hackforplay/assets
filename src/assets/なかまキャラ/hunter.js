import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('ハンター')
	this.なかま = なかま.プレイヤー
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

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (this.てきかどうか(item)) {
		/*+ みつけたとき */
	}
	await this.まつ(1)
	await this.こうげきする()
	await this.てきをみつける()
	/*+ みつけたとき */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
})

rule.たおされたとき(async function() {
	/*+ たおされたとき */
})

rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ こうげきされたとき */
	}
	/*+ こうげきされたとき */
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
