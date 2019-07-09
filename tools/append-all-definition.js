const path = require('path')
const fs = require('fs')

const text = `
// ここから タップされたとき
rule.タップされたとき(async function() {
	/*+ タップされたとき */
})
// ここまで タップされたとき
`

const assetsRoot = '../src/assets'
const appended = new Set()

for (const dir of fs.readdirSync(path.resolve(__dirname, assetsRoot), 'utf8')) {
	const indexjsPath = path.join(assetsRoot, dir, 'index.js')
	if (!fs.existsSync(path.resolve(__dirname, indexjsPath))) continue

	let indexjs = require(indexjsPath)
	indexjs = Array.isArray(indexjs) ? indexjs : [indexjs]
	for (const asset of indexjs) {
		if (typeof asset.module === 'string') {
			appendIfNeeded(path.resolve(__dirname, assetsRoot, dir, asset.module))
		}
	}
}

function appendIfNeeded(filePath = '') {
	if (appended.has(filePath)) return

	fs.appendFileSync(filePath, text)

	appended.add(filePath)
}
