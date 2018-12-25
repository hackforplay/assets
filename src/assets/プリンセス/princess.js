import '../game'

rule.this = 'プリンセス'

rule.つくられたとき(function() {
  this.skin = Hack.skin('プリンセス') // 見た目をきめる
  /*+ つくられたとき */
})

rule.item = 'プレイヤー' // ぶつかるキャラクター
rule.ぶつかったとき(async function(item) {
  Hack.log('たすけてくれて ありがとう！') // メッセージを出す
  await this.wait(1) // ちょっと まつ
  Hack.gameclear() // ゲームクリア
  /*+ ぶつかったとき */
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
