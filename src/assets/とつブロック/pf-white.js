import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('へこんだ白色のとつブロック') // みためをきめる
	this.ぶつかるか = false // 上にのれるようにする

	/*+ つくられたとき */
})

rule.メッセージされたとき(async function(item) {
	if (this.ぶつかるか === true) {
		await this.みためをかえる('へこんだ白色のとつブロック') // みためをかえる
		this.ぶつかるか = false // 上にのれるようにする
	} else {
		await this.みためをかえる('白色のとつブロック') // みためをかえる
		this.ぶつかるか = true // とおれないようにする
	}

	/*+ メッセージされたとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})

rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
})

rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})

rule.すすめなかったとき(async function() {
	/*+ すすめなかったとき */
})

rule.みつけたとき(async function(item) {
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
