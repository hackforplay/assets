const path = require('path')
const fs = require('fs')
const prettier = require('prettier')

const assetsRoot = path.resolve(__dirname, '../src/assets')
const prettierrc = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, '../.prettierrc'))
)

const re = /rule\.this = '.*'/
traverse(text => text.replace(re, ''))

function traverse(callback, dir = assetsRoot) {
	for (const name of fs.readdirSync(dir, 'utf8')) {
		const abs = path.join(dir, name)
		const stats = fs.statSync(abs)
		if (stats.isDirectory()) {
			traverse(callback, abs)
		}
		if (stats.isFile()) {
			const text = fs.readFileSync(abs, 'utf8')
			let conv = callback(text)
			if (text !== conv) {
				conv = prettier.format(conv, {
					parser: 'babel',
					...prettierrc
				})
				fs.writeFileSync(abs, conv)
				console.log(abs)
			}
		}
	}
}
