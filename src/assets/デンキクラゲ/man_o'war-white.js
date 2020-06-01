import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のデンキクラゲ')
	this.なかま = なかま.モンスター
	this.たいりょく = 3
	this.こうげきりょく = 1
	this.スキル = 'でんげき'

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.まつ(1)
	await this.むきをかえる(むき.ランダム)
	await this.あるく()

	/*+ つねに */
})

rule.こうげきされたとき(async function(item) {
	await this.こうげきする()
	await this.まつ(1)

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

rule.みつけたとき(async function(item) {
	/*+ みつけたとき */
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
