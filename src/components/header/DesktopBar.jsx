import React from "react";
import BrandBlock from "./BrandBlock";
import Actions from "./Actions";
import NavLinks from "./NavLinks";
import SearchInput from "../../ui/SearchInput";
import { images } from "../../constants/staticData";

const DesktopBar = React.memo(function DesktopBar() {
  return (
    <div className="hidden md:flex items-center justify-between gap-4" dir="rtl">
     

      {/* Right (RTL visual right): brand + search (container = max 50% width) */}
      <div className="flex items-center justify-evenly gap md:w-2/3 lg:w-1/2">
        <BrandBlock
          englishLogo={images.englishLogo}
          persianLogo={images.persianLogo}
        />
        {/* Search fills remaining space on the right side */}
        <div className="w-2/3 ">
          <SearchInput className="w-full" />
        </div>
      </div>
       {/* Left: actions + nav */}
      <div className="flex items-center justify-evenly  w-1/2 gap-4 ">
        <NavLinks />
        <Actions />
      </div>
    </div>
  );
});

export default DesktopBar;
