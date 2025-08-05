import React from "react";
import {
  Squares2X2Icon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import CircleBtn from "../../ui/CircleBtn";

const Actions = React.memo(function Actions() {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="flex items-center gap-2 rounded-full border border-gray-300/60 px-4 py-1.5 text-sm hover:shadow"
      >
        <UserIcon className="h-5 w-5 text-gray-700" />
        ورود / ثبت‌نام
      </button>

      <CircleBtn label="سبد خرید">
        <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
      </CircleBtn>

      <CircleBtn className="lg:hidden" label="دسته‌بندی‌ها">
        <Squares2X2Icon className=" h-6 w-6 text-gray-700" />
      </CircleBtn>
    </div>
  );
});

export default Actions;
