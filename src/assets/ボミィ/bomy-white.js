import '../game'

rule.this = '白色のボミィ'

rule.つくられたとき(async function() {
	await this.costume('白色のボミィ') // 見た目をきめる
	this.family = ('▼ なかま', Family.ドクリツ) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.chase4('プレイヤー') // おいかける
	await this.wait(1) // やすむ

	/*+ つねに */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.ぶつかったとき(async function(item) {
	this.へんしんする('ばくはつ') // ばくはつ
	await this.wait(0.7) // まつ
	rule.つくる('緑色のほうせき', this.mapX, this.mapY) // アイテムをおとす

	/*+ ぶつかったとき */
})

rule.たおされたとき(async function() {
	rule.つくる('緑色のほうせき', this.mapX, this.mapY) // アイテムをおとす

	/*+ たおされたとき */
})

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

// ここから すすめなかったとき
rule.すすめなかったとき(async function() {
	/*+ すすめなかったとき */
})
// ここまで すすめなかったとき
