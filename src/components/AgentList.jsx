import React from "react";

const AgentList = ({ agents, onAgentSelect }) => {
  return (
    <div className="space-y-2 mb-8">
      {agents.map((agent) => (
        <div
          key={agent.name}
          className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded cursor-pointer"
        >
          <input
            type="radio"
            name="agent"
            className="w-4 h-4"
            checked={agent.selected}
            onChange={() => onAgentSelect(agent.name)}
          />
          <div>
            <div className="font-medium">{agent.name}</div>
            <div className="text-sm text-gray-500">
              Last modified: {agent.lastModified}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgentList;
