import test from 'ava'
import fs from 'fs'
import path from 'path'
import { values, includes } from 'lodash'
import categories from '../src/preference/categories'
import scopes from '../src/preference/scopes'

const pathes = {
  assets: path.resolve(__dirname, '../src/assets')
}

test('Check categories', t => {
  for (const key of Object.keys(categories)) {
    const config = categories[key]
    const m = name => `${key}の ${name} を指定してください`
    t.is(typeof config.name, 'string', m(`name`))
    t.is(typeof config.icon, 'string', m(`icon`))
  }
})

test('Check scopes', t => {
  const _categories = values(categories)

  for (const key of Object.keys(scopes)) {
    const config = scopes[key]
    const m = name => `${key}の ${name} を指定してください`
    t.is(typeof config.name, 'string', m(`name`))
    t.truthy(
      includes(_categories, config.defaultActiveCategory),
      m(`defaultActiveCategory`)
    )
  }
})

test('Check configs', t => {
  const _categories = values(categories)
  const _scopes = values(scopes)
  const nameFilePathMap = new Map()
  const filePathNameMap = new Map()

  for (const domain of fs.readdirSync(pathes.assets)) {
    const abs = path.join(pathes.assets, domain)
    if (!fs.statSync(abs).isDirectory()) continue // skin is directory
    t.log('Testing: ' + domain)
    const config = require(path.relative(__dirname, abs)) // config is /index.js
    const configs = Array.isArray(config) ? config : [config]
    // Check configs
    for (const config of configs) {
      assertAsset(config, domain, abs)
    }
  }

  // assert recursive
  function assertAsset(config, domain, abs) {
    const m = name => `${domain}の ${name} を指定してください`
    t.is(typeof config.name, 'string', m(`name`))
    t.is(typeof config.description, 'string', m(`description`))
    if (config.scopes !== null) {
      t.true(Array.isArray(config.scopes), m(`scopes`))
      for (const scope of config.scopes) {
        t.truthy(includes(_scopes, scope), m(`scopes にはスコープの配列`))
      }
    }
    if (config.insert !== null) {
      t.is(typeof config.insert, 'string', m(`insert には文字列`))
      const filePath = path.join(abs, config.insert)
      const isExist = fs.existsSync(filePath)
      t.truthy(
        isExist,
        `${domain}に指定された insert のパス ${filePath} は存在しません`
      )
    }
    if (config.module !== null) {
      t.is(typeof config.module, 'string', m(`module には文字列`))
      const filePath = path.join(abs, config.module)
      const isExist = fs.existsSync(filePath)
      t.truthy(
        isExist,
        `${domain}に指定された module のパス ${filePath} は存在しません`
      )
      // name と module は互いに一意に定まる関係でなければならない
      // https://www.notion.so/teramotodaiki/7c7b2a0819764a71997faff953795019
      const existFilePath = nameFilePathMap.get(config.name)
      t.falsy(
        existFilePath && existFilePath !== filePath,
        `${config.name} の module が統一されていません. ${path.relative(
          abs,
          existFilePath + ''
        )} と ${path.relative(abs, filePath + '')} が存在します`
      )
      nameFilePathMap.set(config.name, filePath)
      const existModuleName = filePathNameMap.get(filePath)
      t.falsy(
        existModuleName && existModuleName !== config.name,
        `${existModuleName}と${config.name}で同じ module を使うことはできません`
      )
      filePathNameMap.set(filePath, config.name)
    }
    t.true(includes(_categories, config.category), m(`category`))
    t.is(typeof config.icon, 'string', m(`icon には文字列`))
    const imagePath = path.join(abs, config.icon)
    const isExist = fs.existsSync(imagePath)
    t.true(isExist, `${domain}に指定された画像パス ${imagePath} は存在しません`)
    t.is(typeof config.production, 'boolean', m(`production`))
    t.is(config.plan, 'free', m(`plan には 'free'`))
    if (Array.isArray(config.children)) {
      for (const child of config.children) {
        assertAsset(child, domain, abs)
      }
    }
  }
})
