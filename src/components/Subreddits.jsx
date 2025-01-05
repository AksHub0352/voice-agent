import React from "react";

const Subreddits = ({ subreddits, onToggleSubreddit }) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-2">Subreddits</h3>
      <input
        type="text"
        placeholder="Search subreddits"
        className="w-full p-2 border rounded-lg mb-2"
      />
      {subreddits.map((subreddit) => (
        <div key={subreddit.name} className="flex items-center gap-2 py-1">
          <input
            type="checkbox"
            checked={subreddit.selected}
            onChange={() => onToggleSubreddit(subreddit.name)}
          />
          <span>r/{subreddit.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Subreddits;
