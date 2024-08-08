import Breadcrumbs from "@/components/Breadcrumbs";
import NewsCard from "@/components/NewsCard";
import { DB } from "@/drizzle/setup";
import { Articles } from "@/drizzle/schema";

export default async function Newsroom() {

  const tempData = [
    {bg: '/ftproject-bg.webp', title: 'Title 1', category: 'defense', date: '2023-01-10', readTime: '1min'},
    {bg: '/ftproject-bg.webp', title: 'Title 2', category: 'defense', date: '2023-02-20', readTime: '2min'},
    {bg: '/ftproject-bg.webp', title: 'Title 3', category: 'defense', date: '2023-03-30', readTime: '3min'},
  ]

  const data:any = await DB.select().from(Articles);

  return (
    <main>
      <Breadcrumbs current="Newsroom" path={[{label: "Home", slug:"/"},]} />

      <h1 className="text-3xl font-bold text-center">Newsroom</h1>

      <section className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center p-12">
        {tempData.map((article, index) => (
          <NewsCard
            key={index}
            bg={article.bg}
            title={article.title}
            category={article.category}
            postedAt={article.date}
            readTime={article.readTime}
          />
        ))}
      </section>

    </main>
  )
}
