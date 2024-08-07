import Breadcrumbs from "@/components/Breadcrumbs";
import NewsCard from "@/components/NewsCard";

export default function Newsroom() {
  return (
    <main>
      <Breadcrumbs current="Newsroom"
        path={[
          {label: "Home", slug:"/"},
          {label: "Page", slug:"/page"},
        ]}
      />

      <h1 className="text-3xl font-bold text-center">
        Newsroom
      </h1>

      {/* <NewsCard /> */}

      <section className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center p-12">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>

    </main>
  )
}
