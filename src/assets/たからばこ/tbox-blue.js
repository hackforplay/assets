import '../game'

rule.this = '青色のたからばこ'

rule.つくられたとき(async function() {
	await this.costume('青色のたからばこ') // 見ためをきめる
	this.あいた = false // まだ、あいていない（変数）
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.こうげきされたとき(async function(item) {
	if (this.あいた === true) return // もし、あいていたら、ここで終わる（変数）
	await this.costume('あいた青色のたからばこ') // 見ためをかえる
	this.あいた = true // あいた（変数）
	this.しょうかんする('青色のほうせき') // 青色のほうせきを出す。この行をけすと、出なくなる
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
