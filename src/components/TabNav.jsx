import React from "react";

const TabNav = ({ activeTab, onTabChange }) => {
  const tabs = ["Overview", "Basic Setting", "Workflow", "Talk to the Agent"];

  return (
    <div className="border-b">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-4 px-2 ${
              activeTab === tab ? "border-b-2 border-black" : "text-gray-500"
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNav;
