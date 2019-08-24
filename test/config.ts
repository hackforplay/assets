import test from 'ava'
import path from 'path'

export const categories = require('../src/preference/categories')
export const scopes = require('../src/preference/scopes')

export const pathes = {
	assets: path.resolve(__dirname, '../src/assets')
}

test('config', t => t.pass())
