import { MetadataRoute } from "next";

import { sitemap_get_all_articles } from "../lib/fetch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = "https://xyz.com";
  const response = await sitemap_get_all_articles();
  const article_slugs = response?.map((article: any) => ({
    url: `${BASE_URL}/newsroom/${article?.slug}`,
    lastModified: new Date(article?.posted_on),
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
