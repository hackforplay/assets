import '../game'

rule.this = '黒色のしにがみ'

rule.つくられたとき(async function() {
	await this.costume('黒色のしにがみ') // 見た目をきめる
	this.family = ('▼ なかま', Family.ドクリツ) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる
	this.ターゲット = 'プレイヤー' // おいかけるターゲットをきめる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	if (this.ターゲット === '') return // ターゲットがない時はここで終わり
	await this.chase8(this.ターゲット) // ターゲットを追いかける（ナナメあり）
	await this.attack() // こうげきする
	await this.wait(1) // まつ

	/*+ つねに */
})

rule.たおされたとき(async function() {
	this.おとす('青色のほうせき') // アイテムをおとす

	/*+ たおされたとき */
})

// ここから ぶつかったとき
rule.item = ('▼ あいて', 'プレイヤー')
rule.ぶつかったとき(async function(item) {
	/*+ ぶつかったとき */
})
// ここまで ぶつかったとき

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

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき
