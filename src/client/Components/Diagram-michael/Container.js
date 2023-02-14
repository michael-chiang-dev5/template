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

  const addNode = (str) => {
    const newNode = {
      id: uuid(),
      data: {
        label: str,
      },
      position: { x: 0, y: 0 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    };

    setNodes([...nodes, newNode]);
  };
  const clearNodes = () => {
    setNodes([]);
  };
  const debug = () => {
    console.log(nodes);
    console.log(edges);
  };

  return (
    <>
      <div>
        <button onClick={() => addNode('client')}>add client</button>
        <button onClick={() => addNode('frontend')}>add frontend</button>
        <button onClick={() => addNode('backend')}>add backend</button>
        <button onClick={() => addNode('database')}>add database</button>
        <button onClick={() => addNode('cache')}>add cache</button>

        <button onClick={clearNodes}>clear nodes</button>
        <button onClick={debug}>debug</button>
      </div>
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
