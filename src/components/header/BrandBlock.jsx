import React from "react";

const BrandBlock = React.memo(function BrandBlock({
  englishLogo,
  persianLogo,
  className = "",
}) {
  return (
    <div className="flex items-center justify-evenly md:gap-2 xl:gap-5">
      <div
        className={`flex flex-col  items-center  justify-center gap-1 ${className}`}
      >
        <img
          className="max-h-12 max-md:max-h-10"
          src={englishLogo}
          alt="jeawaz"
        />
        <img className="max-h-5 max-md:max-h-4" src={persianLogo} alt="جیواز" />
      </div>
      <div className="hidden md:inline-block">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 0L12.98 10.02L23 11.5L12.98 12.98L11.5 23L10.02 12.98L0 11.5L10.02 10.02L11.5 0Z"
            fill="#040404"
          />
        </svg>
      </div>
    </div>
  );
});

export default BrandBlock;
