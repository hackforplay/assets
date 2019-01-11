import '../game'

rule.this = '青色のトグルスイッチ'

rule.つくられたとき(async function() {
	await this.costume('青色のトグルスイッチ') // 見た目をかえる
	this.message('青色のとつブロック') // 青色のブロックにメッセージ
	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	this.message('青色のとつブロック') // 青色のブロックにメッセージ
	this.へんしんする('赤色のトグルスイッチ') // スイッチきりかえ
	/*+ こうげきされたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
