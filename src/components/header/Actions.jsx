import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Squares2X2Icon,
  UserIcon,
} from "@heroicons/react/24/outline";
import CircleBtn from "../../ui/CircleBtn";
import CartAction from "./CartAction";

const Actions = React.memo(function Actions() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 items-center justify-end gap-2" dir="rtl">
      {/* ورود / ثبت نام */}
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 rounded-full border border-gray-300/60 px-5 py-3 text-xs lg:text-sm  hover:shadow"
      >
        ورود | ثبت‌نام
        <UserIcon className="h-5 w-5 text-gray-700" />
      </button>

      {/* NEW: CartAction (replaces old CircleBtn cart) */}
      <CartAction
        count={4}                               // TODO: wire to your cart state
        onOpen={() => navigate("/cart")}
        onBack={() => navigate(-1)}
      />

     
    </div>
  );
});

export default Actions;
