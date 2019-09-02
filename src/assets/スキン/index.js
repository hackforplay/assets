const sco = require('../../preference/scopes')
const cat = require('../../preference/categories')

const base = {
	category: cat.みため, // カテゴリーの参照を配列で指定する
	description: 'スキン(みため)をかえられる', // 説明文（日本語）
	scopes: [
		sco.つくられたとき,
		sco.こうげきされたとき,
		sco.つねに,
		sco.ふまれたとき,
		sco.ぶつかったとき,
		sco.みつけたとき,
		sco.メッセージされたとき,
		sco.タップされたとき
	],
	module: null, // 改造ボタン用のコードへのパス. null の場合は改造不可
	production: false, // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' // 'free' にする
}

module.exports = [
	// ゆうしゃ男
	{
		...base,
		name: 'スキン ゆうしゃ男',
		icon: './hero.png', // アセットのアイコンへのパス
		insert: './skin_hero.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
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
	// サムライ
	{
		...base,
		name: 'スキン サムライ',
		icon: './samurai.png', // アセットのアイコンへのパス
		insert: './skin_samurai.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// ハンター
	{
		...base,
		name: 'スキン ハンター',
		icon: './hunter.png', // アセットのアイコンへのパス
		insert: './skin_hunter.js' // 追加ボタン用のコードへのパス. null の場合は追加不可
	},
	// しょうにん
	{
		...base,
		name: 'スキン しょうにん',
		icon: '../しょうにん/merchant.png', // アセットのアイコンへのパス
		insert: './skin_merchant-normal.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...base,
				name: 'スキン ほのおのしょうにん',
				icon: '../しょうにん/merchant_fire.png',
				insert: './skin_merchant-fire.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン みずのしょうにん',
				icon: '../しょうにん/merchant_water.png',
				insert: './skin_merchant-water.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン かぜのしょうにん',
				icon: '../しょうにん/merchant_wind.png',
				insert: './skin_merchant-wind.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン ひかりのしょうにん',
				icon: '../しょうにん/merchant_light.png',
				insert: './skin_merchant-light.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン やみのしょうにん',
				icon: '../しょうにん/merchant_dark.png',
				insert: './skin_merchant-dark.js',
				plan: 'paid'
			}
		]
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
	},
	// ペンギンきし
	{
		...base,
		name: 'スキン 赤色のペンギンきし',
		icon: './red_penguin_knight.png',
		insert: './skin_penguin_knight-red.js',
		children: [
			{
				...base,
				name: 'スキン 黒色のペンギンきし',
				icon: './black_penguin_knight.png',
				insert: './skin_penguin_knight-black.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 緑色のペンギンきし',
				icon: './green_penguin_knight.png',
				insert: './skin_penguin_knight-green.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 青色のペンギンきし',
				icon: './blue_penguin_knight.png',
				insert: './skin_penguin_knight-blue.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のペンギンきし',
				icon: './white_penguin_knight.png',
				insert: './skin_penguin_knight-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のペンギンきし',
				icon: './yellow_penguin_knight.png',
				insert: './skin_penguin_knight-yellow.js',
				plan: 'paid'
			}
		]
	},
	// まじょねこ
	{
		...base,
		name: 'スキン 青色のまじょねこ',
		icon: './blue_witch_cat.png',
		insert: './skin_witch_cat-blue.js',
		children: [
			{
				...base,
				name: 'スキン 黒色のまじょねこ',
				icon: './black_witch_cat.png',
				insert: './skin_witch_cat-black.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 緑色のまじょねこ',
				icon: './green_witch_cat.png',
				insert: './skin_witch_cat-green.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のまじょねこ',
				icon: './red_witch_cat.png',
				insert: './skin_witch_cat-red.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のまじょねこ',
				icon: './white_witch_cat.png',
				insert: './skin_witch_cat-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のまじょねこ',
				icon: './yellow_witch_cat.png',
				insert: './skin_witch_cat-yellow.js',
				plan: 'paid'
			}
		]
	},
	// ミミック
	{
		...base,
		name: 'スキン 赤色のミミック',
		icon: './red_mimic.png',
		insert: './skin_mimic-red.js',
		children: [
			{
				...base,
				name: 'スキン 黒色のミミック',
				icon: './black_mimic.png',
				insert: './skin_mimic-black.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 緑色のミミック',
				icon: './green_mimic.png',
				insert: './skin_mimic-green.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 青色のミミック',
				icon: './blue_mimic.png',
				insert: './skin_mimic-blue.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のミミック',
				icon: './white_mimic.png',
				insert: './skin_mimic-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のミミック',
				icon: './yellow_mimic.png',
				insert: './skin_mimic-yellow.js',
				plan: 'paid'
			}
		]
	},
	// ボススライム
	{
		...base,
		name: 'スキン 青色のボススライム',
		icon: './blue_bossslime.png',
		insert: './skin_bossslime-blue.js',
		children: [
			{
				...base,
				name: 'スキン 黒色のボススライム',
				icon: './black_bossslime.png',
				insert: './skin_bossslime-black.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 緑色のボススライム',
				icon: './green_bossslime.png',
				insert: './skin_bossslime-green.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のボススライム',
				icon: './red_bossslime.png',
				insert: './skin_bossslime-red.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のボススライム',
				icon: './white_bossslime.png',
				insert: './skin_bossslime-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のボススライム',
				icon: './yellow_bossslime.png',
				insert: './skin_bossslime-yellow.js',
				plan: 'paid'
			}
		]
	},
	// ボミィ
	{
		...base,
		name: 'スキン 青色のボミィ',
		icon: './blue_bomy.png',
		insert: './skin_bomy-blue.js',
		children: [
			{
				...base,
				name: 'スキン 黒色のボミィ',
				icon: './black_bomy.png',
				insert: './skin_bomy-black.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 緑色のボミィ',
				icon: './green_bomy.png',
				insert: './skin_bomy-green.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のボミィ',
				icon: './red_bomy.png',
				insert: './skin_bomy-red.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のボミィ',
				icon: './white_bomy.png',
				insert: './skin_bomy-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のボミィ',
				icon: './yellow_bomy.png',
				insert: './skin_bomy-yellow.js',
				plan: 'paid'
			}
		]
	},
	// ニンジャ
	{
		...base,
		name: 'スキン 黒色のニンジャ',
		icon: './black_chameleon_ninja.png',
		insert: './skin_chameleon_ninja-black.js',
		children: [
			{
				...base,
				name: 'スキン 青色のニンジャ',
				icon: './blue_chameleon_ninja.png',
				insert: './skin_chameleon_ninja-blue.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 緑色のニンジャ',
				icon: './green_chameleon_ninja.png',
				insert: './skin_chameleon_ninja-green.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のニンジャ',
				icon: './red_chameleon_ninja.png',
				insert: './skin_chameleon_ninja-red.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のニンジャ',
				icon: './white_chameleon_ninja.png',
				insert: './skin_chameleon_ninja-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のニンジャ',
				icon: './yellow_chameleon_ninja.png',
				insert: './skin_chameleon_ninja-yellow.js',
				plan: 'paid'
			}
		]
	},
	// フクロウメイジ
	{
		...base,
		name: 'スキン 緑色のフクロウメイジ',
		icon: '../フクロウメイジ/owlmage_green.png',
		insert: './skin_owlmage-green.js',
		children: [
			{
				...base,
				name: 'スキン 黒色のフクロウメイジ',
				icon: '../フクロウメイジ/owlmage_black.png',
				insert: './skin_owlmage-black.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 青色のフクロウメイジ',
				icon: '../フクロウメイジ/owlmage_blue.png',
				insert: './skin_owlmage-blue.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のフクロウメイジ',
				icon: '../フクロウメイジ/owlmage_red.png',
				insert: './skin_owlmage-red.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のフクロウメイジ',
				icon: '../フクロウメイジ/owlmage_white.png',
				insert: './skin_owlmage-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のフクロウメイジ',
				icon: '../フクロウメイジ/owlmage_yellow.png',
				insert: './skin_owlmage-yellow.js',
				plan: 'paid'
			}
		]
	},
	// ゾンビ
	{
		...base,
		name: 'スキン 緑色のゾンビ',
		icon: '../ゾンビ/zombie_green.png',
		insert: './skin_zombie-green.js',
		children: [
			{
				...base,
				name: 'スキン 黒色のゾンビ',
				icon: '../ゾンビ/zombie_black.png',
				insert: './skin_zombie-black.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 青色のゾンビ',
				icon: '../ゾンビ/zombie_blue.png',
				insert: './skin_zombie-blue.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のゾンビ',
				icon: '../ゾンビ/zombie_red.png',
				insert: './skin_zombie-red.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のゾンビ',
				icon: '../ゾンビ/zombie_white.png',
				insert: './skin_zombie-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のゾンビ',
				icon: '../ゾンビ/zombie_yellow.png',
				insert: './skin_zombie-yellow.js',
				plan: 'paid'
			}
		]
	},
	// スケルトン
	{
		...base,
		name: 'スキン 白色のスケルトン',
		icon: '../スケルトン/skeleton_white.png',
		insert: './skin_skeleton-white.js',
		children: [
			{
				...base,
				name: 'スキン 黒色のスケルトン',
				icon: '../スケルトン/skeleton_black.png',
				insert: './skin_skeleton-black.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 青色のスケルトン',
				icon: '../スケルトン/skeleton_blue.png',
				insert: './skin_skeleton-blue.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 緑色のスケルトン',
				icon: '../スケルトン/skeleton_green.png',
				insert: './skin_skeleton-green.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のスケルトン',
				icon: '../スケルトン/skeleton_red.png',
				insert: './skin_skeleton-red.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のスケルトン',
				icon: '../スケルトン/skeleton_yellow.png',
				insert: './skin_skeleton-yellow.js',
				plan: 'paid'
			}
		]
	},
	// ゴースト
	{
		...base,
		name: 'スキン 紫色のゴースト',
		icon: '../ゴースト/ghost_purple.png', // アセットのアイコンへのパス
		insert: './skin_ghost-purple.js', // 追加ボタン用のコードへのパス. null の場合は追加不可
		children: [
			{
				...base,
				name: 'スキン 青色のゴースト',
				icon: '../ゴースト/ghost_blue.png',
				insert: './skin_ghost-blue.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 緑色のゴースト',
				icon: '../ゴースト/ghost_green.png',
				insert: './skin_ghost-green.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のゴースト',
				icon: '../ゴースト/ghost_red.png',
				insert: './skin_ghost-red.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のゴースト',
				icon: '../ゴースト/ghost_white.png',
				insert: './skin_ghost-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のゴースト',
				icon: '../ゴースト/ghost_yellow.png',
				insert: './skin_ghost-yellow.js',
				plan: 'paid'
			}
		]
	},
	// デンキクラゲ
	{
		...base,
		name: 'スキン 青色のデンキクラゲ',
		icon: "../デンキクラゲ/man_o'war_blue.png",
		insert: "./skin_man_o'war-blue.js",
		children: [
			{
				...base,
				name: 'スキン 黒色のデンキクラゲ',
				icon: "../デンキクラゲ/man_o'war_black.png",
				insert: "./skin_man_o'war-black.js",
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 緑色のデンキクラゲ',
				icon: "../デンキクラゲ/man_o'war_green.png",
				insert: "./skin_man_o'war-green.js",
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のデンキクラゲ',
				icon: "../デンキクラゲ/man_o'war_red.png",
				insert: "./skin_man_o'war-red.js",
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のデンキクラゲ',
				icon: "../デンキクラゲ/man_o'war_white.png",
				insert: "./skin_man_o'war-white.js",
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のデンキクラゲ',
				icon: "../デンキクラゲ/man_o'war_yellow.png",
				insert: "./skin_man_o'war-yellow.js",
				plan: 'paid'
			}
		]
	},
	// タマゴ
	{
		...base,
		name: 'スキン 緑色のタマゴ',
		icon: '../タマゴ/monster_egg_green.png',
		insert: './skin_monster_egg-green.js',
		children: [
			{
				...base,
				name: 'スキン 黒色のタマゴ',
				icon: '../タマゴ/monster_egg_black.png',
				insert: './skin_monster_egg-black.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 青色のタマゴ',
				icon: '../タマゴ/monster_egg_blue.png',
				insert: './skin_monster_egg-blue.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のタマゴ',
				icon: '../タマゴ/monster_egg_red.png',
				insert: './skin_monster_egg-red.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のタマゴ',
				icon: '../タマゴ/monster_egg_white.png',
				insert: './skin_monster_egg-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のタマゴ',
				icon: '../タマゴ/monster_egg_yellow.png',
				insert: './skin_monster_egg-yellow.js',
				plan: 'paid'
			}
		]
	},
	// ドラキュラ
	{
		...base,
		name: 'スキン 黒色のドラキュラ',
		icon: '../ドラキュラ/vampire_black.png',
		insert: './skin_vampire-black.js',
		children: [
			{
				...base,
				name: 'スキン 青色のドラキュラ',
				icon: '../ドラキュラ/vampire_blue.png',
				insert: './skin_vampire-blue.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 緑色のドラキュラ',
				icon: '../ドラキュラ/vampire_green.png',
				insert: './skin_vampire-green.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 赤色のドラキュラ',
				icon: '../ドラキュラ/vampire_red.png',
				insert: './skin_vampire-red.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 白色のドラキュラ',
				icon: '../ドラキュラ/vampire_white.png',
				insert: './skin_vampire-white.js',
				plan: 'paid'
			},
			{
				...base,
				name: 'スキン 黄色のドラキュラ',
				icon: '../ドラキュラ/vampire_yellow.png',
				insert: './skin_vampire-yellow.js',
				plan: 'paid'
			}
		]
	}
	//
]
