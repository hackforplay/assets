import '../game'

rule.this = '黄色のとつブロック'

rule.つくられたとき(async function() {
	await this.costume('黄色のとつブロック') // みためをきめる
	this.collisionFlag = false // 上にのれるようにする
	this.popup = false // ゆかじょうたい

	/*+ つくられたとき */
})

rule.item = '黄色のトグルスイッチ'
rule.メッセージされたとき(async function(item) {
	if (this.popup) {
		await this.costume('へこんだ黄色のとつブロック') // みためをかえる
		this.collisionFlag = false // 上にのれるようにする
		this.popup = false // ゆかじょうたい
	} else {
		await this.costume('黄色のとつブロック') // みためをかえる
		this.collisionFlag = true // とおれないようにする
		this.popup = true // かべじょうたい
	}

	/*+ メッセージされたとき */
})

// ここから ふまれたとき
rule.item = ('▼ あいて', Rule.Anyone) // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	/*+ ふまれたとき */
})
// ここまで ふまれたとき
