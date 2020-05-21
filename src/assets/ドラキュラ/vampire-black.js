import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('黒色のドラキュラ')
	this.なかま = なかま.モンスター
	this.たいりょく = 10
	this.こうげきりょく = 1
	this.みえるきょり = 1
	this.みえるはんい = 0

	/*+ つくられたとき */
})

rule.つねに(async function() {
	this.むてきか = true // ムテキになる
	await this.おいかける('プレイヤー')
	await this.みつける()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.まつ(0.5) // この数字のぶん まつ
		this.むてきか = false // ムテキかいじょ
		await this.こうげきする()
		await this.まつ(1) // この数字のぶん まつ

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('銀色のほうせき', 0, 0) // アイテムをおとす

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
