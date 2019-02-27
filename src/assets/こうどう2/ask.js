const こたえ = await this.talk('ヒントを聞いていく？', 'はい', 'いいえ')
if (こたえ === 'はい') {
	await this.talk('ヒントは○○だよ')
}
if (こたえ === 'いいえ') {
	await this.talk('じゃあね')
}
