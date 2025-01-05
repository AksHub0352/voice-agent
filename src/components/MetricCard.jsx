import React from "react";

const MetricCard = ({ icon: Icon, value, label, change }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center justify-between mb-2">
      <Icon className="text-gray-500" size={20} />
      <span
        className={`text-sm ${change > 0 ? "text-green-500" : "text-red-500"}`}
      >
        {change > 0 ? "+" : ""}
        {change}%
      </span>
    </div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

export default MetricCard;
