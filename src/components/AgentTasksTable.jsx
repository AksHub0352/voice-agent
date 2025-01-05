import React from "react";
import { Plus } from "lucide-react";

const AgentTasksTable = ({ tasks }) => {
  return (
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
  );
};
export default AgentTasksTable;
