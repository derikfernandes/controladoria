import React, { useState } from 'react';
import { FlowCanvas } from './FlowCanvas';
import { DetailPanel } from './DetailPanel';

export function Macrofluxo() {
    const [selectedNodeId, setSelectedNodeId] = useState(null);
    const [detailNode, setDetailNode] = useState(null);

    return (
        <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 70px)', overflow: 'hidden' }}>
            {/* The Canvas (Left 70%, but actually full width underneath) */}
            <FlowCanvas
                onNodeSelect={(node) => {
                    if (!node) {
                        setSelectedNodeId(null);
                        setDetailNode(null);
                        return;
                    }
                    setSelectedNodeId(node.id);
                }}
                onNodeOpen={(node) => {
                    setSelectedNodeId(node.id);
                    setDetailNode(node);
                }}
                selectedNodeId={selectedNodeId}
            />

            {/* The Detail Panel (Right 30%) */}
            <DetailPanel
                hidden={!detailNode}
                node={detailNode}
                onClose={() => setDetailNode(null)}
            />
        </div>
    );
}
