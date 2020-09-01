import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('緑色のドア') // とじている
	this.ぶつかるか = true // はいれないようにする

	/*+ つくられたとき */
})

rule.メッセージされたとき(async function(item) {
	await this.みためをかえる('ひらいた緑色のドア') // ひらく！
	this.ぶつかるか = false // はいれるようにする

	/*+ メッセージされたとき */
})

rule.ふまれたとき(async function(item) {
	if (item.は('プレイヤー')) {
		item.teleport(this) // もう一つのドアにテレポート

		/*+ ふまれたとき */
	}
	/*+ ふまれたとき */
})

rule.どかれたとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ どかれたとき */
	}
	/*+ どかれたとき */
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
