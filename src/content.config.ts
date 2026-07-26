import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/index.mdx" }),
  schema: ({ image }) =>
    z.object({
      banner: image().optional(),
      date: z.coerce.date(),
      description: z.string().optional(),
      draft: z.boolean().default(false),
      excerpt: z.string().optional(),
      slug: z.string().optional(),
      tags: z.array(z.string()).default([]),
      title: z.string(),
    }),
});

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/index.mdx" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
  }),
});

export const collections = { pages, posts };
