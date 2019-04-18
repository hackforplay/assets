import '../game'

rule.this = '赤色のトグルスイッチ'

rule.つくられたとき(async function() {
	await this.costume('赤色のトグルスイッチ') // 見た目をかえる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	this.message('赤色のとつブロック') // 赤色のブロックにメッセージ
	this.message('青色のとつブロック') // 青色のブロックにメッセージ
	this.へんしんする('青色のトグルスイッチ') // スイッチきりかえ

	/*+ こうげきされたとき */
})

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
