import '../game'

rule.this = '黄色のトグルスイッチ'

rule.つくられたとき(async function() {
	await this.costume('黄色のトグルスイッチ') // 見た目をかえる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	this.message('黄色のとつブロック') // 黄色のブロックにメッセージ
	this.message('緑色のとつブロック') // 緑色のブロックにメッセージ
	this.へんしんする('緑色のトグルスイッチ') // スイッチきりかえ

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
