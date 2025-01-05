import React, { useState } from "react";
import PerformanceMetrics from "../components/PerformanceMetrics";
import AgentTasks from "../components/AgentTasks";
import AgentList from "../components/AgentList";

const VoiceAgentOverviewDashboard = () => {
  const [agents] = useState([
    { name: "Sales Agent Alpha", lastModified: "Jan 15, 2025", selected: true },
    { name: "Lead Gen Agent", lastModified: "Jan 12, 2025", selected: false },
  ]);
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <AgentList agents={agents} />
      <PerformanceMetrics />
      <AgentTasks />
    </div>
  );
};

export default VoiceAgentOverviewDashboard;
