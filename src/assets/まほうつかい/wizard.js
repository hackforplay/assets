import '../game'

rule.this = 'まほうつかい'

rule.つくられたとき(function() {
  this.skin = Hack.skin('まほうつかい') // 見た目を決める
  this.family = ('▼ ファミリー', Family.ドクリツ) // ファミリーを決める
  this.hp = 3 // 体力を決める
  this.atk = 1 // こうげき力を決める
  /*+ つくられたとき */
})

rule.つねに(async function() {
  await this.wait(3) // この秒数だけまつ
  await this.attack() // こうげきする

  const item1 = this.しょうかんする('黒色のスライム') // スライムをしょうかん
  item1.family = ('▼ ファミリー', Family.ドクリツ) // 「モンスター」にすると仲間同士こうげきしない
  item1.locate(random(0, 14), random(0, 9)) // いちをランダムにする
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
