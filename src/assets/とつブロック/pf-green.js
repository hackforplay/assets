import '../game'

rule.this = '緑色のとつブロック'

rule.つくられたとき(async function() {
	await this.costume('緑色のとつブロック') // みためをきめる
	this.collisionFlag = true // とおれないようにする

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	if (this.collisionFlag === true) {
		await this.costume('へこんだ緑色のとつブロック') // みためをかえる
		this.collisionFlag = false // 上にのれるようにする
	} else {
		await this.costume('緑色のとつブロック') // みためをかえる
		this.collisionFlag = true // とおれないようにする
	}

	/*+ メッセージされたとき */
})

// ここから ふまれたとき
rule.item = ('▼ あいて', Rule.Anyone) // ふむ キャラクター
rule.ふまれたとき(async function(item) {
	/*+ ふまれたとき */
})
// ここまで ふまれたとき
