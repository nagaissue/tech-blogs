import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { SLIDE_CATEGORY_KEYS } from './consts';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

// ネットワークサークルのスライド資料（PowerPoint から変換）
// 1デッキ = src/content/slides/<slug>.json、画像は src/assets/slides/<slug>/slide_N.png
const slides = defineCollection({
	loader: glob({ base: './src/content/slides', pattern: '*.json' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			category: z.enum(SLIDE_CATEGORY_KEYS),
			/** サークルの開催回（第N回） */
			session: z.number().int().optional(),
			date: z.coerce.date().optional(),
			slides: z
				.array(
					z.object({
						title: z.string(),
						image: image(),
						paragraphs: z.array(z.string()).optional(),
						code: z.array(z.string()).optional(),
						notes: z.string().optional(),
					}),
				)
				.min(1),
		}),
});

export const collections = { blog, slides };
