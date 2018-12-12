import '../game';

rule.this = 'プリンセス';

rule.つくられたとき(function() {
	this.mod(('▼ スキン', Skin.プリンセス)); // 見た目をきめる
	/*+ つくられたとき */
});

rule.item = 'プレイヤー'; // ぶつかるキャラクター
rule.ぶつかったとき(async function(item) {
	Hack.log('たすけてくれて ありがとう！'); // メッセージを出す
	await this.wait(1); // ちょっと まつ
	Hack.gameclear(); // ゲームクリア
	/*+ ぶつかったとき */
});

// ここから こうげきされたとき
rule.こうげきされたとき(async function(item) {
	/*+ こうげきされたとき */
});
// ここまで こうげきされたとき

// ここから しょうかんされたとき
rule.しょうかんされたとき(async function(item) {
	/*+ しょうかんされたとき */
});
// ここまで しょうかんされたとき
