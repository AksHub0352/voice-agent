import React, { useState } from "react";
import SideNav from "../components/SideNav";

import Agents from "./Agents";
import BotSettings from "../components/BotSettings";
import AgentSideBar from "../components/AgentSideBar";
import OverviewDashboard from "./OverviewDashboard";

const VoiceAgentDashboard = () => {
  const [activeAgents, setActiveAgents] = useState("Voice Agents");
  const [activeSection, setActiveSection] = useState("Overview");
  const changeActiveAgent = (agent) => {
    setActiveAgents(agent);
    setActiveSection("Agents");
  };
  const changeActiveSection = (agent) => {
    setActiveSection(agent);
  };

  const agents = [
    { name: "RedditBot_01", platform: "Reddit", status: "Active" },
    { name: "LinkedInBot_01", platform: "LinkedIn", status: "Paused" },
  ];
  return (
    <div className="flex h-screen">
      <SideNav
        changeActiveAgent={changeActiveAgent}
        onSectionChange={changeActiveSection}
      />
      {activeSection === "Overview" && <OverviewDashboard />}
      {activeSection === "Agents" && (
        <div className="flex h-screen w-full">
          <AgentSideBar agents={agents} />
          {activeAgents === "Voice Agents" && <Agents />}
          {activeAgents === "Chat Bots" && <>Chat Bots</>}
          {activeAgents === "Outreach Bots" && <BotSettings />}
        </div>
      )}
    </div>
  );
};
export default VoiceAgentDashboard;
