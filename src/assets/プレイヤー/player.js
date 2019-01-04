import '../game'

rule.this = 'プレイヤー'

rule.つくられたとき(async function() {
	Player.set(this)
	await this.costume('ゆうしゃ男') // 見た目をきめる
	this.family = ('▼ ファミリー', Family.プレイヤー) // ファミリーをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる

	/*+ つくられたとき */
})

rule.たおされたとき(async function() {
	Hack.gameover() // ゲームオーバー
	this.destroy() // プレイヤーを消す

	/*+ たおされたとき */
})
