[![Build Status](https://travis-ci.com/hackforplay/assets.svg?token=MWypqXEVpyP6LnsePjMy&branch=master)](https://travis-ci.com/hackforplay/assets)

# アセット

## Setup

- このリポジトリを Clone (Open in Desktop) する
- skins ディレクトリに移動する
- `npm install` を実行する

## Contribute

- src/assets の中身を変更する
- `npm test` を実行する
  - もしプロパティの指定が間違っていたら、コンソールにエラーが出る
- テストが通ることを確認して master に Push する

## Change Version

- [.travis.yml](./.travis.yml) に書いてある `NODE_ASSET_VERISON='beta-x'` を書き換える
- commit して push する

## Cache-Control

[.travis.yml](.travis.yml) に書いてある deploy.cache_control を書き換える
現在は `public, max-age=3600` になっているが、CDN にキャッシュすべきかは一考の余地がある?
