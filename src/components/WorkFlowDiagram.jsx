import React, { useState, useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

const CustomNode = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 min-w-[200px]">
      <h3 className="text-lg font-semibold mb-2">{data.label}</h3>
      <p className="text-sm text-gray-600">{data.description}</p>
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const WorkflowDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    {
      id: "1",
      type: "custom",
      position: { x: 250, y: 50 },
      data: {
        label: "Greet the Caller",
        description: "Ask how you can assist them.",
      },
    },
    {
      id: "2",
      type: "custom",
      position: { x: 250, y: 200 },
      data: {
        label: "Identify Need",
        description: "Determine customer's request.",
      },
    },
  ]);

  const [edges, setEdges, onEdgesChange] = useEdgesState([
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: true,
    },
  ]);

  const [zoom, setZoom] = useState(1);

  const onZoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + 0.2, 2));
  }, []);

  const onZoomOut = useCallback(() => {
    setZoom((prev) => Math.max(prev - 0.2, 0.1));
  }, []);

  return (
    <div className="w-full h-[600px] border rounded-lg relative">
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <button
          onClick={onZoomOut}
          className="bg-white p-2 rounded-lg shadow hover:bg-gray-50"
        >
          -
        </button>
        <button
          onClick={onZoomIn}
          className="bg-white p-2 rounded-lg shadow hover:bg-gray-50"
        >
          +
        </button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        zoom={zoom}
        minZoom={0.1}
        maxZoom={2}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default WorkflowDiagram;
