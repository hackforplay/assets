import '../game'

rule.this = '黄色のとつブロック'

rule.つくられたとき(async function() {
	await this.costume('へこんだ黄色のとつブロック') // みためをきめる
	this.collisionFlag = false // 上にのれるようにする

	/*+ つくられたとき */
})

rule.item = '黄色のトグルスイッチ'
rule.メッセージされたとき(async function(item) {
	await this.costume('黄色のとつブロック') // みためをかえる
	this.collisionFlag = true // とおれないようにする

	/*+ メッセージされたとき */
})

// ここから ふまれたとき
rule.item = ('▼ あいて', Rule.Anyone) // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	/*+ ふまれたとき */
})
// ここまで ふまれたとき
