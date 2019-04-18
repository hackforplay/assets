import '../game'

rule.this = '赤色のとつブロック'

rule.つくられたとき(async function() {
	await this.costume('赤色のとつブロック') // みためをきめる
	this.collisionFlag = true // とおれないようにする

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	if (this.collisionFlag === true) {
		await this.costume('へこんだ赤色のとつブロック') // みためをかえる
		this.collisionFlag = false // 上にのれるようにする
	} else {
		await this.costume('赤色のとつブロック') // みためをかえる
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
