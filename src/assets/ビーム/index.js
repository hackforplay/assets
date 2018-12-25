const sco = require('../../preference/scopes');
const cat = require('../../preference/categories');

const base = {
  category: cat.スキル, // カテゴリーの参照を配列で指定する
  description: '', // 説明文（日本語）
  production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
  plan: 'free' // 'free' にする
};

const beam = {
  ...base,
  name: 'ビーム',
  module: './beam.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './beam.png' // アセットのアイコンへのパス
};

const fire = {
  ...base,
  name: 'ほのお',
  module: './fire.js', // 改造ボタン用のコードへのパス. null の場合は改造不可
  icon: './fire.png' // アセットのアイコンへのパス
};

const scopeCreate = [
  // スコープの参照を配列で指定する. null の場合は常に表示
  sco.ゲームがはじまったとき
];

const scopeSummon = [
  // スコープの参照を配列で指定する. null の場合は常に表示
  sco.こうげきされたとき,
  sco.たおされたとき,
  sco.ふまれたとき,
  sco.ぶつかったとき,
  sco.メッセージされたとき
];

module.exports = [
  // 「ステージ」ファイルに入るコード
  {
    ...beam,
    scopes: scopeCreate,
    insert: './beam-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
  },
  {
    ...fire,
    scopes: scopeCreate,
    insert: './fire-create.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
  },
  // 「◯◯を改造する」ファイルに入るコード
  {
    ...beam,
    scopes: scopeSummon,
    insert: './beam-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
  },
  {
    ...fire,
    scopes: scopeSummon,
    insert: './fire-summon.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
  }
];
