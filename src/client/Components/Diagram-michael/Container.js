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

const Container = () => {
  const initialNodes = [
    {
      id: uuid(),
      type: 'input',
      data: {
        label: 'asdfsdf Node',
      },
      position: { x: 250, y: 0 },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  const edges = [];

  const addNode = () => {
    const newNode = {
      id: uuid(),
      type: 'input',
      data: {
        label: 'new node',
      },
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
      />
    </>
  );
};

export default Container;
