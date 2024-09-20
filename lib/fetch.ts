"use server";

import { desc } from "drizzle-orm";
import { DB } from "@/drizzle/setup";
import { Articles, FAQs, Openings } from "@/drizzle/schema";
import { ArticleType, FAQType, OpeningType } from "@/lib/models";
import { SitemapArticleType } from "./@types/sitemap";

export async function sitemap_get_all_articles(): Promise<SitemapArticleType[]> {
  return await DB.select({
    slug: Articles.slug,
    published: Articles.published,
  }).from(Articles);
}

export async function get_all_articles(): Promise<ArticleType[]> {
  return await DB.select({
    id: Articles.id,
    title: Articles.title,
    slug: Articles.slug,
    image: Articles.image,
    alt_text: Articles.alt_text,
    category: Articles.category,
    location: Articles.location,
    published: Articles.published,
    content: Articles.content,
    read_time: Articles.read_time,
  })
    .from(Articles)
    .orderBy(desc(Articles.published));
}

export async function get_all_openings(): Promise<OpeningType[]> {
  const openingsFromDB = await DB.select().from(Openings);

  return openingsFromDB.map(opening => ({
    ...opening,
    salary_min: +opening.salary_min,
    salary_max: +opening.salary_max,
  }));
}

export async function get_all_faqs(): Promise<FAQType[]> {
  return (await DB.select({
    id: FAQs.id,
    question: FAQs.question,
    answer: FAQs.answer,
    keywords: FAQs.keywords,
  })
    .from(FAQs)
    .orderBy(desc(FAQs.question))) as FAQType[];
}
