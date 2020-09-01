import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('しょうにん')
	this.こうげきりょく = 0

	/*+ つくられたとき */
})

rule.ぶつかったとき(async function(item) {
	if (item.は('プレイヤー') === false) {
		return // プレイヤーでなければスルー
	}
	const ねだん = 5

	var こたえ = await this.はなす(
		`りんご は ${ねだん} えんだよ`,
		'かう！',
		'やめとく'
	)

	if (こたえ === 'やめとく') {
		await this.はなす('またね！')
		return
	}

	if (item.おかね >= ねだん) {
		await this.はなす('まいどあり！')
		await this.こうげきする()
		await this.しょうかんする('りんご')
		item.おかね -= ねだん
	} else {
		await this.はなす('おっと、お金が足りないよ')
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
