import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchInput = React.memo(function SearchInput({ className = "", inputProps = {} }) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder="  نام محصول، دسته محصول ..."
        className="w-full bg-gray-200/40 text-right rounded-full  py-3 pr-5 pl-12 text-sm placeholder:text-gray-600 focus:border-primary-500 focus:outline-none"
        {...inputProps}
      />
      {/* Icon on LEFT for RTL */}
      <MagnifyingGlassIcon className="absolute rounded-full bg-white shadow-centered-lg shadow-white p-1 left-1 top-1/2 h-8 w-8 -translate-y-1/2 text-gray-500" />
    </div>
  );
});

export default SearchInput;
