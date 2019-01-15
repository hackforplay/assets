import '../game'

rule.this = '白色のトグルスイッチ'

rule.つくられたとき(async function() {
	await this.costume('白色のトグルスイッチ') // 見た目をかえる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	this.message('白色のとつブロック') // 白色のブロックにメッセージ
	this.message('黒色のとつブロック') // 黒色のブロックにメッセージ
	this.へんしんする('黒色のトグルスイッチ') // スイッチきりかえ

	/*+ こうげきされたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
