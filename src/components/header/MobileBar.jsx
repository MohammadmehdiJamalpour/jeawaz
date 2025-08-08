import React from "react";
import { Squares2X2Icon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import BrandBlock from "./BrandBlock";
import CircleBtn from "../../ui/CircleBtn";
import SearchInput from "../../ui/SearchInput";
import { images } from "../../constants/staticData";

const MobileBar = React.memo(function MobileBar() {
  return (
    <div className="md:hidden" dir="rtl">
      {/* Top row: cart | brand | categories */}
      <div className="flex items-center justify-between px-2 pt-4">
        <CircleBtn className="border-primary-400/40 " label="دسته‌بندی‌ها">
          <Squares2X2Icon className="h-6 w-6 text-primary-500" />
        </CircleBtn>

        <BrandBlock
          englishLogo={images.englishLogo}
          persianLogo={images.persianLogo}
          className="px-2"
        />
        <CircleBtn label="سبد خرید">
          <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
        </CircleBtn>
      </div>

      {/* Full-width search bar */}
      <div className="px-3 pt-2 pb-3">
        <SearchInput className="w-full" />
      </div>
    </div>
  );
});

export default MobileBar;
