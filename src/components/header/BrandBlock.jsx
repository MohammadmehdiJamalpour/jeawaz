import React from "react";
import SearchInput from "../../ui/SearchInput";

const BrandBlock = React.memo(function BrandBlock({
  englishLogo,
  persianLogo,
  className = "",
  showSearch = true,
}) {
  return (
    <div className={`flex flex-col flex-1  justify-evenly md:flex-row items-center gap-2 ${className}`}>
      <div className="md:order-1 ">
      <img
        className="max-h-12 md:max-h-12 max-md:max-h-10"
        src={englishLogo}
        alt="jeawaz"
      />
      <img
        className="max-h-5 md:max-h-5 max-md:max-h-4"
        src={persianLogo}
        alt="جیواز"
      />
      </div>
      {showSearch && <SearchInput className="w-full max-w-lg mt-2" />}
    </div>
  );
});

export default BrandBlock;
