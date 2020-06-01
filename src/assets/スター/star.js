import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('スター') // 見た目をかえる

	/*+ つくられたとき */
})

rule.ふまれたとき(async function(item) {
	if (item.は('プレイヤー')) {
		this.きえる()
		item.むてきか = true
		await item.まつ(3)
		item.むてきか = false

		/*+ ふまれたとき */
	}
	/*+ ふまれたとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})

rule.ぶつかったとき(async function(item) {
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

rule.たおされたとき(async function() {
	/*+ たおされたとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
