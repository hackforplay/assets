import '../game'

rule.this = '赤色のニンジャ'

rule.つくられたとき(async function() {
	await this.costume('赤色のニンジャ') // 見た目をきめる
	this.family = ('▼ なかま', Family.ドクリツ) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 0) // こうげき力をきめる
	this.n('みえやすさ', ('▼ を', 'イコール'), 0) // とうめいになる
	this.skill = 'ばくだん' // スキルをかえる
	this.showHpLabel = false // HPひょうじを見えないようにする

	/*+ つくられたとき */
})

rule.item = ('▼ あいて', Rule.Anyone)
rule.こうげきされたとき(async function(item) {
	this.n('みえやすさ', ('▼ を', 'イコール'), 1) // すがたをあらわす
	await this.wait(1) // まつ
	await this.attack() // こうげきする
	this.n('みえやすさ', ('▼ を', 'イコール'), 0) // とうめいになる

	/*+ こうげきされたとき */
})

rule.つねに(async function() {
	/*+ つねに */
})

rule.たおされたとき(async function() {
	rule.つくる('緑色のほうせき', this.mapX, this.mapY) // アイテムをおとす

	/*+ たおされたとき */
})

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
