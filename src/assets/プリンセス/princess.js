import '../game'

rule.this = 'プリンセス'

rule.つくられたとき(async function() {
	await this.costume('プリンセス') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = 'プレイヤー' // ぶつかるキャラクター
rule.ぶつかったとき(async function(item) {
	await this.talk('たすけてくれて ありがとう！') // メッセージを出す
	Hack.gameclear() // ゲームクリア

	/*+ ぶつかったとき */
})

// ここから つねに
rule.つねに(async function(item) {
	/*+ つねに */
})
// ここまで つねに

// ここから こうげきされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})
// ここまで こうげきされたとき

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
