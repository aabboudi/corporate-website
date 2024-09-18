import Image from "next/image";
import { Calendar, Book } from "lucide-react";

interface NewsCardProps {
  index: number;
  bg: string;
  slug: string;
  title: string;
  category: string | null;
  published: string;
  read_time?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  index,
  bg,
  slug,
  title,
  category = "General",
  published,
  read_time,
}) => {
  return (
    <a href={slug}>
      <article className="relative w-full h-96 rounded-md shadow mx-auto cursor-pointer group">
        <div className="relative w-full h-full">
          <div className="relative w-full h-full">
            <Image
              fill
              alt="Card Image"
              className="object-cover rounded-md"
              priority={index < 4}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={bg}
            />
            <div className="absolute inset-0 bg-black opacity-60 rounded-md" />
          </div>

          <div className="absolute inset-0 top-0 start-0 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="font-semibold">{category?.toUpperCase()}</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
            <h3 className="text-lg font-bold">{title}</h3>
            <div className="flex gap-4 text-xs mt-1">
              <p className="flex">
                <Calendar className="me-1" color="white" size={16} />
                <span>{published}</span>
              </p>
              <p className="flex">
                <Book className="me-1" color="white" size={16} />
                <span>{read_time}</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </a>
  );
};

export default NewsCard;
