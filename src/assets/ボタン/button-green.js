import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('緑色のボタン')

	/*+ つくられたとき */
})

rule.ふまれたとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.みためをかえる('おされた緑色のボタン') // 見た目をかえる
		this.メッセージする('緑色のどうぞう')
		await this.まつ(1)
		await this.みためをかえる('緑色のボタン') // 見た目をかえる

		/*+ ふまれたとき */
	}
	/*+ ふまれたとき */
})

// ここから つねに
rule.つねに(async function() {
	/*+ つねに */
})
// ここまで つねに

// ここから こうげきされたとき
rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})
// ここまで こうげきされたとき

// ここから ぶつかったとき
rule.ぶつかったとき(async function(item) {
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
