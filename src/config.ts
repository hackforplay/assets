export interface IConfig {
	name: string
	description: string
	thumbnail?: string
	scopes: any[] | null // スコープの参照を配列で指定する. null の場合は常に表示
	insert: string | null // 追加ボタン用のコードへのパス. null の場合は追加不可
	module: string | null // 改造ボタン用のコードへのパス. null の場合は改造不可
	category: any // カテゴリーの参照を指定する
	icon: string // アセットのアイコンへのパス
	production: boolean // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free' | 'paid'
	children: IConfig[]
}
