import React from "react";

const SideNav = ({ activeSection, onSectionChange, changeActiveAgent }) => {
  const sections = [
    {
      title: "AI Command",
      icon: "",
      subsections: [],
    },
    {
      title: "Overview",
      icon: "",
      subsections: [],
    },
    {
      title: "Agents",
      icon: "👥",
      subsections: ["Voice Agents", "Chat Bots", "Outreach Bots"],
    },
    {
      title: "Settings",
      icon: "⚙️",
      subsections: ["Profile", "Payment"],
    },
  ];

  return (
    <div className="w-64 bg-gray-50 h-screen p-4 border-r">
      {sections.map((section) => (
        <div key={section.title} className="mb-4">
          <div
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => onSectionChange(section.title)}
          >
            <span>{section.icon}</span>
            <span className="font-medium">{section.title}</span>
          </div>
          {section.subsections.map((subsection) => (
            <div
              onClick={() => changeActiveAgent(subsection)}
              key={subsection}
              className="ml-8 p-2 hover:bg-gray-100 rounded cursor-pointer text-sm"
            >
              {subsection}
            </div>
          ))}
        </div>
      ))}
      <div className="absolute bottom-4 left-4">
        <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
          <span>↪</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
