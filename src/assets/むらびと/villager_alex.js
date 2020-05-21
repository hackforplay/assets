import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('アレックス')

	/*+ つくられたとき */
})

rule.item = 'プレイヤー' // ぶつかるキャラクター
rule.ぶつかったとき(async function(item) {
	await this.ふりむく(item)
	await this.はなす('こんにちは')

	/*+ ぶつかったとき */
})

rule.つねに(async function() {
	await this.まつ(3)
	await this.むきをかえる(むき.うしろ) // ふりかえる
	await this.あるく()

	/*+ つねに */
})

// ここから こうげきされたとき
rule.こうげきされたとき(async function(item) {
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
