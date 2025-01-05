import React, { useState } from "react";

const Keywords = ({ keywords, onAddKeyword, onRemoveKeyword }) => {
  const [newKeyword, setNewKeyword] = useState("");

  const handleAddKeyword = () => {
    if (newKeyword.trim()) {
      onAddKeyword(newKeyword.trim());
      setNewKeyword("");
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-2">Keywords</h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {keywords.map((keyword) => (
          <span
            key={keyword}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-2"
          >
            {keyword}
            <button
              onClick={() => onRemoveKeyword(keyword)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add custom keyword"
        className="w-full p-2 border rounded-lg"
        value={newKeyword}
        onChange={(e) => setNewKeyword(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAddKeyword()}
      />
    </div>
  );
};

export default Keywords;
