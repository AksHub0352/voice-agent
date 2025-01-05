import React from "react";

const MarketingResults = ({ results }) => {
  return (
    <div className="mb-30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Marketing Results</h3>
        <button className="text-sm flex items-center gap-1 text-gray-600">
          <span>Download Report (Excel)</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-600">
              <th className="py-2">Keywords/Subreddits</th>
              <th className="py-2">r/marketing</th>
              <th className="py-2">r/socialmedia</th>
              <th className="py-2">r/digitalmarketing</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row) => (
              <tr key={row.keyword} className="border-t">
                <td className="py-2">{row.keyword}</td>
                <td className="py-2">{row.marketing}</td>
                <td className="py-2">{row.socialmedia}</td>
                <td className="py-2">{row.digitalmarketing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketingResults;
