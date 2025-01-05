import React from "react";

const PhoneNumber = () => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-4">Phone Numbers</h2>
      <div className="flex justify-between items-center">
        <div>Current Number: +1 (555) 123-4567</div>
        <button className="bg-black text-white px-4 py-2 rounded">
          Purchase New Number
        </button>
      </div>
    </div>
  );
};

export default PhoneNumber;
