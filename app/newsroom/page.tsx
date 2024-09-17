// import Breadcrumbs from "@/components/Breadcrumbs";
import { desc } from "drizzle-orm";

import { Breadcrumbs } from "@/components/breadcrumbs-builder";
import NewsCard from "@/components/NewsCard";
import { DB } from "@/drizzle/setup";
import { Articles } from "@/drizzle/schema";

export default async function Newsroom() {
  const data: any = await DB.select({
    title: Articles.title,
    slug: Articles.slug,
    image: Articles.image,
    alt_text: Articles.alt_text,
    category: Articles.category,
    posted_on: Articles.posted_on,
    read_time: Articles.read_time,
  })
    .from(Articles)
    .orderBy(desc(Articles.posted_on));

  return (
    <main>
      <Breadcrumbs current="Newsroom" path={[{ href: "/", label: "Home" }]} />

      <h1 className="text-3xl font-bold text-center">Newsroom</h1>

      <section className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center p-12 xl:px-24">
        {data.map((article: any, index: number) => (
          <NewsCard
            key={index}
            bg={
              article.image ||
              "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
            }
            category={article.category}
            index={index}
            posted_on={new Date(article.posted_on).toDateString().slice(4)}
            read_time={`${article.read_time} min`}
            slug={`/newsroom/${article.slug}`}
            title={article.title}
          />
        ))}
      </section>
    </main>
  );
}
