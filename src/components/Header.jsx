import { Squares2X2Icon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { images } from "../constants/staticData";
const Header = () => (
  <header className="bg-white shadow">
    <div className="container flex items-center  mx-auto py-3 px-4">
      <span className="rounded-full  border border-gray-500 p-2 ">
        <ShoppingBagIcon className="h-6 w-6 text-gray-500" />{" "}
      </span>

      <div className="flex-1 flex flex-col items-center">
        <img className="max-h-10" src={images.englishLogo} alt="jeawaz" />
        <img className="max-h-4" src={images.persianLogo} alt="جیواز" />
      </div>
      <span className="rounded-full  border border-gray-500 p-2 ">
        <Squares2X2Icon className="h-6 w-6 text-gray-500" />
      </span>
    </div>
  </header>
);

export default Header;
