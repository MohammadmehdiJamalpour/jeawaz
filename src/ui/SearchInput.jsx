import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchInput = React.memo(function SearchInput({ className = "", inputProps = {} }) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="  نام محصول، دسته محصول ..."
        className="w-full bg-gray-200/70 text-right rounded-full  py-4 pr-5 lg:py-5 px-6 pl-12 text-sm placeholder:text-gray-600 font-semibold focus:border-primary-500 focus:outline-none"
        {...inputProps}
      />
      {/* Icon on LEFT for RTL */}
      <div className="rounded-full gap-1 lg:flex items-center absolute top-1/2 p-1.5 -translate-y-1/2 left-1.5 bg-white shadow-centered-lg shadow-white">
      <MagnifyingGlassIcon className="h-8 w-8  text-gray-500" />
      <span className="hidden lg:inline text-sm ml-0.5">جستجو</span>
       </div>

    </div>
  );
});

export default SearchInput;
