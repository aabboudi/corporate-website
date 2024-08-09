import { DB } from "@/drizzle/setup";
import { Articles } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default async function Article({ params }: { params: { article: string } }) {

  const [article]:any = await DB.select().from(Articles).where(eq(Articles.slug, params.article));

  console.log(typeof(article.content))

  return (
    <div>
      <Breadcrumbs current={article.category} path={[
        {label: "Home", slug:"/"},
        {label: "Newsroom", slug:"/newsroom"},
      ]} />

      <article className="grid lg:grid-cols-5 gap-12 py-12 px-8 lg:px-12">
        <section className="lg:col-span-3">
          <h1 className="font-bold text-3xl">{article.title}</h1>
          <hr className="border-gray-800 dark:border-white my-4" />
          <div className="flex gap-4">
            <div className="flex gap-1">
              <Calendar className="mt-1" color="currentColor" size={16} />
              {new Date(article.posted_on).toDateString().slice(4)}
            </div>
            <div className="flex gap-1">
              <MapPin className="mt-1" color="currentColor" size={16} />
              {article.location}
            </div>
          </div>
          <hr className="border-gray-800 dark:border-white my-4" />
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illum unde repellat aspernatur doloribus earum, expedita, id porro odit quia harum maiores culpa consequuntur, alias accusamus officia ullam! Debitis aspernatur voluptas, asperiores, nemo dolores voluptatum, quis maxime numquam fugiat aperiam atque corporis reprehenderit consectetur rerum! Velit tempora alias suscipit incidunt repudiandae magnam commodi accusantium voluptate eos dolor fugiat quod deserunt cumque sit eveniet illo eaque tempore a ducimus, veritatis labore nihil temporibus obcaecati. Magni sunt eligendi, repellat inventore officiis aliquam quis praesentium, quidem vitae nam placeat deleniti molestias est error consequatur aliquid quisquam saepe quam? Porro distinctio cumque quo repellat at! Dicta voluptatum incidunt, nobis porro tenetur iste nemo odit nostrum a vitae et nihil dolore quam blanditiis hic, ratione molestiae sit velit eum. Ipsum sapiente est, sequi eos quibusdam adipisci itaque esse distinctio cumque doloribus, asperiores maiores commodi iure exercitationem temporibus illum. Officia accusantium repellendus non, qui voluptatibus cum? Tempora aperiam illum tempore consequuntur atque? Possimus repudiandae deleniti iure odio excepturi aperiam provident natus, facere temporibus voluptatem! Sapiente labore officiis minima similique autem alias porro quis veritatis quo necessitatibus natus, quidem tenetur delectus. Culpa sed explicabo iusto cum odit consectetur cumque veritatis id nulla debitis nobis cupiditate asperiores modi natus corporis itaque velit expedita, reprehenderit harum rem sit minima? Recusandae consequuntur fugit perspiciatis expedita nobis similique possimus quae deserunt aliquid, rerum, excepturi dicta ea. Praesentium nostrum ratione blanditiis aut, obcaecati harum excepturi eius ex porro. Ducimus ea iusto, cumque totam nulla animi cupiditate nesciunt dolores culpa aspernatur dolorum quidem error quas esse sunt asperiores corrupti beatae dolor! At natus itaque voluptates asperiores praesentium ipsam minus nostrum alias quam magni eaque cupiditate explicabo, ea veritatis fuga. Officia rerum dicta obcaecati quisquam saepe repellendus tempora est tempore harum sit expedita optio assumenda quasi inventore reprehenderit, enim esse. Minus hic perspiciatis cupiditate mollitia ipsa tenetur temporibus neque odit, voluptates magnam, officia vero suscipit reiciendis magni odio at? Rerum maxime omnis saepe minus dignissimos facere numquam quaerat aliquid, placeat, assumenda voluptate. Dicta, ducimus. Rem incidunt veritatis animi quas, ullam neque? Quaerat illum id mollitia sit ullam beatae earum itaque tempora. Nam deleniti quod soluta tempora nihil cupiditate maiores, atque consectetur adipisci possimus minima sequi vel repellat odio deserunt suscipit accusamus nesciunt debitis, sint, quam consequuntur magni? Aperiam voluptatum molestias labore corrupti odit vel aut, voluptatibus animi asperiores porro officia, fugiat quibusdam error in provident rerum explicabo ut, veritatis consectetur quae expedita minus dignissimos delectus impedit. Tempora cum laudantium distinctio similique labore, molestias nemo totam quos nisi fuga quod blanditiis delectus soluta ipsam voluptate cumque! Accusantium, deleniti ratione. Cumque accusamus molestiae, qui expedita id necessitatibus, amet porro animi aspernatur hic voluptate harum natus sequi. Minus, quasi. Assumenda iure nobis laboriosam ad odit dicta sequi, voluptate ullam, illo magni corporis odio deleniti saepe sunt officia fugit voluptates facilis eos totam sapiente consequuntur, eum asperiores recusandae! Sed corporis reiciendis quaerat facilis perferendis rem beatae atque libero ipsum, ex quas perspiciatis ducimus quasi dolore dolor porro, vel ipsa maxime cumque repellendus assumenda! Quas rerum dolor maxime tenetur.
          </div>
        </section>
        <section className="lg:col-span-2">
          <Image
            src="/ftproject-bg.webp"
            alt="Test"
            width={1000}
            height={1000}
            className="rounded-xl shadow-xl"
            // layout="fill"
            // objectFit="cover"
          />
        </section>
      </article>

    </div>
  )
}
