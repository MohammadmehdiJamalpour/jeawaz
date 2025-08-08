import blogsData from "../constants/staticData";
import BlogCard from "./BlogCard";

const MainBlogContainer = () => {
  return (
    <section dir="rtl" className="container bg-primary-200/40 shadow-centered-lg shadow-primary-200/50   rounded-t-3xl mx-auto p-6">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center justify-center text-center">
          {/* left line (md+) */}
          <span
            aria-hidden="true"
            className="hidden md:block h-px flex-1 max-w-48 bg-gray-300/60 mx-6"
          />
          {/* headline */}
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-extrabold">
              <span className="text-primary-600">در وبلاگ ما،</span>{" "}
              <span className="text-gray-900">رایحه‌های جدید</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-gray-900">
              و نکات جذاب در انتظار شماست.
            </p>
          </div>
          {/* right line (md+) */}
          <span
            aria-hidden="true"
            className="hidden md:block h-px flex-1 max-w-48  bg-gray-300/60 mx-6"
          />
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogsData.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MainBlogContainer;
