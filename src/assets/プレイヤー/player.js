import '../game'

rule.this = 'プレイヤー'

rule.つくられたとき(async function() {
	Player.set(this)
	this.skin = Hack.skin('ゆうしゃ男') // 見た目をきめる
	this.family = ('▼ ファミリー', Family.プレイヤー) // ファミリーをきめる
	this.hp = 3 // 体力をきめる
	this.atk = 1 // こうげき力をきめる
	/*+ つくられたとき */
})

rule.たおされたとき(async function() {
	Hack.gameover() // ゲームオーバー
	this.destroy() // プレイヤーを消す
	/*+ たおされたとき */
})
