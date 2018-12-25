const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
  category: cat.せっち, // カテゴリーの参照を配列で指定する
  description: 'こうげきすると ひらく。 中に入れるたからを かえてみよう', // 説明文（日本語）
  production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
  plan: 'free' // 'free' にする
}

const blue = {
  ...base,
  name: '青色のたからばこ',
  module: './tbox-blue.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './tbox_blue.png' // アセットのアイコンへのパス
}

const green = {
  ...base,
  name: '緑色のたからばこ',
  module: './tbox-green.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './tbox_green.png' // アセットのアイコンへのパス
}

const red = {
  ...base,
  name: '赤色のたからばこ',
  module: './tbox-red.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './tbox_red.png' // アセットのアイコンへのパス
}

const yellow = {
  ...base,
  name: '黄色のたからばこ',
  module: './tbox-yellow.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './tbox_yellow.png' // アセットのアイコンへのパス
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
    ...red,
    scopes: scopeCreate,
    insert: './tbox-red-create.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
    children: [
      {
        ...blue,
        scopes: scopeCreate,
        insert: './tbox-blue-create.js'
      },
      {
        ...green,
        scopes: scopeCreate,
        insert: './tbox-green-create.js'
      },
      {
        ...yellow,
        scopes: scopeCreate,
        insert: './tbox-yellow-create.js'
      }
    ]
  },
  // 「◯◯を改造する」ファイルに入るコード
  {
    ...red,
    scopes: scopeSummon,
    insert: './tbox-red-summon.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
    children: [
      {
        ...blue,
        scopes: scopeSummon,
        insert: './tbox-blue-summon.js'
      },
      {
        ...green,
        scopes: scopeSummon,
        insert: './tbox-green-summon.js'
      },
      {
        ...yellow,
        scopes: scopeSummon,
        insert: './tbox-yellow-summon.js'
      }
    ]
  }
]
