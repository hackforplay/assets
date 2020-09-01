import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('ゆきだるま')
	this.なかま = なかま.ドクリツ
	this.たいりょく = 10
	this.たいりょくがみえるか = false // HPひょうじを見えないようにする

	/*+ つくられたとき */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.はなす('つくってくれて ありがとう！\nこれ あげるよ！')

		this.たいりょく = 0 // しぬ
		await this.まつ(2)

		await this.しょうかんする('緑色のかぎ', 0, 0)
		await this.しょうかんする('ハート', 1, 0)
		await this.しょうかんする('ハート', 0, 1)
		await this.しょうかんする('ハート', -1, 0)
		await this.しょうかんする('ハート', 0, -1)

		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
})

rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})

rule.つねに(async function() {
	/*+ つねに */
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

rule.たおされたとき(async function() {
	/*+ たおされたとき */
})

rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
