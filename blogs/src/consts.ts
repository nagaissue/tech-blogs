// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';

// ===== ネットワークサークル資料ライブラリ =====
export const SLIDES_TITLE = 'ネットワークサークル 資料ライブラリ';
export const SLIDES_DESCRIPTION =
	'Cisco Packet Tracer、ルータ設定、ネットワーク基礎・ルーティングプロトコルのWebスライド＆ドキュメント集';

export const SLIDE_CATEGORIES = {
	pt_intro: { label: 'PT 導入・セットアップ', short: 'PT 導入', icon: '🚀' },
	pt_operation: { label: 'PT 基本操作・構成', short: 'PT 基本操作', icon: '⚙️' },
	router_config: { label: 'ルータ基本設定', short: 'ルータ設定', icon: '🔧' },
	routing: { label: 'ルーティング・プロトコル', short: 'ルーティング', icon: '🔀' },
	network_basics: { label: 'ネットワーク基礎・歴史', short: '基礎・歴史', icon: '🌐' },
	reference: { label: 'リファレンス', short: 'リファレンス', icon: '📖' },
} as const;

export type SlideCategory = keyof typeof SLIDE_CATEGORIES;
export const SLIDE_CATEGORY_KEYS = Object.keys(SLIDE_CATEGORIES) as [SlideCategory, ...SlideCategory[]];
