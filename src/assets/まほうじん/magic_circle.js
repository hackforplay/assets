import '../game';

rule.this = 'まほうじん';

rule.つくられたとき(async function() {
	this.mod(('▼ スキン', Skin.まほうじん)); // 見た目をかえる
	/*+ つくられたとき */
});

rule.item = ('▼ あいて', 'プレイヤー');
rule.ふまれたとき(async function(item) {
	if (Hack.score < 3) return; // もし、スコアがこの数字より小さいなら,ここで終わる
	this.mod(('▼ スキン', Skin.光ったまほうじん)); // 見た目をかえる
	item.スキル = 'ビーム'; // プレイヤーがビームを打てるようにする
	/*+ ふまれたとき */
});

// ここから メッセージされたとき
rule.メッセージされたとき(async function() {
	/*+ メッセージされたとき */
});
// ここまで メッセージされたとき
