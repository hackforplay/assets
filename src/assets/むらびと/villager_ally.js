import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('アリー')

	/*+ つくられたとき */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.ふりむく(item)
		await this.はなす('こんにちは')

		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
})

rule.つねに(async function() {
	await this.まつ(3)
	await this.むきをかえる(むき.うしろ) // ふりかえる
	await this.あるく()

	/*+ つねに */
})

rule.こうげきされたとき(async function(item) {
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

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
