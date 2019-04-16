import '../game'

rule.this = '黄色のとつブロック'

rule.つくられたとき(async function() {
	await this.costume('へこんだ黄色のとつブロック') // みためをきめる
	this.collisionFlag = false // 上にのれるようにする

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	if (this.collisionFlag === true) {
		await this.costume('へこんだ黄色のとつブロック') // みためをかえる
		this.collisionFlag = false // 上にのれるようにする
	} else {
		await this.costume('黄色のとつブロック') // みためをかえる
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

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき
