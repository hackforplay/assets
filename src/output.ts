export default interface Output {
	name: {
		ja: string;
		en: string;
	};
	scopes: number[] | null; // スコープのインデックスを配列で指定する. null の場合は常に表示
	insertCode: string | null; // 追加ボタン用のコード. null の場合は追加不可
	moduleCode: string | null; // 改造ボタン用のコード. null の場合は改造不可
	category: number; // カテゴリーのインデックスを指定する
	iconUrl: string; // アセットのアイコンの URL
	production: boolean; // www.hackforplay.xyz に表示する場合は true. earlybird だけなら false
	plan: 'free'; // 'free' にする
}
