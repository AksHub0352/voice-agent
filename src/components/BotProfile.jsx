import React from "react";

const BotProfile = ({ profile }) => {
  return (
    <div className="mb-6 p-4 border rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-medium">{profile.name}</h3>
          <p className="text-sm text-gray-500">ID: {profile.id}</p>
        </div>
        <span className="text-yellow-600 text-sm">Warning</span>
      </div>
      <div className="flex gap-8">
        <div>
          <p className="text-sm text-gray-500">Comment Karma</p>
          <p className="font-medium">{profile.commentKarma}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Post Karma</p>
          <p className="font-medium">{profile.postKarma}</p>
        </div>
      </div>
    </div>
  );
};

export default BotProfile;
