/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const BlogCard = ({ item }) => {
  const {
    id,          
    img,
    title,
    description,
    releasedAt,
    tag = "آموزشی",
  } = item;

  return (
    <article
      dir="rtl"
      className="group relative overflow-hidden rounded-[1.25rem] border border-secondary-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
    >
      {/* ▸ image + overlays */}
      <div className="relative">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />

        {/* red bullet (top-right) */}
        <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-600" />

        {/* category badge */}
        <span className="absolute right-6 top-1.5  rounded-3xl bg-gray-700/50 px-3 py-1.5 text-[11px] leading-none text-white backdrop-blur">
          {tag}
        </span>
      </div>

      {/* ▸ body */}
      <div className="space-y-2 px-6 pb-5 pt-4">
        <h3 className="text-[17px] font-bold leading-8 text-gray-800">
          {title}
        </h3>
        <p className="line-clamp-2 text-[13px] leading-6 text-gray-500">
          {description}
        </p>
      </div>

      {/* ▸ footer */}
      <div className="flex items-center justify-between border-t border-secondary-200 px-6 py-4 text-[13px]">
     

        {/* تاریخ */}
        <time className="text-gray-500">{releasedAt}</time>

           {/* مطالعه مطلب */}
        <div
     
          className="flex items-center gap-1 text-red-600 transition-colors hover:text-red-700"
        >
          <span className="font-medium">مطالعه مطلب</span>
          <ArrowLeftIcon className="h-4 w-4 stroke-[3]" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
