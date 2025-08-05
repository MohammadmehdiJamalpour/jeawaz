import React from "react";
import BrandBlock from "./BrandBlock";
import Actions from "./Actions";
import NavLinks from "./NavLinks";
import { images } from "../../constants/staticData";

const DesktopBar = React.memo(function DesktopBar() {
  return (
    <div className="hidden md:flex md:gap-2 md:items-center ">

      
      {/* Left side: actions + nav */}
      <div className="items-center w-full ">
        <div className="flex items-center justify-between gap-4">
          <Actions />
          <NavLinks />
        </div>
      </div>
      {/* Right side (RTL visual right): brand + search (max 50% width) */}
      <div className="justify-self-end w-full ">
        <BrandBlock
          englishLogo={images.englishLogo}
          persianLogo={images.persianLogo}
          showSearch
        />
      </div>

    </div>
  );
});

export default DesktopBar;
