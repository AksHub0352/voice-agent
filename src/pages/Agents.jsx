import React, { useState } from "react";
import TabNav from "../components/TabNav";
import VoiceAgentOverviewDashboard from "./VoiceAgentOverviewDashboard";
import VoiceAgentBasicSettings from "../components/VoiceAgentBasicSettings";
import WorkflowDiagram from "../components/WorkFlowDiagram";

const Agents = () => {
  const [activeTab, setActiveTab] = useState("Basic Setting");
  const [agents] = useState([
    { name: "Sales Agent", lastModified: "Jan 15, 2025", selected: true },
    { name: "Support Agent", lastModified: "Jan 12, 2025", selected: false },
  ]);

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">Voice Agent </h1>
      </div>

      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "Overview" && <VoiceAgentOverviewDashboard />}
      {activeTab === "Basic Setting" && <VoiceAgentBasicSettings />}
      {activeTab === "Workflow" && <WorkflowDiagram />}
      {activeTab === "Talk to the Agent" && <VoiceAgentBasicSettings />}
    </div>
  );
};

export default Agents;
