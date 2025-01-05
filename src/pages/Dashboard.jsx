import React from "react";
import {
  Users,
  Phone,
  Clock,
  DollarSign,
  Facebook,
  Instagram,
  MessageCircle,
  Globe,
  Grid,
} from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";

const StatCard = ({ icon: Icon, title, value, total, growth, className }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center gap-2 text-gray-500 mb-3">
      <Icon className="h-5 w-5 text-purple-600" />
      <span>{title}</span>
    </div>
    <div className="flex flex-col gap-1">
      <div className="text-2xl font-semibold">
        {total ? (
          <span>
            {value} <span className="text-gray-400">/ {total}</span>
          </span>
        ) : (
          value
        )}
      </div>
      {growth && (
        <div className="flex items-center text-sm">
          <span
            className={
              growth.startsWith("+") ? "text-green-600" : "text-red-600"
            }
          >
            {growth}
          </span>
          <span className="text-gray-500 ml-2">Since last month</span>
        </div>
      )}
    </div>
  </div>
);

const DonutChart = ({ value, total, label, details }) => {
  const data = [
    { value: value, color: "#7C3AED" },
    { value: total - value, color: "#DDD6FE" },
  ];

  return (
    <div className="flex items-center justify-center relative">
      <PieChart width={160} height={160}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={70}
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute text-center">
        <div className="text-xl font-semibold">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
};

const InteractionsTable = ({ data, title }) => (
  <div className="mt-6">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="bg-white rounded-xl shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="py-4 px-6">Task</th>
            <th className="py-4 px-6">Number</th>
            <th className="py-4 px-6">Succeeded</th>
            <th className="py-4 px-6">Waiting</th>
            <th className="py-4 px-6">Failed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="py-4 px-6">
                <div>{row.task}</div>
                <div className="text-sm text-gray-500">ID {row.id}</div>
              </td>
              <td className="py-4 px-6">{row.number}</td>
              <td className="py-4 px-6">${row.succeeded}</td>
              <td className="py-4 px-6">${row.waiting}</td>
              <td className="py-4 px-6">${row.failed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Dashboard = () => {
  const platformButtons = [
    { icon: Grid, label: "All" },
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: MessageCircle, label: "Whatsapp" },
    { icon: Globe, label: "Website" },
  ];

  const callsDurationData = [
    { label: "Within 30s", value: "40 - 40%", color: "#7C3AED" },
    { label: "30s-60s", value: "30 - 30%", color: "#DDD6FE" },
    { label: "Over 1min", value: "10 - 10%", color: "#F3F4F6" },
  ];

  const interactionsSentData = [
    {
      task: "DM Sent",
      id: "3941221938",
      number: "500",
      succeeded: "316.00",
      waiting: "316.00",
      failed: "316.00",
    },
    {
      task: "Share Sent",
      id: "3941221938",
      number: "300",
      succeeded: "316.00",
      waiting: "316.00",
      failed: "316.00",
    },
    {
      task: "Like Sent",
      id: "3941221938",
      number: "1000",
      succeeded: "316.00",
      waiting: "316.00",
      failed: "316.00",
    },
    {
      task: "Comment Sent",
      id: "3941221938",
      number: "400",
      succeeded: "316.00",
      waiting: "316.00",
      failed: "316.00",
    },
  ];

  const interactionsReceivedData = [
    {
      task: "DM Received",
      id: "3941221938",
      number: "500",
      succeeded: "316.00",
      waiting: "316.00",
      failed: "316.00",
    },
    {
      task: "Like Received",
      id: "3941221938",
      number: "1000",
      succeeded: "316.00",
      waiting: "316.00",
      failed: "316.00",
    },
    {
      task: "Comment Received",
      id: "3941221938",
      number: "400",
      succeeded: "316.00",
      waiting: "316.00",
      failed: "316.00",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Voice Agent Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Voice Agent Data</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200">
            This Month
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Users}
            title="Total Contacts"
            value="500"
            growth="+8.1%"
          />
          <StatCard
            icon={Phone}
            title="Contacts Called"
            value="300"
            total="500"
            growth="+8.1%"
          />
          <StatCard
            icon={Users}
            title="Remaining Contacts"
            value="200"
            total="500"
            growth="+8.1%"
          />
          <StatCard
            icon={DollarSign}
            title="Total Costs"
            value="$20"
            growth="+8.1%"
          />
        </div>

        <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Successful Calls Duration</h3>
            <div className="text-2xl font-semibold mt-2">200</div>
          </div>
          <div className="h-4 bg-gray-100 rounded-full flex overflow-hidden">
            {callsDurationData.map((item, index) => (
              <div
                key={index}
                className="h-full"
                style={{
                  width: item.value.split("-")[0].trim() + "%",
                  backgroundColor: item.color,
                }}
              />
            ))}
          </div>
          <div className="mt-4 flex gap-6">
            {callsDurationData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="text-sm text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Chatbot Data</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200">
            This Month
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          {platformButtons.map((button, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                index === 0
                  ? "bg-purple-50 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <button.icon className="h-5 w-5" />
              {button.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={Users}
            title="Total Clients"
            value="100"
            growth="+8.1%"
          />
          <StatCard
            icon={MessageCircle}
            title="Total Dialouges"
            value="500"
            growth="-3.2%"
          />
          <StatCard
            icon={DollarSign}
            title="Total Costs"
            value="$20"
            growth="-3.2%"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Clients</h3>
            <DonutChart value={100} total={120} label="Clients" />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Dialogues</h3>
            <DonutChart value={500} total={700} label="Dialogues" />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Outreach Bot</h2>
          <div className="flex gap-4">
            <select className="px-4 py-2 rounded-lg border border-gray-200">
              <option>All</option>
            </select>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
              Show Results
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          {platformButtons.map((button, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                index === 0
                  ? "bg-purple-50 text-purple-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <button.icon className="h-5 w-5" />
              {button.label}
            </button>
          ))}
        </div>

        <InteractionsTable
          data={interactionsSentData}
          title="Interactions Sent"
        />
        <InteractionsTable
          data={interactionsReceivedData}
          title="Interactions Received"
        />
      </section>
    </div>
  );
};

export default Dashboard;
