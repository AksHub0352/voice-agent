import React from "react";

const KnowledgeBase = () => {
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Knowledge Base</h2>
      <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60  group p-8 text-center">
        <div className="mb-4">
          <input type="file" class="hidden" />

          <span className="text-gray-400">☁️</span>
          <p className="text-gray-500 mb-4">
            Drag and drop files here or click to upload
          </p>
        </div>
      </label>
      <div className="mt-8 flex items-center justify-between bg-gray-50 p-4 rounded">
        <span>📄 product-manual.pdf</span>
        <div className="space-x-2">
          <button>⬇️</button>
          <button>🗑️</button>
        </div>
      </div>
    </div>
  );
};
export default KnowledgeBase;
