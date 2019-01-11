import '../game'

rule.this = '赤色のとつブロック'

rule.つくられたとき(async function() {
	await this.costume('赤色のとつブロック') // みためをきめる
	this.collisionFlag = true // とおれないようにする
	this.popup = true // かべじょうたい

	/*+ つくられたとき */
})

rule.item = '赤色のトグルスイッチ'
rule.メッセージされたとき(async function(item) {
	if (this.popup) {
		await this.costume('へこんだ赤色のとつブロック') // みためをかえる
		this.collisionFlag = false // 上にのれるようにする
		this.popup = false // ゆかじょうたい
	} else {
		await this.costume('赤色のとつブロック') // みためをかえる
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
