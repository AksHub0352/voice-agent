import React from "react";

const PromptSettings = () => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-4">Prompt Settings</h2>
      <textarea
        className="w-full h-32 p-4 border rounded"
        placeholder="Define agent behavior..."
      />
    </div>
  );
};

export default PromptSettings;
