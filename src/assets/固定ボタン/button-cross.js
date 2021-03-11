import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('ばつボタン')
	this.fixed = true // がめんに こてい

	/*+ つくられたとき */
})

rule.タップされたとき(async function() {
	player.しょうかんする('どくえき', 0, 0)
	this.おとをならす(('▼ おと', 'はずれ01'))

	/*+ タップされたとき */

	await this.みためをかえる('おされたばつボタン')
	await this.まつ(0.1)
	await this.みためをかえる('ばつボタン')
})

rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

rule.ふまれたとき(async function(item) {
	if (item.は('プレイヤー')) {
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
