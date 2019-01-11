import '../game'

rule.this = '緑色のトグルスイッチ'

rule.つくられたとき(async function() {
	await this.costume('緑色のトグルスイッチ') // 見た目をかえる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	this.message('緑色のとつブロック') // 緑色のブロックにメッセージ
	this.message('黄色のとつブロック') // 黄色のブロックにメッセージ
	this.へんしんする('黄色のトグルスイッチ') // スイッチきりかえ

	/*+ こうげきされたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
