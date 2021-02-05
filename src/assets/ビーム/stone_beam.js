import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('せきかこうせん')
	this.ダメージ = 1
	this.あるくはやさ = 1.5
	this.かんつうするかいすう = 0

	/*+ つくられたとき */
})

rule.しょうかんされたとき(async function(item) {
	this.とんでいく()
	await this.まつ(1.5) // この秒数だけ とぶ
	this.きえる() // せきかこうせん を けす

	/*+ しょうかんされたとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})

rule.ぶつかったとき(async function(item) {
	// 相手が無敵状態か、または仲間のときは、石にならない
	if (item.むてきか || this.なかま === item.なかま) {
		return
	} else {
		item.うごけない = true
		await item.filter('grayscale(100%)') // 白黒になる
		await item.まつ(1.5) // この秒数 石になる
		item.うごけない = false
		item.filter('')
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
	/*+ みつけたとき */
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
