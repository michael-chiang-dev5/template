import Diagram from './Diagram';
import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import { v4 as uuid } from 'uuid';
import { MarkerType, Position } from 'reactflow';

const Container = () => {
  const initialNodes = [];
  const initialEdges = [];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const addNode = () => {
    const newNode = {
      id: uuid(),
      type: 'custom',
      data: {
        label: 'new node',
      },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      position: { x: 250, y: 0 },
    };
    setNodes([...nodes, newNode]);
  };

  return (
    <>
      My diagram
      <button onClick={addNode}>add node</button>
      <Diagram
        nodes={nodes}
        setNotes={setNodes}
        onNodesChange={onNodesChange}
        edges={edges}
        setEdges={setEdges}
        onEdgesChange={onEdgesChange}
      />
    </>
  );
};

export default Container;
