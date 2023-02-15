import { MarkerType, Position } from 'reactflow';
import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';

import Diagram from './Diagram';
import styles from './overview.module.css';
import { v4 as uuid } from 'uuid';

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
        <button className={styles.node__button} onClick={debug}>
          debug
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
