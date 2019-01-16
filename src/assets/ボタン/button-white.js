import '../game'

rule.this = '白色のボタン'

rule.つくられたとき(async function() {
	await this.costume('白色のボタン') // 見た目をきめる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	await this.costume('おされた白色のボタン') // 見た目をかえる
	this.message('白色のどうぞう') // どうぞうにメッセージ
	await this.wait(1) // まつ
	await this.costume('白色のボタン') // 見た目をかえる

	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
