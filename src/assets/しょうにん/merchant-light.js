import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('ひかりのしょうにん')
	this.こうげきりょく = 0

	/*+ つくられたとき */
})

rule.ぶつかったとき(async function(item) {
	if (!item.は('プレイヤー') === false) {
		return // プレイヤーでなければスルー
	}
	const ねだん = 10

	const こたえ = await this.はなす(
		`黄色のスキルブック は ${ねだん} えんだよ`,
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
		await this.しょうかんする('黄色のスキルブック')
		item.おかね -= ねだん
	} else {
		await this.はなす('おっと、お金が足りないよ')
	}

	/*+ ぶつかったとき */
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
