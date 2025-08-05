import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchInput = React.memo(function SearchInput({ className = "", inputProps = {} }) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        placeholder=" ... نام محصول، دسته محصول"
        className="w-full text-right rounded-full border border-gray-300/60 bg-secondary-50 py-2 pr-4 pl-12 text-sm placeholder:text-gray-400 focus:border-primary-500 focus:outline-none"
        {...inputProps}
      />
      {/* Icon on LEFT for RTL */}
      <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
    </div>
  );
});

export default SearchInput;
