import React from "react";
import MobileBar from "./MobileBar";
import DesktopBar from "./DesktopBar";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-3">
        <MobileBar />
        <DesktopBar />
      </div>
    </header>
  );
};

export default Header;
