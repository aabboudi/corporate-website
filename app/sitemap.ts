import { MetadataRoute } from "next";

import { sitemap_get_all_articles } from "../lib/fetch";
import { SitemapArticleType } from "@/lib/@types/sitemap";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headerList = headers();
  const protocol = headerList.get("x-forwarded-proto") || "https";
  const host = headerList.get("host") || "localhost";
  const BASE_URL = `${protocol}://${host}`;
  
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
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/capabilities`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/frequently-asked-questions`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/openings`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/newsroom`,
      lastModified: new Date(),
    },
    ...article_slugs,
  ];
}
