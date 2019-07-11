import '../game'

rule.this = '緑色のゴースト'

rule.つくられたとき(async function() {
	await this.costume('緑色のゴースト') // 見た目をきめる
	this.family = ('▼ なかま', Family.モンスター) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // 体力をきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげき力をきめる
	this.n('みつけられるきょり', ('▼ を', 'イコール'), 1) // とおくまでみえる
	this.n('みつけられるはんい', ('▼ を', 'イコール'), 0) // しかいを広くする

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.wait(2) // この数字のぶん まつ
	this.n('みえやすさ', ('▼ を', 'へらす'), 0.3) // うすくなる
	await this.chase4('プレイヤー') // おいかける
	await this.find() // さがす

	/*+ つねに */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.みつけたとき(async function(item) {
	this.n('みえやすさ', ('▼ を', 'イコール'), 1) // すがたをあらわす
	await this.attack() // こうげきする

	/*+ みつけたとき */
})

rule.item = ('▼ あいて', 'プレイヤー')
rule.こうげきされたとき(async function(item) {
	this.n('みえやすさ', ('▼ を', 'イコール'), 1) // すがたをあらわす

	/*+ こうげきされたとき */
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

// ここから メッセージされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.メッセージされたとき(async function(item) {
	/*+ メッセージされたとき */
})
// ここまで メッセージされたとき

// ここから じかんがすすんだとき
rule.じかんがすすんだとき(async function() {
	/*+ じかんがすすんだとき */
})
// ここまで じかんがすすんだとき

// ここから すすめなかったとき
rule.すすめなかったとき(async function() {
	/*+ すすめなかったとき */
})
// ここまで すすめなかったとき

// ここから しょうかんされたとき
rule.item = ('▼ あいて', Rule.Anyone)
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
})
// ここまで しょうかんされたとき
