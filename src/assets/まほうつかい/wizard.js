import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('まほうつかい')
	this.なかま = なかま.モンスター
	this.たいりょく = 3
	this.こうげきりょく = 1

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.テレポートランダム()
	await this.むきをかえる(むき.ランダム)
	await this.まつ(2) // この秒数だけまつ
	await this.こうげきする()
	this.しょうかんする('黒色のスライム', 1, 0)
	await this.まつ(1) // この秒数だけまつ

	/*+ つねに */
})

rule.たおされたとき(async function() {
	this.しょうかんする('青色のほうせき', 0, 0)

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
