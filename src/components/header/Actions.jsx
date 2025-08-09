import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Squares2X2Icon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import CircleBtn from "../../ui/CircleBtn";

const Actions = React.memo(function Actions() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-end flex-1  gap-2">
      {/* ورود / ثبت نام */}
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 rounded-full border border-gray-300/60 px-4 py-1.5 text-sm hover:shadow"
      >
        <UserIcon className="h-5 w-5 text-gray-700" />
        ورود / ثبت‌نام
      </button>

      {/* سبد خرید */}
      <CircleBtn label="سبد خرید" onClick={() => navigate("/cart")}>
        <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
      </CircleBtn>

      {/* دسته‌بندی‌ها (only on mobile) */}
      <CircleBtn
        className="lg:hidden"
        label="دسته‌بندی‌ها"
        onClick={() => navigate("/categories")}
      >
        <Squares2X2Icon className="h-6 w-6 text-gray-700" />
      </CircleBtn>
    </div>
  );
});

export default Actions;
