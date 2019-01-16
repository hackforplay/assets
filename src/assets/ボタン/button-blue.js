import '../game'

rule.this = '青色のボタン'

rule.つくられたとき(async function() {
	await this.costume('青色のボタン') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	await this.costume('おされた青色のボタン') // 見た目をかえる
	this.message('青色のどうぞう') // どうぞうにメッセージ
	await this.wait(1) // まつ
	await this.costume('青色のボタン') // 見た目をかえる

	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
