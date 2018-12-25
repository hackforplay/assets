const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
  category: cat.スキル, // カテゴリーの参照を配列で指定する
  description: 'プレイヤーのスキン(みため)をかえられる', // 説明文（日本語）
  scopes: [
    // スコープの参照を配列で指定する. null の場合は常に表示
    sco.ゲームがはじまったとき
  ],
  module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
  production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
  plan: 'free' // 'free' にする
}

module.exports = [
  // ゆうしゃ女
  {
    ...base,
    name: 'スキン ゆうしゃ女',
    icon: './heroine.png', // アセットのアイコンへのパス
    insert: './skin_heroine.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
  },
  // プリンセス
  {
    ...base,
    name: 'スキン プリンセス',
    icon: './princess.png', // アセットのアイコンへのパス
    insert: './skin_princess.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
  },
  // まほうつかい
  {
    ...base,
    name: 'スキン まほうつかい',
    icon: './wizard.png', // アセットのアイコンへのパス
    insert: './skin_wizard.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
  },
  // スライム
  {
    ...base,
    name: 'スキン 青色のスライム',
    icon: './slime_blue.png', // アセットのアイコンへのパス
    insert: './skin_slime-blue.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
    children: [
      {
        ...base,
        name: 'スキン 黒色のスライム',
        icon: './slime_black.png',
        insert: './skin_slime-black.js'
      },
      {
        ...base,
        name: 'スキン 緑色のスライム',
        icon: './slime_green.png',
        insert: './skin_slime-green.js'
      },
      {
        ...base,
        name: 'スキン 赤色のスライム',
        icon: './slime_red.png',
        insert: './skin_slime-red.js'
      },
      {
        ...base,
        name: 'スキン 白色のスライム',
        icon: './slime_white.png',
        insert: './skin_slime-white.js'
      },
      {
        ...base,
        name: 'スキン 黄色のスライム',
        icon: './slime_yellow.png',
        insert: './skin_slime-yellow.js'
      }
    ]
  },
  // ドラゴン
  {
    ...base,
    name: 'スキン 赤色のドラゴン',
    icon: './dragon_red.png', // アセットのアイコンへのパス
    insert: './skin_dragon-red.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
    children: [
      {
        ...base,
        name: 'スキン 黒色のドラゴン',
        icon: './dragon_black.png',
        insert: './skin_dragon-black.js'
      },
      {
        ...base,
        name: 'スキン 青色のドラゴン',
        icon: './dragon_blue.png',
        insert: './skin_dragon-blue.js'
      },
      {
        ...base,
        name: 'スキン 緑色のドラゴン',
        icon: './dragon_green.png',
        insert: './skin_dragon-green.js'
      },
      {
        ...base,
        name: 'スキン 白色のドラゴン',
        icon: './dragon_white.png',
        insert: './skin_dragon-white.js'
      },
      {
        ...base,
        name: 'スキン 黄色のドラゴン',
        icon: './dragon_yellow.png',
        insert: './skin_dragon-yellow.js'
      }
    ]
  },
  // リザードマン
  {
    ...base,
    name: 'スキン 緑色のリザードマン',
    icon: './lizardman_green.png', // アセットのアイコンへのパス
    insert: './skin_lizardman-green.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
    children: [
      {
        ...base,
        name: 'スキン 黒色のリザードマン',
        icon: './lizardman_black.png',
        insert: './skin_lizardman-black.js'
      },
      {
        ...base,
        name: 'スキン 青色のリザードマン',
        icon: './lizardman_blue.png',
        insert: './skin_lizardman-blue.js'
      },
      {
        ...base,
        name: 'スキン 赤色のリザードマン',
        icon: './lizardman_red.png',
        insert: './skin_lizardman-red.js'
      },
      {
        ...base,
        name: 'スキン 白色のリザードマン',
        icon: './lizardman_white.png',
        insert: './skin_lizardman-white.js'
      },
      {
        ...base,
        name: 'スキン 黄色のリザードマン',
        icon: './lizardman_yellow.png',
        insert: './skin_lizardman-yellow.js'
      }
    ]
  },
  // しにがみ
  {
    ...base,
    name: 'スキン 紫色のしにがみ',
    icon: './reaper_purple.png', // アセットのアイコンへのパス
    insert: './skin_reaper-purple.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
    children: [
      {
        ...base,
        name: 'スキン 黒色のしにがみ',
        icon: './reaper_black.png',
        insert: './skin_reaper-black.js'
      },
      {
        ...base,
        name: 'スキン 緑色のしにがみ',
        icon: './reaper_green.png',
        insert: './skin_reaper-green.js'
      },
      {
        ...base,
        name: 'スキン 赤色のしにがみ',
        icon: './reaper_red.png',
        insert: './skin_reaper-red.js'
      },
      {
        ...base,
        name: 'スキン 白色のしにがみ',
        icon: './reaper_white.png',
        insert: './skin_reaper-white.js'
      },
      {
        ...base,
        name: 'スキン 黄色のしにがみ',
        icon: './reaper_yellow.png',
        insert: './skin_reaper-yellow.js'
      }
    ]
  }
]
