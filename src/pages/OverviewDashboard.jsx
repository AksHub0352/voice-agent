import React from "react";
import {
  Bell,
  ChevronDown,
  Grid,
  MessageCircle,
  Phone,
  Search,
  Send,
  Sun,
} from "lucide-react";
import Dashboard from "./Dashboard";

const OverviewDashboard = () => {
  const agents = [
    {
      id: "3941221938",
      name: "Voice Agent One",
      status: "Occupied",
      meetingsBooked: 874.0,
      cost: 316.0,
    },
    {
      id: "3941221938",
      name: "Voice Agent One",
      status: "Non Occupied",
      meetingsBooked: 874.0,
      cost: 316.0,
    },
    {
      id: "3941221938",
      name: "Voice Agent One",
      status: "Non Occupied",
      meetingsBooked: 874.0,
      cost: 316.0,
    },
    {
      id: "3941221938",
      name: "Voice Agent One",
      status: "Non Occupied",
      meetingsBooked: 874.0,
      cost: 316.0,
    },
    {
      id: "3941221938",
      name: "Voice Agent One",
      status: "Non Occupied",
      meetingsBooked: 874.0,
      cost: 316.0,
    },
  ];

  return (
    <div className="flex-col w-full">
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Overview</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Sun className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <div className="w-8 h-8 rounded-full bg-purple-600"></div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Total Performance</h2>
          <div className="flex gap-4 mb-6">
            <button className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-lg">
              <Grid className="h-5 w-5" />
              All
            </button>
            <button className="flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
              <Phone className="h-5 w-5" />
              Voice Agents
            </button>
            <button className="flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
              <MessageCircle className="h-5 w-5" />
              Chat Bots
            </button>
            <button className="flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
              <Send className="h-5 w-5" />
              Outreach Bots
            </button>
            <div className="ml-auto">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                This Month
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Grid className="h-5 w-5 text-purple-600" />
                Meetings Booked
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold">10</span>
                <div className="flex items-center text-green-600 text-sm">
                  <span>+8.1%</span>
                  <span className="text-gray-500 ml-2">Since last month</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <Grid className="h-5 w-5 text-purple-600" />
                Interested in Booking
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-semibold">15</span>
                <div className="flex items-center text-red-600 text-sm">
                  <span>+3.2%</span>
                  <span className="text-gray-500 ml-2">Since last month</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Agent Overview</h2>
          <div className="flex gap-4 mb-6">
            <button className="flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-lg">
              <Grid className="h-5 w-5" />
              All
            </button>
            <button className="flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
              <Phone className="h-5 w-5" />
              Voice Agents
            </button>
            <button className="flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
              <MessageCircle className="h-5 w-5" />
              Chat Bots
            </button>
            <button className="flex items-center gap-2 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
              <Send className="h-5 w-5" />
              Outreach Bots
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-4 px-6 font-medium">Name</th>
                  <th className="py-4 px-6 font-medium">Status</th>
                  <th className="py-4 px-6 font-medium">Meetings Booked</th>
                  <th className="py-4 px-6 font-medium">Cost</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-4 px-6">
                      <div>
                        <div>{agent.name}</div>
                        <div className="text-sm text-gray-500">
                          ID {agent.id}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          agent.status === "Occupied"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {agent.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      ${agent.meetingsBooked.toFixed(2)}
                    </td>
                    <td className="py-4 px-6">${agent.cost.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center justify-end gap-2 p-4 border-t">
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Previous
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                1
              </button>
              <button className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg">
                2
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                3
              </button>
              <span className="px-4 py-2 text-gray-600">...</span>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dashboard />
    </div>
  );
};

export default OverviewDashboard;
