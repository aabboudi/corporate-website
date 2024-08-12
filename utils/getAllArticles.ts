import { DB } from "@/drizzle/setup";
import { Articles } from "@/drizzle/schema";

export async function get_all_articles() {
  const articles: any = await DB.select({
    slug: Articles.slug,
    posted_on: Articles.posted_on,
  }).from(Articles);

  return articles;
}
