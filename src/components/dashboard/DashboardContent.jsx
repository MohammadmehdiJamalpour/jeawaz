import React from "react";
import { Tab } from "@headlessui/react";


const PanelShell = ({ title, children }) => (
  <section className="rounded-xl border border-gray-200 bg-white p-4 md:p-6">
    {title && <h2 className="mb-4 text-lg font-semibold text-gray-800">{title}</h2>}
    {children}
  </section>
);

/* ----------------- Panels ----------------- */
const OverviewPanel = () => {
  const cards = [
    { k: "orders", label: "سفارش‌ها", value: "۱۲" },
    { k: "messages", label: "پیام‌های خوانده‌نشده", value: "۳" },
    { k: "comments", label: "دیدگاه‌های اخیر", value: "۵" },
    { k: "wishlist", label: "علاقه‌مندی‌ها", value: "۹" },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">خلاصه عملکرد</h3>
      </div>

    
      <div className="relative">
        <div
          className="
            flex gap-3 overflow-x-auto overscroll-x-contain
            snap-x snap-mandatory
            [scrollbar-width:none] [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
            py-1
          "
          aria-label="کارت‌ها"
        >
          {cards.map((card) => (
            <div
              key={card.k}
              className="
                snap-start shrink-0 w-64
                rounded-xl border border-gray-200 bg-white p-4
              "
            >
              <p className="text-sm text-gray-500">{card.label}</p>
              <p className="mt-1 text-2xl font-bold text-gray-800">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CartPanel = () => (
  <PanelShell title="سبد خرید">
    <p className="text-gray-600">اینجا آیتم‌های سبد خرید نمایش داده می‌شوند.</p>
  </PanelShell>
);

const ProfilePanel = () => (
  <PanelShell title="پروفایل">
    <p className="text-gray-600">اطلاعات کاربری و تنظیمات.</p>
  </PanelShell>
);

const MessagesPanel = () => (
  <PanelShell title="پیام‌ها">
    <p className="text-gray-600">صندوق پیام‌های شما.</p>
  </PanelShell>
);

const CommentsPanel = () => (
  <PanelShell title="دیدگاه‌های من">
    <p className="text-gray-600">لیست دیدگاه‌های شما.</p>
  </PanelShell>
);

/* ----------------- Host ----------------- */
const DashboardContent = ({ className = "" }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <Tab.Panels className="space-y-4">
        <Tab.Panel>
          <OverviewPanel />
        </Tab.Panel>
        <Tab.Panel>
          <CartPanel />
        </Tab.Panel>
        <Tab.Panel>
          <ProfilePanel />
        </Tab.Panel>
        <Tab.Panel>
          <MessagesPanel />
        </Tab.Panel>
        <Tab.Panel>
          <CommentsPanel />
        </Tab.Panel>
      </Tab.Panels>
    </div>
  );
};

export default React.memo(DashboardContent);
