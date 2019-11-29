import '../game'

rule.つくられたとき(async function() {
	await this.costume('ゆきだるま') // 見た目をきめる
	this.family = ('▼ なかま', Family.ドクリツ) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 10) // 体力をきめる
	this.showHpLabel = false // HPひょうじを見えないようにする

	/*+ つくられたとき */
})

rule.item = 'プレイヤー' // ぶつかるキャラクター
rule.ぶつかったとき(async function(item) {
	await this.talk('つくってくれて ありがとう！\nこれ あげるよ！')

	await this.n('たいりょく', ('▼ を', 'イコール'), 0) // しぬ
	await this.wait(2) // まつ

	await this.しょうかんする('赤色のかぎ', 0, 0)
	await this.しょうかんする('ハート', 1, 0)
	await this.しょうかんする('ハート', 0, 1)
	await this.しょうかんする('ハート', -1, 0)
	await this.しょうかんする('ハート', 0, -1)

	/*+ ぶつかったとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
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
