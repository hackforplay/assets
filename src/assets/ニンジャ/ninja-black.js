import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('黒色のニンジャ')
	this.なかま = なかま.ドクリツ
	this.たいりょく = 3
	this.こうげきりょく = 0
	this.みえやすさ = 0 // とうめいになる
	this.スキル = 'ばくだん'
	this.たいりょくがみえるか = false // HPひょうじを見えないようにする

	/*+ つくられたとき */
})

rule.こうげきされたとき(async function(item) {
	this.みえやすさ = 1 // すがたをあらわす
	await this.まつ(1)
	await this.こうげきする()
	this.みえやすさ = 0 // とうめいになる

	/*+ こうげきされたとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.たおされたとき(async function() {
	this.しょうかんする('緑色のほうせき', 0, 0) // アイテムをおとす

	/*+ たおされたとき */
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

rule.あるいたとき(async function() {
	/*+ あるいたとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
