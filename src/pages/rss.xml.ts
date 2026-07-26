import rss from "@astrojs/rss";

import SITE from "../config/site";
import { getPostPath, getPublishedPosts } from "../lib/posts";

export const GET = async () => {
  const posts = await getPublishedPosts();

  return rss({
    customData: "<language>en-us</language>",
    description: SITE.description,
    items: posts.map((post) => ({
      categories: post.data.tags,
      description: post.data.excerpt ?? post.data.description ?? "",
      link: getPostPath(post),
      pubDate: post.data.date,
      title: post.data.title,
    })),
    site: SITE.url,
    title: SITE.title,
  });
};
