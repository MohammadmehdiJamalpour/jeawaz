import React from "react";
import { Tab } from "@headlessui/react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardContent from "./DashboardContent";

const TABS = [
  { id: "overview", label: "نمای کلی" },
  { id: "cart", label: "سبد خرید" },
  { id: "profile", label: "پروفایل" },
  { id: "messages", label: "پیام‌ها" },
  { id: "comments", label: "دیدگاه‌های من" },
];

const DashboardBody = ({ className = "" }) => (
  <main dir="rtl" className={`p-4 md:p-6 ${className}`}>
    <Tab.Group>

      <div className="flex flex-col gap-4 md:flex-row">
        <DashboardSidebar tabs={TABS} className="md:w-1/3 lg:w-1/4 shrink-0" />
        <DashboardContent className="flex-1" />
      </div>
    </Tab.Group>
  </main>
);

export default DashboardBody;
