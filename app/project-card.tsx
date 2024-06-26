import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Item {
  id: number;
  icon: StaticImageData;
  slug: string;
  title: string;
  excerpt: string;
  openSource?: boolean;
  comingSoon?: boolean;
  href?: string;
}

interface ItemProps {
  item: Item;
}

export default function ProjectCard({ item }: ItemProps) {
  return (
    <Link
      className="rounded-lg border border-slate-300 hover:border-slate-400 bg-gradient-to-t from-slate-100 dark:border-slate-800 dark:hover:border-slate-700 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 transition-color ease-in-out p-5 group"
      href={item?.href ? item?.href : `/projects/${item.slug}`}
    >
      <div className="flex flex-col h-full">
        <div className="grow">
          <div className="flex items-center justify-between space-x-2">
            <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
              <Link href={`${item.href}`}>
                <Image src={item.icon} width={18} alt={item.title} />
              </Link>
            </div>
            {item.comingSoon && (
              <div className="text-xs inline-flex items-center font-medium bg-red-200 text-red-600 rounded-full text-center px-2 h-5">
                Coming Soon
              </div>
            )}
            {item.openSource && (
              <div className="text-xs inline-flex items-center font-medium bg-blue-100 text-blue-600 rounded-full text-center px-2 h-5">
                Open-Source
              </div>
            )}
          </div>
          <div className="text-lg font-aspekta font-[650] mb-1">
            {item.title}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            {item.excerpt}
          </p>
        </div>
        <div className="text-sky-500 flex justify-end">
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            className="fill-current -rotate-45 group-hover:rotate-0 transition-transform ease-out"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="12"
          >
            <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
