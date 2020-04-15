import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('黒色のデンキクラゲ')
	this.なかま = なかま.モンスター
	this.たいりょく = 3
	this.こうげきりょく = 1
	this.スキル = 'でんげき'

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.まつ(1)
	await this.むきをかえる(('▼ むき.', むき.ランダム))
	await this.あるく()

	/*+ つねに */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	await this.こうげきする()
	await this.まつ(1)

	/*+ こうげきされたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('青色のほうせき', 0, 0) // アイテムをおとす

	/*+ たおされたとき */
})

// ここから ぶつかったとき
rule.item = ('▼ あいて', 'プレイヤー')
rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
})
// ここまで ぶつかったとき

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

// ここから タップされたとき
rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
// ここまで タップされたとき
