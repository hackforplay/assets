import '../game'

rule.つくられたとき(async function() {
	await this.みためをかえる('どくえき')
	this.ダメージ = 1
	this.あるくはやさ = 1
	this.かんつうするかいすう = 0

	/*+ つくられたとき */
})

rule.しょうかんされたとき(async function(item) {
	this.とんでいく()
	await this.まつ(2) // この秒数だけ待つ
	this.きえる() // ビーム を けす

	/*+ しょうかんされたとき */
})

rule.ぶつかったとき(async function(item) {
	// 相手が無敵状態か、または仲間のときは、毒にならない
	if (item.むてき || this.なかま === item.なかま) {
		item.どく = false
	} else {
		item.どく = true
		item.filter('sepia(100%) saturate(4) hue-rotate(210deg)')
	}
	var かいすう = 2 // 毒ダメージを繰り返す回数
	for (var i = 0; i < かいすう; i++) {
		await this.まつ(1)
		if (item.どく && item.たいりょく > 1) {
			item.たいりょく -= 1
		}
		await this.まつ(1)
	}
	item.filter('')

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
