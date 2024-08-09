import Link from "next/link";
import Image from "next/image";
import { Calendar, Book } from "lucide-react";

interface NewsCardProps {
  bg: string;
  slug: string;
  title: string;
  category: string | undefined;
  posted_on: string;
  read_time?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ bg, slug, title, category="General", posted_on, read_time }) => {
  return (
    <Link href={slug} passHref>
      <article className="relative w-full max-w-[28rem] h-96 rounded-xl shadow mx-auto cursor-pointer group">
        <div className="relative w-full h-full">
          <div className="relative w-full h-full">
            <Image
              className="rounded-xl"
              src={bg}
              alt="Card Image"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl" />
          </div>

          <div className="absolute inset-0 top-0 start-0 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="font-semibold">
              {category.toUpperCase()}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="flex gap-4 text-xs mt-1">
              <p className="flex">
                <Calendar className="me-1" color="white" size={16} />
                <span>{posted_on}</span>
              </p>
              <p className="flex">
                <Book className="me-1" color="white" size={16} />
                <span>{read_time}</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default NewsCard;
