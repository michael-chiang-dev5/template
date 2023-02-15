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
import { useState } from 'react';
import styles from './overview.module.css';

const Container = () => {
  const { id } = useParams();
  // On first render, get question data
  useEffect(() => {
    // we cannot use async/await in useEffect without wrapping in outer function
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: `http://localhost:8080/diagramQuestions/${id}`,
    }).then((res) => {
      setPrompt(res.data.prompt);
      if (res.data.state) {
        const state = JSON.parse(res.data.state);
        const initialNodes = state.nodes;
        const initialEdges = state.edges;
        setNodes(initialNodes);
        setEdges(initialEdges);
      }
    });
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [prompt, setPrompt] = useState('');

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
    // console.log(nodes);
    // console.log(edges);
  };
  const save = () => {
    const savedObj = { nodes: nodes, edges: edges };
    const savedStr = JSON.stringify(savedObj);
    axios({
      method: 'patch',
      withCredentials: true,
      data: { state: savedStr, _id: id },
      url: `http://localhost:8080/diagramQuestions/${id}`,
    });
  };

  return (
    <>
      <h1>{prompt}</h1>

      <div>
        <button
          className={styles.node__button}
          onClick={() => addNode('client')}
        >
          add client
        </button>
        <button
          className={styles.node__button}
          onClick={() => addNode('frontend')}
        >
          add frontend
        </button>
        <button
          className={styles.node__button}
          onClick={() => addNode('backend')}
        >
          add backend
        </button>
        <button
          className={styles.node__button}
          onClick={() => addNode('database')}
        >
          add database
        </button>
        <button
          className={styles.node__button}
          onClick={() => addNode('cache')}
        >
          add cache
        </button>

        <button className={styles.node__button} onClick={clearNodes}>
          clear nodes
        </button>
        <button className={styles.node__button} onClick={save}>
          save
        </button>
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
