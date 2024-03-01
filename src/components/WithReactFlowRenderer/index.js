import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import "./styles.css";

import initialNodes from '../../utils/nodes.js';
import initialEdges from '../../utils/edges.js';
import { dummyData } from "../../utils/sampleData.js"
import { generateGraphData } from '../../utils/index.js';

const rfStyle = {
  backgroundColor: '#D0C0F7',
};

function WithReactFlowRenderer() {
  const graphData = generateGraphData(dummyData);
  const [nodes, setNodes] = useState(graphData?.nodes || []);
  const [edges, setEdges] = useState(graphData?.edges || []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      style={rfStyle}
      attributionPosition="top-right"
    >
      <Background />
    </ReactFlow>
  );
}

export default WithReactFlowRenderer;
