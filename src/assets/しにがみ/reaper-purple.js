import '../game'

rule.this = '紫色のしにがみ'

rule.つくられたとき(async function() {
	this.skin = Hack.skin('紫色のしにがみ') // 見た目をきめる
	this.family = ('▼ ファミリー', Family.ドクリツ) // ファミリーをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる
	this.ターゲット = 'プレイヤー' // おいかけるターゲットをきめる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	if (this.ターゲット === '') return // ターゲットがない時はここで終わり
	await this.chase8(this.ターゲット) // ターゲットを追いかける（ナナメあり）
	await this.attack() // こうげきする
	await this.wait(1) // やすむ

	/*+ つねに */
})

rule.たおされたとき(async function() {
	rule.つくる('青色のほうせき', this.mapX, this.mapY) // アイテムをおとす

	/*+ たおされたとき */
})

// ここから すすめなかったとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.すすめなかったとき(async function(item) {
	/*+ すすめなかったとき */
})
// ここまで すすめなかったとき

// ここから こうげきされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
})
// ここまで こうげきされたとき

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき
