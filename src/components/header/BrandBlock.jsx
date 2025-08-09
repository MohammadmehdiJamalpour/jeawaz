import React from "react";

const BrandBlock = React.memo(function BrandBlock({
  englishLogo,
  persianLogo,
  className = "",
}) {
  return (
    <div className={`flex flex-col  items-center justify-center gap-1 ${className}`}>
      <img
        className="max-h-12 max-md:max-h-10"
        src={englishLogo}
        alt="jeawaz"
      />
      <img
        className="max-h-5 max-md:max-h-4"
        src={persianLogo}
        alt="جیواز"
      />
    </div>
  );
});

export default BrandBlock;
