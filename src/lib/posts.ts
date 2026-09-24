import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

type Post = CollectionEntry<"posts">;

const MINIMUM_READING_MINUTES = 1;
const WORDS_PER_MINUTE = 220;

const getPostSlug = (post: Post): string => {
  const generatedSlug = post.id
    .replace(/\.mdx$/u, "")
    .replace(/\/index$/u, "")
    .replace(/^index$/u, "");

  return (post.data.slug ?? generatedSlug).replace(/^\/|\/$/gu, "");
};

const getPostPath = (post: Post): string => `/${getPostSlug(post)}`;

const getPublishedPosts = async (): Promise<Post[]> => {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return posts.sort((left, right) => right.data.date.valueOf() - left.data.date.valueOf());
};

const formatPostDate = (date: Date): string =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(date);

const getReadingMinutes = (post: Post): number => {
  const words = (post.body ?? "")
    .replace(/```[\s\S]*?```/gu, "")
    .replace(/<[^>]+>/gu, "")
    .trim()
    .split(/\s+/u)
    .filter(Boolean).length;

  return Math.max(MINIMUM_READING_MINUTES, Math.ceil(words / WORDS_PER_MINUTE));
};

const slugifyTag = (tag: string): string =>
  tag
    .toLocaleLowerCase("en-US")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/gu, "")
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-|-$/gu, "");

export {
  formatPostDate,
  getPostPath,
  getPostSlug,
  getPublishedPosts,
  getReadingMinutes,
  slugifyTag,
};
export type { Post };
