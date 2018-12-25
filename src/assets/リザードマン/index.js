const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
  category: cat.モンスター, // カテゴリーの参照を配列で指定する
  description: 'うろうろと うごいて あたりを こうげきする', // 説明文（日本語）
  production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
  plan: 'free' // 'free' にする
}

const black = {
  ...base,
  name: '黒色のリザードマン',
  module: './lizardman-black.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './lizardman_black.png' // アセットのアイコンへのパス
}

const blue = {
  ...base,
  name: '青色のリザードマン',
  module: './lizardman-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './lizardman_blue.png' // アセットのアイコンへのパス
}

const green = {
  ...base,
  name: '緑色のリザードマン',
  module: './lizardman-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './lizardman_green.png' // アセットのアイコンへのパス
}

const red = {
  ...base,
  name: '赤色のリザードマン',
  module: './lizardman-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './lizardman_red.png' // アセットのアイコンへのパス
}

const white = {
  ...base,
  name: '白色のリザードマン',
  module: './lizardman-white.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './lizardman_white.png' // アセットのアイコンへのパス
}

const yellow = {
  ...base,
  name: '黄色のリザードマン',
  module: './lizardman-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './lizardman_yellow.png' // アセットのアイコンへのパス
}

const scopeCreate = [
  // スコープの参照を配列で指定する. null の場合は常に表示
  sco.ゲームがはじまったとき
]

const scopeSummon = [
  // スコープの参照を配列で指定する. null の場合は常に表示
  sco.こうげきされたとき,
  sco.たおされたとき,
  sco.ふまれたとき,
  sco.ぶつかったとき,
  sco.メッセージされたとき
]

module.exports = [
  // 「ステージ」ファイルに入るコード
  {
    ...green,
    scopes: scopeCreate,
    insert: './lizardman-green-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
    children: [
      {
        ...black,
        scopes: scopeCreate,
        insert: './lizardman-black-create.js'
      },
      {
        ...blue,
        scopes: scopeCreate,
        insert: './lizardman-blue-create.js'
      },
      {
        ...red,
        scopes: scopeCreate,
        insert: './lizardman-red-create.js'
      },
      {
        ...white,
        scopes: scopeCreate,
        insert: './lizardman-white-create.js'
      },
      {
        ...yellow,
        scopes: scopeCreate,
        insert: './lizardman-yellow-create.js'
      }
    ]
  },
  // 「◯◯を改造する」ファイルに入るコード
  {
    ...green,
    scopes: scopeSummon,
    insert: './lizardman-green-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
    children: [
      {
        ...black,
        scopes: scopeSummon,
        insert: './lizardman-black-summon.js'
      },
      {
        ...blue,
        scopes: scopeSummon,
        insert: './lizardman-blue-summon.js'
      },
      {
        ...red,
        scopes: scopeSummon,
        insert: './lizardman-red-summon.js'
      },
      {
        ...white,
        scopes: scopeSummon,
        insert: './lizardman-white-summon.js'
      },
      {
        ...yellow,
        scopes: scopeSummon,
        insert: './lizardman-yellow-summon.js'
      }
    ]
  }
]
