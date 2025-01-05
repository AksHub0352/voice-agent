import React from "react";
import {
  Phone,
  Clock,
  Calendar,
  XCircle,
  DollarSign,
  Plus,
} from "lucide-react";

const OverviewContent = () => {
  const metrics = [
    { icon: Phone, value: "1,234", label: "Calls Made", change: 12 },
    { icon: Clock, value: "256h", label: "Total Time", change: 8 },
    { icon: Calendar, value: "89", label: "Meetings Booked", change: 15 },
    { icon: XCircle, value: "45", label: "Unsuccessful Calls", change: -5 },
    { icon: DollarSign, value: "$2.5k", label: "Total Costs", change: 10 },
  ];

  const tasks = [
    {
      name: "Cold Calling Campaign",
      status: "Completed",
      success: 45,
      waiting: 0,
      failed: 3,
    },
    {
      name: "Follow-up Calls",
      status: "Pending",
      success: 28,
      waiting: 12,
      failed: 5,
    },
    {
      name: "Lead Qualification",
      status: "In Progress",
      success: 67,
      waiting: 23,
      failed: 8,
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-lg font-semibold mb-4">Voice Agents Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Agent Tasks</h2>
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Plus size={16} />
            Add a Task
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="py-4 px-4">Task Name</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4">Success Count</th>
                <th className="py-4 px-4">Waiting Count</th>
                <th className="py-4 px-4">Failed Count</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.name} className="border-b">
                  <td className="py-4 px-4">{task.name}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        task.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : task.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">{task.success}</td>
                  <td className="py-4 px-4">{task.waiting}</td>
                  <td className="py-4 px-4">{task.failed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
