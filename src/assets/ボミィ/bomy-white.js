import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のボミィ')
	this.なかま = なかま.ドクリツ
	this.たいりょく = 3
	this.こうげきりょく = 1

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.おいかける('プレイヤー')
	await this.まつ(1)

	/*+ つねに */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		this.へんしんする('ばくはつ') // ばくはつ
		await this.まつ(0.7)
		this.しょうかんする('緑色のほうせき', 0, 0) // アイテムをおとす

		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('緑色のほうせき', 0, 0) // アイテムをおとす

	/*+ たおされたとき */
})

// ここから こうげきされたとき
rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ こうげきされたとき */
	}
	/*+ こうげきされたとき */
})
// ここまで こうげきされたとき

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
