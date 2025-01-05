import React from "react";

const TaskRow = ({ name, status, successCount, waitingCount, failedCount }) => (
  <div className="grid grid-cols-5 gap-4 py-3 border-b">
    <div>{name}</div>
    <div>{status}</div>
    <div>{successCount}</div>
    <div>{waitingCount}</div>
    <div>{failedCount}</div>
  </div>
);

export default TaskRow;
