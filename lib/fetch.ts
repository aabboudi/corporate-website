"use server";

import { desc } from "drizzle-orm";

import { DB } from "@/drizzle/setup";
import { Articles, FAQs } from "@/drizzle/schema";

export type FAQItem = {
  question: string;
  answer: string;
  keywords: string[];
};

export async function get_all_articles() {
  const articles: any = await DB.select({
    slug: Articles.slug,
    posted_on: Articles.posted_on,
  }).from(Articles);

  return articles;
}

export async function get_all_faqs() {
  let faqData = (await DB.select({
    question: FAQs.question,
    answer: FAQs.answer,
    keywords: FAQs.keywords,
  })
    .from(FAQs)
    .orderBy(desc(FAQs.question))) as FAQItem[];

  faqData = faqData.map((faq) => ({
    ...faq,
    keywords: JSON.parse(faq.keywords.toString()),
  }));

  return faqData;
}
