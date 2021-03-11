import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('ダイヤのボタン')

	/*+ つくられたとき */
})

rule.タップされたとき(async function() {
	player.しょうかんする('緑色のほうせき', 1, 0)
	this.おとをならす(('▼ おと', 'おかね02'))

	/*+ タップされたとき */

	await this.みためをかえる('おされたダイヤのボタン')
	await this.まつ(0.1)
	await this.みためをかえる('ダイヤのボタン')
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
