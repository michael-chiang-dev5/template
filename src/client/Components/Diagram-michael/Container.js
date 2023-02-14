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

const Container = () => {
  const initialNodes = [
    {
      id: '1',
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
      id: '2',
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
