import '../game'

rule.this = '黄色のボタン'

rule.つくられたとき(async function() {
	await this.costume('黄色のボタン') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	await this.costume('おされた黄色のボタン') // 見た目をかえる
	this.message('金色のどうぞう') // どうぞうにメッセージ
	await this.wait(1) // まつ
	await this.costume('黄色のボタン') // 見た目をかえる

	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
