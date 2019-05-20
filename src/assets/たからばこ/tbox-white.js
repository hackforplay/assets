import '../game'

rule.this = '白色のたからばこ'

rule.つくられたとき(async function() {
	await this.costume('白色のたからばこ') // 見ためをきめる
	this.あいた = false // まだ、あいていない（変数）

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.こうげきされたとき(async function(item) {
	if (this.あいた === true) return // もし、あいていたら、ここで終わる（変数）
	await this.costume('あいた白色のたからばこ') // 見ためをかえる
	this.あいた = true // あいた（変数）
	this.しょうかんする('銀色のほうせき') // 銀色のほうせきを出す。この行をけすと、出なくなる

	/*+ こうげきされたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき

// ここから ぶつかったとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
})
// ここまで ぶつかったとき

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
