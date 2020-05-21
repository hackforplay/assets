import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('黄色のゴースト')
	this.なかま = なかま.モンスター
	this.たいりょく = 3
	this.こうげきりょく = 1
	this.みえるきょり = 1
	this.みえるはんい = 0

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.まつ(2) // この数字のぶん まつ
	this.みえやすさ -= 0.3 // うすくなる
	await this.おいかける('プレイヤー')
	await this.みつける()

	/*+ つねに */
})

rule.みつけたとき(async function(item) {
	if (item.は('プレイヤー')) {
		this.みえやすさ = 1 // すがたをあらわす
		await this.こうげきする()

		/*+ みつけたとき */
	}
	/*+ みつけたとき */
})

rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		this.みえやすさ = 1 // すがたをあらわす

		/*+ こうげきされたとき */
	}
	/*+ こうげきされたとき */
})

rule.たおされたとき(async function() {
	this.しょうかんする('青色のほうせき', 0, 0) // アイテムをおとす

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
