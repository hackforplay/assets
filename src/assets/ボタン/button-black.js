import '../game'

rule.this = '黒色のボタン'

rule.つくられたとき(async function() {
	await this.costume('黒色のボタン') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	await this.costume('おされた黒色のボタン') // 見た目をかえる
	this.message('黒色のどうぞう') // どうぞうにメッセージ
	await this.wait(1) // まつ
	await this.costume('黒色のボタン') // 見た目をかえる

	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
