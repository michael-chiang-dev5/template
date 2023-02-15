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
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Container = () => {
  const { id } = useParams();
  // On first render, get question data
  useEffect(() => {
    // we cannot use async/await in useEffect without wrapping in outer function
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: `http://localhost:8080/diagramQuestions/${id}`,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log('error with fetch');
      });
  }, []);

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
