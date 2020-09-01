import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('ざんげき')
	this.ダメージ = 1
	this.あるくはやさ = 2
	this.かんつうするかいすう = 10

	/*+ つくられたとき */
})

rule.しょうかんされたとき(async function(item) {
	this.とんでいく()
	await this.まつ(0.2) // この秒数だけ待つ
	this.きえる() // ざんげき を けす

	/*+ しょうかんされたとき */
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
