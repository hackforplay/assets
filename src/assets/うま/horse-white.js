import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('白色のうま')
	this.なかま = なかま.ドクリツ

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.むきをかえる(むき.ランダム)
	await this.あるく()
	await this.まつ(3)

	/*+ つねに */
})

rule.こうげきされたとき(async function(item) {
	if (item.は('プレイヤー')) {
		/*+ こうげきされたとき */
	}

	await this.ふりむく(item) // あいて（item）の方をむく
	await this.むきをかえる(むき.うしろ) // ふりかえる
	await this.あるく(3)
	/*+ こうげきされたとき */
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
	if (item.は('プレイヤー')) {
		/*+ みつけたとき */
	}
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

rule.たおされたとき(async function() {
	/*+ たおされたとき */
})

rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
