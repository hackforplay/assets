for (let y = 0; y < 10; y++) {
	await this.locate(this.mapX, y) // テレポート
	await this.attack() // ばくだんをおく
}
