import { MetadataRoute } from "next";

import { sitemap_get_all_articles } from "../lib/fetch";
import { SitemapArticleType } from "@/lib/@types/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = process.env.BASE_URL!;
  const response = await sitemap_get_all_articles();

  const article_slugs = response?.map((article: SitemapArticleType) => ({
    url: `${BASE_URL}/newsroom/${article.slug}`,
    lastModified: new Date(article?.published),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/newsroom`,
      lastModified: new Date(),
    },
    ...article_slugs,
  ];
}
