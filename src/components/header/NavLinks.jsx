import React from "react";

const NavLinks = React.memo(function NavLinks({ className = "" }) {
  return (
    <nav className={`hidden xl:flex items-center md:mr-4 gap-5 text-sm text-gray-700 ${className}`}>
      <a className="hover:text-primary-600" href="#">مطالب آموزشی</a>
      <a className="hover:text-primary-600" href="#">درباره ما</a>
      <a className="hover:text-primary-600" href="#">تماس با ما</a>
    </nav>
  );
});

export default NavLinks;
