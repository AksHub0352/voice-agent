import React from "react";

const AgentSideBar = ({ agents }) => {
  return (
    <div className="p-6">
      <button className="bg-black text-white py-2 px-4 rounded mb-6 flex items-center gap-2">
        <span className="text-lg">+</span> Create New Agent
      </button>

      <div className="space-y-4">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border rounded-md"
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="agent"
                className="w-4 h-4 accent-blue-500"
                defaultChecked={agent.status === "Active"}
              />

              <div>
                <div className="font-medium">{agent.name}</div>
                <div className="text-gray-500 text-sm">{agent.platform}</div>
              </div>
            </div>

            <span
              className={`px-3 py-1 text-sm rounded-full ${
                agent.status === "Active"
                  ? "bg-gray-200 text-black"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {agent.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentSideBar;
