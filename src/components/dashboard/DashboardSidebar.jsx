import React from "react";
import { Tab } from "@headlessui/react";

const DashboardSidebar = ({ tabs, className = "" }) => {
  return (
    <aside className={`rounded-xl border border-gray-200 bg-white p-3 md:p-4 ${className}`}>

      <Tab.List className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto">
        {tabs.map((t) => (
          <Tab
            key={t.id}
            className={({ selected }) =>
              [
                "text-right rounded-lg px-3 py-2 text-sm transition focus:outline-none",
                "focus-visible:ring-2 focus-visible:ring-primary-500",
                selected
                  ? "bg-primary-50 text-primary-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-50",
              ].join(" ")
            }
          >
            {t.label}
          </Tab>
        ))}
      </Tab.List>
    </aside>
  );
};

export default React.memo(DashboardSidebar);
