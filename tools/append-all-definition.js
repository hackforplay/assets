const path = require('path')
const fs = require('fs')

const text = `
// ここから タップされたとき
rule.へんすうがかわったとき(async function() {
	/*+ へんすうがかわったとき */
})

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
	indexjs && traverse(indexjs, dir)
}

function traverse(assets, dir = '') {
	assets = Array.isArray(assets) ? assets : [assets]
	for (const asset of assets) {
		if (typeof asset !== 'object') continue
		if (typeof asset.module === 'string') {
			appendIfNeeded(path.resolve(__dirname, assetsRoot, dir, asset.module))
		}
		if (Array.isArray(asset.children)) {
			traverse(asset.children, dir)
		}
	}
}

function appendIfNeeded(filePath = '') {
	if (appended.has(filePath)) return

	const current = fs.readFileSync(filePath, 'utf8')
	if (!current.includes(text)) {
		fs.appendFileSync(filePath, text)
	}

	appended.add(filePath)
}
