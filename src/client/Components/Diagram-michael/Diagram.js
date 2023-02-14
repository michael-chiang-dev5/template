import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import NodeClient from './NodeClient';

import 'reactflow/dist/style.css';
import './overview.module.css';

const nodeTypes = {
  custom: NodeClient,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) =>
  console.log('flow loaded:', reactFlowInstance);

const OverviewFlow = ({
  nodes,
  setNodes,
  onNodesChange,
  edges,
  setEdges,
  onEdgesChange,
}) => {
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
      const edgeType = nodes.find((node) => node.type === 'custom').data
        .selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  return (
    <div style={{ height: 800 }}>
      <ReactFlow
        nodes={nodes}
        edges={edgesWithUpdatedTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
      >
        <MiniMap style={minimapStyle} zoomable pannable />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default OverviewFlow;
