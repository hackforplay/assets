import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のフクロウメイジ')
	this.なかま = なかま.ドクリツ // なかまをきめる
	this.たいりょく = 10
	this.こうげきりょく = 1
	this.たいりょくがみえるか = false // HPひょうじを見えないようにする

	/*+ つくられたとき */
})

rule.item = 'プレイヤー' // ぶつかるキャラクター
rule.ぶつかったとき(async function(item) {
	await this.おいかける(item)
	await this.はなす('ホホ〜ゥ！\nおまえに このスキルブックをやろう')
	this.しょうかんする('白色のスキルブック', 1, 0)

	/*+ ぶつかったとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	await this.おいかける(item)
	this.しょうかんする('白色のうず').とんでいく(item) // itemにむかってとんでいく
	await this.こうげきする()

	/*+ こうげきされたとき */
})

// ここから つねに
rule.つねに(async function() {
	/*+ つねに */
})
// ここまで つねに

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
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
rule.item = ('▼ あいて', Rule.Anyone)
rule.みつけたとき(async function(item) {
	/*+ みつけたとき */
})
// ここまで みつけたとき

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき

// ここから こうげきするとき
rule.こうげきするとき(async function() {
	/*+ こうげきするとき */
})
// ここまで こうげきするとき

// ここから たおされたとき
rule.たおされたとき(async function() {
	/*+ たおされたとき */
})
// ここまで たおされたとき

// ここから タップされたとき
rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
// ここまで タップされたとき
