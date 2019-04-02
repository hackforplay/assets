import '../game'

rule.this = 'まほうじん'

rule.つくられたとき(async function() {
	await this.costume('まほうじん') // 見た目をかえる

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ふまれたとき(async function(item) {
	if (player.money < 3) return // もし、おかねがこの数字より小さいなら,ここで終わる
	await this.costume('光ったまほうじん') // 見た目をかえる
	item.skill = 'ビーム' // プレイヤーがビームを打てるようにする

	/*+ ふまれたとき */
})

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
