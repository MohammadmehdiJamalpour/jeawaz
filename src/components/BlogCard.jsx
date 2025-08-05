/* eslint-disable react/prop-types */
const BlogCard = ({ item }) => {
  const { img, title, description, releasedAt } = item;

  return (
    <article
      dir="rtl"
      className="overflow-hidden rounded-2xl border border-secondary-200 bg-secondary-500 shadow transition hover:shadow-md"
    >
      {/* Image + overlays */}
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="h-48 w-full object-cover"
          loading="lazy"
        />

        {/* Red bullet (top-right) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-2 inline-block h-2 w-2 rounded-full bg-red-600"
        />

        {/* Badge to the left of the bullet */}
        <span className="pointer-events-none absolute right-6 top-1.5 rounded-3xl bg-gray-300/60 px-2 py-0.5 text-[11px] leading-none text-gray-900">
          آموزشی
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2 p-4">
        <h3 className="text-base font-bold text-primary-700">{title}</h3>

        <p className="text-sm leading-6 text-primary-600">{description}</p>

        <div className="pt-1">
          <span className="inline-block rounded bg-secondary-0 px-2 py-1 text-[11px] text-primary-600">
            {releasedAt}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
