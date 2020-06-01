import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('青色のかぎ') // 見た目をかえる

	/*+ つくられたとき */
})

rule.ふまれたとき(async function(item) {
	if (item.は('プレイヤー')) {
		this.メッセージする('青色のドア') // 青色のドアをひらく
		this.はなす('青色の ドアが ひらいた！')
		this.きえる()

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
