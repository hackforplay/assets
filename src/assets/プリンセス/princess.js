import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('プリンセス')

	/*+ つくられたとき */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー')) {
		await this.はなす('たすけてくれて ありがとう！') // メッセージを出す
		ハック.ゲームクリア()

		/*+ ぶつかったとき */
	}
	/*+ ぶつかったとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
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

rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
