import React, { useState } from "react";
import Subreddits from "./Subreddits";
import BotProfile from "./BotProfile";
import MarketingResults from "./MarketingResults";
import Keywords from "./Keywords";
import { Switch } from "@mui/material";
import TextArea from "./TextArea";

const BotSettings = () => {
  const [settings, setSettings] = useState({
    targetAudience: "",
    problemToSolve: "",
    solution: "",
    difference: "",
    autoReplies: false,
    keywords: ["marketing", "automation", "social media"],
    subreddits: [
      { name: "marketing", selected: false },
      { name: "socialmedia", selected: false },
      { name: "digitalmarketing", selected: false },
    ],
  });

  const botProfile = {
    name: "RedditBot_01",
    id: "BOT123456",
    commentKarma: 142,
    postKarma: 89,
  };

  const marketingResults = [
    {
      keyword: "marketing",
      marketing: 45,
      socialmedia: 32,
      digitalmarketing: 28,
    },
    {
      keyword: "automation",
      marketing: 23,
      socialmedia: 18,
      digitalmarketing: 15,
    },
    {
      keyword: "social media",
      marketing: 67,
      socialmedia: 89,
      digitalmarketing: 41,
    },
  ];

  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-xl font-bold mb-6">Basic Settings</h2>
      <h3 className="text-lg font-medium mb-4">Train Your Bot</h3>

      <TextArea
        label="Target Audience"
        maxLength={500}
        value={settings.targetAudience}
        onChange={(value) =>
          setSettings({ ...settings, targetAudience: value })
        }
      />

      <TextArea
        label="Problem to Solve"
        maxLength={500}
        value={settings.problemToSolve}
        onChange={(value) =>
          setSettings({ ...settings, problemToSolve: value })
        }
      />

      <TextArea
        label="How Will You Solve It"
        maxLength={500}
        value={settings.solution}
        onChange={(value) => setSettings({ ...settings, solution: value })}
      />

      <TextArea
        label="Difference Between You and Others"
        maxLength={500}
        value={settings.difference}
        onChange={(value) => setSettings({ ...settings, difference: value })}
      />

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">
          Targeting Keywords and Subreddits
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm">Auto Replies</span>
          <Switch
            checked={settings.autoReplies}
            onChange={(e) =>
              setSettings({ ...settings, autoReplies: e.target.checked })
            }
          />
        </div>

        <Keywords
          keywords={settings.keywords}
          onAddKeyword={(keyword) =>
            setSettings({
              ...settings,
              keywords: [...settings.keywords, keyword],
            })
          }
          onRemoveKeyword={(keyword) =>
            setSettings({
              ...settings,
              keywords: settings.keywords.filter((k) => k !== keyword),
            })
          }
        />

        <Subreddits
          subreddits={settings.subreddits}
          onToggleSubreddit={(name) =>
            setSettings({
              ...settings,
              subreddits: settings.subreddits.map((s) =>
                s.name === name ? { ...s, selected: !s.selected } : s
              ),
            })
          }
        />
      </div>

      <BotProfile profile={botProfile} />
      <MarketingResults results={marketingResults} />
    </div>
  );
};

export default BotSettings;
