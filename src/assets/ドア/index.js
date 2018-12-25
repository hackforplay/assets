const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
  category: cat.せっち, // カテゴリーの参照を配列で指定する
  description: 'このドアは 同じ色のかぎで ひらく', // 説明文（日本語）
  production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
  plan: 'free' // 'free' にする
}

const yellow = {
  ...base,
  name: '黄色のドア',
  module: './door-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './door_yellow.png' // アセットのアイコンへのパス
}

const blue = {
  ...base,
  name: '青色のドア',
  module: './door-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './door_blue.png' // アセットのアイコンへのパス
}

const green = {
  ...base,
  name: '緑色のドア',
  module: './door-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './door_green.png' // アセットのアイコンへのパス
}

const red = {
  ...base,
  name: '赤色のドア',
  module: './door-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './door_red.png' // アセットのアイコンへのパス
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
    ...yellow,
    scopes: scopeCreate,
    insert: './door-yellow-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
    children: [
      {
        ...blue,
        scopes: scopeCreate,
        insert: './door-blue-create.js'
      },
      {
        ...green,
        scopes: scopeCreate,
        insert: './door-green-create.js'
      },
      {
        ...red,
        scopes: scopeCreate,
        insert: './door-red-create.js'
      }
    ]
  },
  // 「◯◯を改造する」ファイルに入るコード
  {
    ...yellow,
    scopes: scopeSummon,
    insert: './door-yellow-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
    children: [
      {
        ...blue,
        scopes: scopeSummon,
        insert: './door-blue-summon.js'
      },
      {
        ...green,
        scopes: scopeSummon,
        insert: './door-green-summon.js'
      },
      {
        ...red,
        scopes: scopeSummon,
        insert: './door-red-summon.js'
      }
    ]
  }
]
