import React from "react";
import { ShoppingBagIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

/** Convert 0-9 to Persian digits */
function toFa(n) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}

const CartAction = ({ count = 0, onOpen, onBack, showBack = false, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Cart button */}
      <button
        type="button"
        onClick={onOpen}
        aria-label="رفتن به سبد خرید"
        className="shrink-0 rounded-full p-1 ring-2 ring-gray-200 hover:ring-gray-300"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2B0D0D] text-white">
          <ShoppingBagIcon className="h-6 w-6" />
        </span>
      </button>

      {/* Text + back + count */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-900">سبد خرید شما</span>

        <div className="mt-1 flex items-center gap-2">
          {/* Count pill */}
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800">
            <strong className="font-semibold">{toFa(count)}</strong>
            <span>کالا</span>
          </span>

          {/* Back button: keeps space; invisible & non-interactive when false */}
          <button
            type="button"
            onClick={onBack}
            aria-label="بازگشت"
            aria-hidden={!showBack}
            disabled={!showBack}
            className={`rounded-full p-1 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
              showBack ? "visible" : "invisible pointer-events-none"
            }`}
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-900" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartAction);
