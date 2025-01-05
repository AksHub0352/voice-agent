import React, { useState } from "react";
import AgentList from "../components/AgentList";
import VoiceSettings from "../components/VoiceSettings";
import PhoneNumber from "../components/PhoneNumber";
import PromptSettings from "../components/PromptSettings";
import KnowledgeBase from "../components/KnowledgeBase";

const VoiceAgentBasicSettings = () => {
  const [agents] = useState([
    { name: "Sales Agent", lastModified: "Jan 15, 2025", selected: true },
    { name: "Support Agent", lastModified: "Jan 12, 2025", selected: false },
  ]);
  return (
    <div className="py-8">
      <AgentList agents={agents} />
      <VoiceSettings />
      <PhoneNumber />
      <PromptSettings />
      <KnowledgeBase />
    </div>
  );
};

export default VoiceAgentBasicSettings;
