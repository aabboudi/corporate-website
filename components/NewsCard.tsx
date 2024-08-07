import Link from "next/link";
import Image from "next/image";
import { Calendar, Book } from "lucide-react";

interface NewsCardProps {
  bg?: string;
  title?: string;
  date?: Date;
  readTime?: Date;
}

const NewsCard: React.FC<NewsCardProps> = ({ bg, title, date, readTime }) => {
  return (
    <Link href="/your-target-page" passHref>
      <article className="relative w-full h-96 rounded-xl shadow mx-auto cursor-pointer group">
        <div className="relative w-full h-full">
          <div className="relative w-full h-full">
            <Image
              className="rounded-xl"
              src="/ftproject-bg.webp"
              alt="Card Image"
              layout="fill"
              objectFit="cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl" />
          </div>
          {/* Lorem Ipsum Text */}
          <div className="absolute inset-0 top-0 start-0 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="">
              DEFENSE
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
            <h3 className="text-lg font-bold">Card title</h3>
            <div className="flex gap-4 text-xs mt-1">
              <p className="flex">
                <Calendar className="me-1" color="white" size={16} />
                <span>Sep. 22</span>
              </p>
              <p className="flex">
                <Book className="me-1" color="white" size={16} />
                <span>2min</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default NewsCard;
