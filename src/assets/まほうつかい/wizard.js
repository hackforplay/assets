import '../game'

rule.this = 'まほうつかい'

rule.つくられたとき(async function() {
	await this.costume('まほうつかい') // 見た目をきめる
	this.family = ('▼ なかま', Family.ドクリツ) // なかまをきめる
	this.n('たいりょく', ('▼ を', 'イコール'), 3) // たいりょくをきめる
	this.n('こうげきりょく', ('▼ を', 'イコール'), 1) // こうげきりょくをきめる

	/*+ つくられたとき */
})

rule.つねに(async function() {
	await this.wait(3) // この秒数だけまつ
	await this.attack() // こうげきする

	const item1 = this.しょうかんする('黒色のスライム') // スライムをしょうかん
	item1.family = ('▼ なかま', Family.ドクリツ) // 「モンスター」にすると仲間同士こうげきしない
	item1.teleportRandom() // いちをランダムにする
	item1.dir = ('▼ むき', Dir.ランダム) // むきをランダムにする

	/*+ つねに */
})

rule.たおされたとき(async function() {
	Hack.score += 1 // スコアをアップする
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

// ここから ぶつかったとき
rule.item = ('▼ あいて', Rule.Anyone)
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
