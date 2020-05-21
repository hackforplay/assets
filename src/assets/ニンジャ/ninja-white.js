import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のニンジャ')
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

// ここから ぶつかったとき
rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
})
// ここまで ぶつかったとき

// ここから メッセージされたとき
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき

// ここから すすめなかったとき
rule.すすめなかったとき(async function() {
	/*+ すすめなかったとき */
})
// ここまで すすめなかったとき

// ここから みつけたとき
rule.みつけたとき(async function(item) {
	/*+ みつけたとき */
})
// ここまで みつけたとき

// ここから しょうかんされたとき
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき

// ここから こうげきするとき
rule.こうげきするとき(async function() {
	/*+ こうげきするとき */
})
// ここまで こうげきするとき

// ここから タップされたとき
rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
// ここまで タップされたとき
