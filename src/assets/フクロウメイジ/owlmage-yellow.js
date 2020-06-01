import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('黄色のフクロウメイジ')
	this.なかま = なかま.ドクリツ
	this.たいりょく = 10
	this.こうげきりょく = 1
	this.たいりょくがみえるか = false // HPひょうじを見えないようにする

	/*+ つくられたとき */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.ふりむく(item)
		await this.はなす('ホホ〜ゥ！\nおまえに このスキルブックをやろう')
		this.しょうかんする('黄色のスキルブック', 1, 0)

		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
})

rule.こうげきされたとき(async function(item) {
	await this.ふりむく(item)
	this.しょうかんする('黄色のうず').とんでいく(item) // itemにむかってとんでいく
	await this.こうげきする()

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

rule.たおされたとき(async function() {
	/*+ たおされたとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
