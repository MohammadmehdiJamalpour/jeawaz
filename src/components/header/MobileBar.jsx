import React from "react";
import { Squares2X2Icon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import BrandBlock from "./BrandBlock";
import CircleBtn from "../../ui/CircleBtn";
import { images } from "../../constants/staticData";

const MobileBar = React.memo(function MobileBar() {
  return (
    <div className="md:hidden">
      <div className="flex items-start">
        {/* Left: cart */}
        <div className="flex items-center pt-4">
          <CircleBtn label="سبد خرید">
            <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
          </CircleBtn>
        </div>

        {/* Middle: logos + search (search INSIDE images container) */}
        <BrandBlock
          englishLogo={images.englishLogo}
          persianLogo={images.persianLogo}
          className=""
          showSearch
        />

        {/* Right: categories */}
        <div className="flex items-center pt-4 justify-end">
          <CircleBtn label="دسته‌بندی‌ها">
            <Squares2X2Icon className="h-6 w-6 text-gray-700" />
          </CircleBtn>
        </div>
      </div>
    </div>
  );
});

export default MobileBar;
