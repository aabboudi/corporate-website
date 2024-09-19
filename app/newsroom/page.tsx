import { Breadcrumbs } from "@/components/breadcrumbs-builder";
import NewsCard from "@/components/NewsCard";
import { get_all_articles } from "@/lib/fetch";
import { ArticleType } from "@/lib/models";

export default async function Newsroom() {
  const data: ArticleType[] = await get_all_articles();

  return (
    <main>
      <Breadcrumbs current="Newsroom" path={[{ href: "/", label: "Home" }]} />

      <h1 className="text-3xl font-bold text-center">Newsroom</h1>

      <section className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center p-12 xl:px-24">
        {data.map((article: ArticleType, index: number) => (
          <NewsCard
            key={index}
            bg={
              article.image ||
              "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
            }
            category={article.category}
            index={index}
            published={new Date(article.published).toDateString().slice(4)}
            read_time={`${article.read_time} min`}
            slug={`/newsroom/${article.slug}`}
            title={article.title}
          />
        ))}
      </section>
    </main>
  );
}
