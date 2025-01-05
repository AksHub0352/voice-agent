import React from "react";

const TextArea = ({ label, maxLength, value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <textarea
        className="w-full p-3 border rounded-lg resize-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="text-xs text-gray-500 mt-1">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextArea;
