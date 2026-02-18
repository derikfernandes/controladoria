import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, User, FileText, AlertCircle, Scale, Building } from 'lucide-react';
import { macrofluxoNodes, macrofluxoEdges } from './data';

export function FlowCanvas({ onNodeSelect, onNodeOpen, selectedNodeId }) {
    const constraintsRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const focusMode = selectedNodeId === 'controle-interno'
        ? 'controle-interno'
        : (selectedNodeId === 'orgaos-externos'
            ? 'orgaos-externos'
            : (selectedNodeId === 'cidadao' ? 'cidadao' : null));
    const isFocusMode = Boolean(focusMode);
    const highlightedNodes = new Set(
        focusMode === 'controle-interno'
            ? [
                'controle-interno',
                'secretaria',
                'houve-correcao',
                'fim-prevention',
                'apontamento',
                'materialidade',
                'fim-correction',
                'auditoria',
                'corregedoria',
                'relatorio',
                'fim-final'
            ]
            : focusMode === 'orgaos-externos'
                ? [
                    'orgaos-externos',
                    'apontamento',
                    'materialidade',
                    'auditoria',
                    'corregedoria',
                    'relatorio',
                    'fim-prevention',
                    'fim-correction',
                    'fim-final'
                ]
                : focusMode === 'cidadao'
                    ? [
                        'cidadao',
                        'ouvidoria',
                        'apontamento',
                        'materialidade',
                        'auditoria',
                        'corregedoria',
                        'relatorio',
                        'fim-prevention',
                        'fim-correction',
                        'fim-final'
                    ]
                : []
    );
    const highlightedEdges = new Set(
        focusMode === 'controle-interno'
            ? [
                'controle-interno->secretaria',
                'secretaria->houve-correcao',
                'houve-correcao->fim-prevention',
                'houve-correcao->apontamento',
                'apontamento->materialidade',
                'materialidade->fim-correction',
                'materialidade->auditoria',
                'materialidade->corregedoria',
                'auditoria->corregedoria',
                'relatorio->fim-final',
                'relatorio->controle-interno',
                'relatorio->orgaos-externos'
            ]
            : focusMode === 'orgaos-externos'
                ? [
                    'orgaos-externos->apontamento',
                    'apontamento->materialidade',
                    'materialidade->fim-correction',
                    'materialidade->auditoria',
                    'materialidade->corregedoria',
                    'auditoria->corregedoria',
                    'relatorio->fim-final',
                    'relatorio->controle-interno',
                    'relatorio->orgaos-externos'
                ]
                : focusMode === 'cidadao'
                    ? [
                        'cidadao->ouvidoria',
                        'ouvidoria->apontamento',
                        'apontamento->materialidade',
                        'materialidade->fim-correction',
                        'materialidade->auditoria',
                        'materialidade->corregedoria',
                        'auditoria->corregedoria',
                        'relatorio->fim-final',
                        'relatorio->controle-interno',
                        'relatorio->orgaos-externos'
                    ]
                : []
    );

    // --- SVG Connection Logic ---
    const renderConnections = () => {
        return (
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '1300px', height: '800px', zIndex: 3, pointerEvents: 'none' }}>
                <defs>
                    <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
                    </marker>
                    <marker id="arrowhead-blue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
                    </marker>
                    <marker id="arrowhead-dark" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                        <polygon points="0 0, 8 3, 0 6" fill="#3b82f6" />
                    </marker>
                </defs>

                {macrofluxoEdges.map((edge, i) => {
                    const from = macrofluxoNodes.find(n => n.id === edge.from);
                    const to = macrofluxoNodes.find(n => n.id === edge.to);
                    if (!from || !to) return null;
                    const edgeKey = `${edge.from}->${edge.to}`;
                    const edgeOpacity = isFocusMode && !highlightedEdges.has(edgeKey) ? 0.15 : 1;

                    const fx = from.x + (from.type === 'decision' ? 35 : 70); // Adjusted centers
                    const fy = from.y + (from.type === 'decision' ? 35 : 25);
                    const tx = to.x + (to.type === 'decision' ? 35 : 70);
                    const ty = to.y + (to.type === 'decision' ? 35 : 25);

                    // Materialidade -> Auditoria/Corregedoria (vertical SIM + horizontal bar)
                    if (edge.from === 'materialidade' && (edge.to === 'auditoria' || edge.to === 'corregedoria')) {
                        const centerX = from.x + 35; // Center of diamond
                        const bottomY = from.y + 70; // Bottom tip of diamond
                        const barY = from.y + 120; // Bar below the diamond
                        const auditoria = macrofluxoNodes.find(n => n.id === 'auditoria');
                        const corregedoria = macrofluxoNodes.find(n => n.id === 'corregedoria');
                        const leftX = auditoria ? (auditoria.x + 70) : (centerX - 80);
                        const rightX = corregedoria ? (corregedoria.x + 70) : (centerX + 80);

                        if (edge.to === 'auditoria') {
                            const targetX = leftX;
                            const targetY = auditoria ? auditoria.y : (barY + 40);
                            const labelX = centerX - 10;
                            const labelY = (bottomY + barY) / 2;

                            return (
                                <g key={i}>
                                    {/* Vertical SIM line */}
                                    <path
                                        d={`M ${centerX} ${bottomY} L ${centerX} ${barY}`}
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth="1.5"
                                        markerEnd="url(#arrowhead-blue)"
                                    />
                                    {/* Horizontal bar */}
                                    <path
                                        d={`M ${leftX} ${barY} L ${rightX} ${barY}`}
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth="1.5"
                                    />
                                    {/* Down to Auditoria */}
                                    <path
                                        d={`M ${targetX} ${barY} L ${targetX} ${targetY}`}
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth="1.5"
                                        markerEnd="url(#arrowhead-blue)"
                                    />
                                    {edge.label === 'SIM' && (
                                        <text
                                            x={labelX} y={labelY}
                                            fill="var(--text-main)"
                                            fontSize="10"
                                            fontWeight="700"
                                            textAnchor="end"
                                            style={{ textShadow: '0 0 4px white' }}
                                        >
                                            <tspan dy="-5" dx="0" fill="#10b981">SIM</tspan>
                                        </text>
                                    )}
                                </g>
                            );
                        }

                        const targetX = rightX;
                        const targetY = corregedoria ? corregedoria.y : (barY + 40);
                        return (
                            <g key={i} opacity={edgeOpacity}>
                                {/* Down to Corregedoria */}
                                <path
                                    d={`M ${targetX} ${barY} L ${targetX} ${targetY}`}
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="1.5"
                                    markerEnd="url(#arrowhead-blue)"
                                />
                            </g>
                        );
                    }

                    // Auditoria <-> Corregedoria (bidirectional horizontal)
                    if (edge.from === 'auditoria' && edge.to === 'corregedoria') {
                        const offset = 6;
                        const startX = from.x + 120; // Right edge of auditoria (120px width)
                        const endX = to.x; // Left edge of corregedoria
                        const baseY = from.y + 22; // Mid-height of auditoria (~44px height)
                        const lineY1 = baseY - offset / 2;
                        const lineY2 = baseY + offset / 2;
                        const auditoriaCenterX = from.x + 60;
                        const corregedoriaCenterX = to.x + 60;
                        const bottomY = from.y + 44;
                        const barY = from.y + 85; // sobe mais o barramento
                        const relatorio = macrofluxoNodes.find(n => n.id === 'relatorio');
                        const barMidX = (auditoriaCenterX + corregedoriaCenterX) / 2; // ponto médio entre auditoria e corregedoria
                        const relatorioTopY = relatorio ? relatorio.y : (barY + 60);
                        return (
                            <g key={i}>
                                <path
                                    d={`M ${startX} ${lineY1} L ${endX} ${lineY1}`}
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="1.5"
                                    markerEnd="url(#arrowhead-blue)"
                                />
                                <path
                                    d={`M ${endX} ${lineY2} L ${startX} ${lineY2}`}
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="1.5"
                                    markerEnd="url(#arrowhead-blue)"
                                />
                                {/* Lower convergence bar */}
                                <path
                                    d={`M ${auditoriaCenterX} ${bottomY} L ${auditoriaCenterX} ${barY}`}
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d={`M ${corregedoriaCenterX} ${bottomY} L ${corregedoriaCenterX} ${barY}`}
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d={`M ${auditoriaCenterX} ${barY} L ${corregedoriaCenterX} ${barY}`}
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="1.5"
                                />
                                {/* Bar mid -> Relatório (vertical, alinhado ao centro) */}
                                <path
                                    d={`M ${barMidX} ${barY} L ${barMidX} ${relatorioTopY}`}
                                    fill="none"
                                    stroke="#3b82f6"
                                    strokeWidth="1.5"
                                    markerEnd="url(#arrowhead-blue)"
                                />
                            </g>
                        );
                    }

                    let d = `M ${fx} ${fy} L ${tx} ${ty}`;
                    let color = '#3b82f6';

                    // --- COMPACT PATH LOGIC ---

                    // 1. Execução -> Controle Interno (Right -> Up -> Right)
                    if (edge.from === 'execucao-servicos' && edge.to === 'controle-interno') {
                        // from right side of node
                        const startX = from.x + 140; // width
                        const startY = from.y + 25; // height/2
                        const endX = to.x; // left side of target
                        const endY = to.y + 25;
                        const midX = startX + 20; // small gap
                        d = `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
                    }

                    // 2. Execução -> Órgãos Externos (Right -> Down -> Right)
                    if (edge.from === 'execucao-servicos' && edge.to === 'orgaos-externos') {
                        const startX = from.x + 140;
                        const startY = from.y + 25;
                        const endX = to.x;
                        const endY = to.y + 25;
                        const midX = startX + 20;
                        d = `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;
                    }

                    // Controle Externo -> Apontamento
                    if (edge.from === 'orgaos-externos' && edge.to === 'apontamento') {
                        const startX = from.x + 140; // borda direita dos Órgãos
                        const startY = from.y + 50; // centro vertical dos Órgãos
                        const verticalX = to.x + 70; // centro do Apontamento
                        const endY = to.y + 70; // borda inferior do Apontamento
                        d = `M ${startX} ${startY} L ${verticalX} ${startY} L ${verticalX} ${endY}`;
                        color = '#3b82f6';
                    }

                    // 3. Órgãos Externos -> Controle Interno (Straight Up)
                    if (edge.from === 'orgaos-externos' && edge.to === 'controle-interno') {
                        const midX = from.x + 70; // Center of 140px width
                        // From top of Orgaos to Bottom of Controle
                        // Controle-interno has ~80px total height (header + body)
                        d = `M ${midX} ${from.y} L ${midX} ${to.y + 80}`;
                        color = '#3b82f6';
                    }

                    // 4. Controle Interno -> Secretaria (Horizontal Right)
                    if (edge.from === 'controle-interno' && edge.to === 'secretaria') {
                        const startX = from.x + 140; // Right edge of controle-interno
                        const lineY = from.y + 40; // Mid-height of controle-interno
                        const endX = to.x; // Left edge of secretaria
                        d = `M ${startX} ${lineY} L ${endX} ${lineY}`;
                        color = '#3b82f6'; // Blue
                    }

                    // 5. Secretaria -> Houve Correção (Horizontal Right to Diamond)
                    if (edge.from === 'secretaria' && edge.to === 'houve-correcao') {
                        const startX = from.x + 90; // Right edge of secretaria (90px width)
                        const startY = from.y + 16; // Mid-height of secretaria (~32px total height)
                        const endX = to.x-10; // Left tip of diamond
                        const endY = to.y + 35; // Center of diamond
                        d = `M ${startX} ${startY} L ${endX} ${endY}`;
                        color = '#3b82f6'; // Blue
                    }

                    // Secretaria -> Apontamento (Down, horizontal below losango, then up)
                    if (edge.from === 'secretaria' && edge.to === 'apontamento') {
                        const startX = from.x + 45; // Center of secretaria (90px width)
                        const startY = from.y + 32; // Bottom of secretaria (~32px height)
                        const houve = macrofluxoNodes.find(n => n.id === 'houve-correcao');
                        const losangoBottomY = houve ? (houve.y + 70) : (from.y + 70);
                        const midY = Math.max(losangoBottomY + 80, startY + 80); // >=80px below losango
                        const endX = to.x; // Left edge of apontamento
                        const endY = to.y + 70; // Bottom edge of apontamento
                        d = `M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`;
                        color = '#3b82f6'; // Blue
                    }

                    // Cidadão -> Ouvidoria (Straight vertical)
                    if (edge.from === 'cidadao' && edge.to === 'ouvidoria') {
                        const startX = from.x + 44; // Center of Cidadão (90px width)
                        const startY = from.y + 35; // Bottom of Cidadão (~32px height)
                        const endX = to.x + 40; // Center of Ouvidoria (90px width)
                        const endY = to.y; // Top of Ouvidoria
                        d = `M ${startX} ${startY} L ${endX} ${endY}`;
                        color = '#3b82f6';
                    }

                    // Ouvidoria -> Apontamento (Straight vertical)
                    if (edge.from === 'ouvidoria' && edge.to === 'apontamento') {
                        const startX = from.x + 40; // Center of Ouvidoria (90px width)
                        const startY = from.y + 30; // Bottom of Ouvidoria (~32px height)
                        const endX = to.x + 65; // Center of Apontamento (140px width)
                        const endY = to.y; // Top of Apontamento
                        d = `M ${startX} ${startY} L ${endX} ${endY}`;
                        color = '#3b82f6';
                    }

                    // Apontamento -> Materialidade (Straight horizontal)
                    if (edge.from === 'apontamento' && edge.to === 'materialidade') {
                        const startX = from.x + 120; // Right edge of apontamento
                        const lineY = from.y + 25; // Center of apontamento
                        const endX = to.x-10; // Left tip of diamond
                        d = `M ${startX} ${lineY} L ${endX} ${lineY}`;
                        color = '#3b82f6'; // Blue
                    }

                    // Relatório -> FIM FINAL (Straight vertical, perfeitamente alinhado)
                    if (edge.from === 'relatorio' && edge.to === 'fim-final') {
                        const centerX = from.x + 35; // from.x é o centro visual do relatório (left + translateX(-50%))
                        const startY = from.y + 30; // próximo à borda inferior do relatório
                        const endY = to.y; // borda superior do FIM
                        d = `M ${centerX} ${startY} L ${centerX} ${endY}`;
                        color = '#3b82f6';
                    }

                    // 6. Houve Correção -> FIM (Straight vertical line)
                    if (edge.from === 'houve-correcao' && edge.to === 'fim-prevention') {
                        const startX = from.x + 35; // Center of diamond
                        const startY = from.y; // Bottom tip of diamond
                        const endX = to.x + 30; // Center of fim (60px width)
                        const endY = to.y + 28; // Bottom edge of fim
                        d = `M ${startX} ${startY} L ${endX} ${endY}`;
                        color = '#3b82f6'; // Blue
                    }

                    // 7. Houve Correção -> Apontamento (Straight horizontal line)
                    if (edge.from === 'houve-correcao' && edge.to === 'apontamento') {
                        const startX = from.x + 70; // Right tip of diamond
                        const lineY = from.y + 35; // Center of diamond
                        const endX = to.x; // Left edge of apontamento
                        d = `M ${startX} ${lineY} L ${endX} ${lineY}`;
                        color = '#3b82f6'; // Blue
                    }

                    // Materialidade -> FIM (Straight vertical up)
                    if (edge.from === 'materialidade' && edge.to === 'fim-correction') {
                        const startX = from.x + 35; // Top tip of diamond
                        const startY = from.y; // Top tip of diamond
                        const endX = to.x + 30; // Center of fim (60px width)
                        const endY = to.y + 28; // Bottom edge of fim
                        d = `M ${startX} ${startY} L ${endX} ${endY}`;
                        color = '#3b82f6'; // Blue
                    }
                    // Controle Interno -> Cidadão
                    if (edge.from === 'controle-interno' && edge.to === 'cidadao') {
                        const topY = 20;
                        d = `M ${from.x + 70} ${from.y} L ${from.x + 70} ${topY} L ${to.x - 20} ${topY} L ${to.x - 20} ${to.y + 25}`;
                        color = '#3b82f6';
                        color = '#3b82f6';
                    }

                    // Relatório -> Controle Externo (Irregularidade)
                    if (edge.from === 'relatorio' && edge.to === 'orgaos-externos') {
                        const startX = from.x + 15; // centro do Relatório
                        const startY = from.y + 30; // borda inferior do Relatório
                        const targetCenterX = to.x + 70; // centro horizontal dos Órgãos (140px largura)
                        const bottomEdgeY = to.y + 100; // borda inferior dos Órgãos
                        const verticalStopY = bottomEdgeY + 50; // respiro visual abaixo do bloco
                        d = `M ${startX} ${startY} L ${startX} ${verticalStopY} L ${targetCenterX} ${verticalStopY} L ${targetCenterX} ${bottomEdgeY}`;
                        color = '#3b82f6';
                    }

                    // Relatório -> Controle Interno (Recomendação)
                    if (edge.from === 'relatorio' && edge.to === 'controle-interno') {
                        const startX = from.x + 100; // borda direita do Relatório (fit-content + padding)
                        const startY = from.y + 20; // centro vertical do Relatório
                        const elbowX = startX + 90; // pequeno avanço para criar o “cotovelo”
                        const topY = 30; // faixa superior para retorno
                        const targetCenterX = to.x + 70; // centro do Controle Interno
                        const targetTopY = to.y; // borda superior do Controle Interno
                        d = `M ${startX} ${startY} L ${elbowX} ${startY} L ${elbowX} ${topY} L ${targetCenterX} ${topY} L ${targetCenterX} ${targetTopY}`;
                        color = '#3b82f6';
                    }

                    if (edge.label === 'SIM' || edge.label === 'NÃO') {
                        // Adjust slightly
                    }

                    let labelX = (fx + tx) / 2;
                    let labelY = (fy + ty) / 2;
                    let textAnchor = "middle";
                    let labelBg = "white";

                    // Custom Label Positioning
                    if (edge.label === 'Comunica') {
                        const midX = from.x + 70; // Center of 140px width
                        labelX = midX + 12; // Shift right
                        labelY = (from.y + (to.y + 80)) / 2;
                        textAnchor = "start";
                        labelBg = "transparent"; // Clean look
                    }

                    if (edge.label === 'Recomendações / Questionamentos') {
                        // Position above the horizontal line
                        const lineY = from.y + 40;
                        labelX = (from.x + 140 + to.x) / 2;
                        labelY = lineY - 15; // Above line
                        textAnchor = "middle";
                        labelBg = "transparent";
                    }

                    if (edge.label === 'Relatório / Julgamento' && edge.from === 'orgaos-externos' && edge.to === 'apontamento') {
                        const startX = from.x + 140;
                        const startY = from.y + 50;
                        const verticalX = to.x + 70;
                        labelX = (startX + verticalX) / 2;
                        labelY = startY - 12;
                        textAnchor = "middle";
                        labelBg = "transparent";
                    }

                    if (edge.label === 'Denúncia / Averiguação Preliminar' && edge.from === 'secretaria' && edge.to === 'apontamento') {
                        const startX = from.x + 45;
                        const houve = macrofluxoNodes.find(n => n.id === 'houve-correcao');
                        const losangoBottomY = houve ? (houve.y + 70) : (from.y + 70);
                        const midY = Math.max(losangoBottomY + 80, from.y + 32 + 80);
                        const endX = to.x;
                        labelX = (startX + endX) / 2;
                        labelY = midY - 12;
                        textAnchor = "middle";
                        labelBg = "transparent";
                    }

                    if (edge.label === 'SIM' && edge.from === 'houve-correcao' && edge.to === 'fim-prevention') {
                        // Place label beside the line
                        const startX = from.x + 35;
                        const startY = from.y + 70;
                        const endX = to.x + 30;
                        const endY = to.y + 28;
                        labelX = (startX + endX) / 2 - 10;
                        labelY = (startY + endY) / 2 - 6;
                        textAnchor = "end";
                        labelBg = "transparent";
                    }

                    if (edge.label === 'NÃO' && edge.from === 'materialidade' && edge.to === 'fim-correction') {
                        const startX = from.x + 35;
                        const startY = from.y;
                        const endX = to.x + 30;
                        const endY = to.y + 28;
                        labelX = startX - 10;
                        labelY = (startY + endY) / 2;
                        textAnchor = "end";
                        labelBg = "transparent";
                    }

                    if (edge.label === 'NÃO' && edge.from === 'houve-correcao' && edge.to === 'apontamento') {
                        const startX = from.x + 70;
                        const lineY = from.y + 35;
                        const endX = to.x;
                        labelX = (startX + endX) / 2;
                        labelY = lineY - 8;
                        textAnchor = "middle";
                        labelBg = "transparent";
                    }

                    if (edge.label === 'Regular sem recomendação' && edge.from === 'relatorio' && edge.to === 'fim-final') {
                        const startX = from.x + 35;
                        const startY = from.y + 30;
                        const endX = to.x + 30;
                        const endY = to.y;
                        labelX = startX + 14; // afastamento lateral maior para não colar na linha
                        labelY = (startY + endY) / 2;
                        textAnchor = "start";
                        labelBg = "transparent";
                    }

                    if (edge.label === 'Irregularidade' && edge.from === 'relatorio' && edge.to === 'orgaos-externos') {
                        const startX = from.x;
                        const startY = from.y + 40;
                        const targetCenterX = to.x + 70;
                        const bottomEdgeY = to.y + 100;
                        const verticalStopY = bottomEdgeY + 50;
                        labelX = (startX + targetCenterX) / 2;
                        labelY = verticalStopY - 12;
                        textAnchor = "middle";
                        labelBg = "transparent";
                    }

                    if (edge.label === 'Recomendação' && edge.from === 'relatorio' && edge.to === 'controle-interno') {
                        const startX = from.x + 15;
                        const topY = 60;
                        const targetCenterX = to.x + 70;
                        labelX = (startX + targetCenterX) / 2;
                        labelY = topY - 12;
                        textAnchor = "middle";
                        labelBg = "transparent";
                    }

                    const markerEnd = 'url(#arrowhead-blue)';

                    return (
                        <g key={i} opacity={edgeOpacity}>
                            <path
                                d={d}
                                fill="none"
                                stroke={color}
                                strokeWidth="1.5"
                                markerEnd={markerEnd}
                            />
                            {edge.label && edge.label !== 'Recomendações / Questionamentos' && edge.label !== 'Regular sem recomendação' && (
                                <text
                                    x={labelX} y={labelY}
                                    fill="var(--text-main)"
                                    fontSize="10"
                                    fontWeight="700"
                                    textAnchor={textAnchor}
                                    style={{ background: labelBg, textShadow: '0 0 4px white' }}
                                >
                                    <tspan dy="-5" dx="0" fill={edge.label === 'NÃO' ? '#ef4444' : edge.label === 'SIM' ? '#10b981' : 'currentColor'}>{edge.label}</tspan>
                                </text>
                            )}
                            {edge.label === 'Recomendações / Questionamentos' && (
                                <text
                                    x={labelX} y={labelY}
                                    fill="var(--text-main)"
                                    fontSize="9"
                                    fontWeight="700"
                                    textAnchor={textAnchor}
                                    style={{ textShadow: '0 0 4px white' }}
                                >
                                    <tspan x={labelX} dy="0">Recomendações /</tspan>
                                    <tspan x={labelX} dy="12">Questionamentos</tspan>
                                </text>
                            )}
                            {edge.label === 'Regular sem recomendação' && (
                                <text
                                    x={labelX} y={labelY}
                                    fill="var(--text-main)"
                                    fontSize="9"
                                    fontWeight="700"
                                    textAnchor={textAnchor}
                                    style={{ textShadow: '0 0 4px white' }}
                                >
                                    <tspan x={labelX} dy="0">Regular sem</tspan>
                                    <tspan x={labelX} dy="12">recomendações</tspan>
                                </text>
                            )}
                        </g>
                    )
                })}
            </svg>
        )
    }

    // --- COMPACT NODE RENDERING ---
    const renderNode = (node) => {
        const isSelected = selectedNodeId === node.id;
        const nodeOpacity = isFocusMode && !highlightedNodes.has(node.id) ? 0.25 : 1;

        let style = {
            position: 'absolute',
            left: node.x, top: node.y,
            cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center',
            padding: '8px',
            fontSize: '0.75rem', fontWeight: 600,
            transition: 'all 0.2s ease',
            zIndex: 2,
            lineHeight: 1.2,
            opacity: nodeOpacity
        };

        if (node.type === 'decision') {
            const labelLines = node.label.split('\n');
            return (
                <motion.div
                    key={node.id}
                    onClick={(e) => { e.stopPropagation(); onNodeSelect(node); }}
                    onDoubleClick={(e) => { e.stopPropagation(); onNodeOpen(node); }}
                    whileHover={{ scale: 1.1 }}
                    style={{
                        ...style,
                        width: '70px', height: '70px',
                        background: '#94a3b8',
                        transform: 'rotate(45deg)',
                        border: isSelected ? '3px solid var(--text-main)' : '2px solid white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                >
                    <div style={{
                        transform: 'rotate(-45deg)',
                        transformOrigin: 'center',
                        writingMode: 'horizontal-tb',
                        width: '90px',
                        fontSize: '0.65rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2px',
                        textAlign: 'center'
                    }}>
                        {labelLines.map((line, i) => <div key={i}>{line}</div>)}
                    </div>
                </motion.div>
            )
        }

        if (node.type === 'end-success') {
            return (
                <motion.div
                    key={node.id}
                    onClick={(e) => { e.stopPropagation(); onNodeSelect(node); }}
                    onDoubleClick={(e) => { e.stopPropagation(); onNodeOpen(node); }}
                    style={{
                        ...style,
                        background: 'white',
                        border: '1px solid #10b981',
                        borderRadius: '16px',
                        color: '#10b981',
                        width: '60px', height: '28px',
                        padding: '4px'
                    }}
                >
                    <div className="flex items-center gap-1"><Check size={12} /> FIM</div>
                </motion.div>
            )
        }

        if (node.id === 'controle-interno') {
            return (
                <motion.div
                    key={node.id}
                    onClick={(e) => { e.stopPropagation(); onNodeSelect(node); }}
                    onDoubleClick={(e) => { e.stopPropagation(); onNodeOpen(node); }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                        ...style,
                        width: '140px',
                        background: '#fef3c7', // Light yellow body
                        border: isSelected ? '2px solid var(--text-main)' : '1px solid #fcd34d',
                        borderRadius: '12px',
                        padding: 0,
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        alignItems: 'stretch' // Fill width
                    }}
                >
                    {/* Header */}
                    <div style={{ background: '#f59e0b', color: '#1e293b', padding: '6px 8px', fontWeight: 700, fontSize: '0.75rem' }}>
                        {node.label}
                    </div>
                    {/* Body */}
                    <div style={{ padding: '6px 10px', display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-start' }}>
                        {node.subLabels.map((sl, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.7rem', fontWeight: 600, color: '#334155' }}>
                                <div style={{ background: '#22c55e', borderRadius: '50%', padding: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Check size={9} color="white" strokeWidth={4} />
                                </div>
                                {sl.replace('✔ ', '')}
                            </div>
                        ))}
                    </div>
                </motion.div>
            )
        }

        if (node.id === 'secretaria' || node.id === 'cidadao') {
            return (
                <motion.div
                    key={node.id}
                    onClick={(e) => { e.stopPropagation(); onNodeSelect(node); }}
                    onDoubleClick={(e) => { e.stopPropagation(); onNodeOpen(node); }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                        ...style,
                        width: '90px', // Slightly smaller for more spacing
                        background: '#93c5fd', // Lighter blue
                        border: isSelected ? '2px solid var(--text-main)' : '2px solid #3b82f6', // Darker blue border
                        borderRadius: '12px',
                        padding: '6px',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        color: '#0f172a'
                    }}
                >
                    <div style={{ fontWeight: 800, fontSize: '0.8rem' }}>{node.label}</div>
                </motion.div>
            )
        }

        if (node.id === 'orgaos-externos') {
            return (
                <motion.div
                    key={node.id}
                    onClick={(e) => { e.stopPropagation(); onNodeSelect(node); }}
                    onDoubleClick={(e) => { e.stopPropagation(); onNodeOpen(node); }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                        ...style,
                        width: '140px',
                        background: '#bfdbfe', // Light blue body
                        border: isSelected ? '2px solid var(--text-main)' : '1px solid #2563eb', // Blue border
                        borderRadius: '12px',
                        padding: 0,
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        alignItems: 'stretch',
                        display: 'flex', flexDirection: 'column'
                    }}
                >
                    {/* Header */}
                    <div style={{
                        background: '#1d70b8', // Header Blue 
                        color: 'white',
                        padding: '6px 8px',
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        lineHeight: 1.2,
                        borderBottom: '1px solid #2563eb'
                    }}>
                        {node.label}
                    </div>
                    {/* Body Rows */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {node.subLabels.map((sl, i) => (
                            <div key={i} style={{
                                padding: '6px 8px',
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                color: '#1e3a8a',
                                borderBottom: i === 0 ? '1px solid #93c5fd' : 'none', // Divider between items
                                textAlign: 'left',
                                lineHeight: 1.2
                            }}>
                                {sl}
                            </div>
                        ))}
                    </div>
                </motion.div>
            )
        }

        // Default Boxes
        let bg = 'white';
        let border = '1px solid #cbd5e1';
        let color = 'var(--text-main)';
        let width = '140px';
        let height = 'auto';
        let minHeight = '50px';

        if (node.type === 'prevention-start') { bg = '#dbeafe'; border = '2px solid #3b82f6'; }
        if (node.type === 'prevention-highlight') { bg = '#fef3c7'; border = '2px solid #f59e0b'; width = '160px'; }
        if (node.type === 'external') { bg = '#1e3a8a'; color = 'white'; border = '2px solid #1e3a8a'; width = '160px'; }
        if (node.type === 'correction-highlight' || node.id === 'ouvidoria') {
            bg = '#ffedd5';
            border = '2px solid #f97316';
            width = '120px';
            minHeight = '44px';
        }
        if (node.id === 'relatorio') {
            width = 'fit-content';
            minHeight = 'auto';
            style = { 
                ...style, 
                padding: '6px 10px',
                left: node.x,
                transform: 'translateX(-50%)' // usa node.x como centro
            };
        }
        if (node.type === 'input-correction') {
            width = 'fit-content';
            minHeight = 'auto';
            style = { ...style, padding: '6px 10px' };
        }

        return (
            <motion.div
                key={node.id}
                onClick={(e) => { e.stopPropagation(); onNodeSelect(node); }}
                onDoubleClick={(e) => { e.stopPropagation(); onNodeOpen(node); }}
                whileHover={{ scale: 1.05 }}
                animate={{
                    scale: isSelected ? 1.05 : 1,
                    ring: isSelected ? '2px' : '0px'
                }}
                style={{
                    ...style,
                    width, minHeight,
                    background: bg,
                    border: isSelected ? `2px solid var(--text-main)` : border,
                    color: color,
                    borderRadius: '6px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}
            >
                {node.label}
                {node.subLabels && (
                    <div style={{ marginTop: '4px', fontSize: '0.65rem', display: 'flex', flexDirection: 'column', gap: '2px', opacity: 0.9 }}>
                        {node.subLabels.map((sl, i) => <span key={i}>{sl}</span>)}
                    </div>
                )}
            </motion.div>
        )
    }

    return (
        <div
            ref={constraintsRef}
            onClick={() => onNodeSelect(null)}
            style={{
                width: '100%', height: '100%',
                overflow: 'hidden',
                background: '#f8fafc',
                position: 'relative',
                cursor: 'grab',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}
        >
            <motion.div
                drag
                dragConstraints={{ left: -500, right: 0, top: -500, bottom: 0 }}
                style={{ width: '1300px', height: '800px', position: 'relative', x: position.x, y: position.y }}
            >
                {/* --- COMPACT ZONES --- */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '700px', height: '100%', background: '#eff6ff', borderRight: '2px dashed #bfdbfe' }}>
                <div style={{ position: 'absolute', top: 2, left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: 'white', padding: '2px 12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.8rem' }}>PREVENÇÃO</div>
                </div>
                <div style={{ position: 'absolute', top: 0, left: '700px', width: '600px', height: '100%', background: '#fffbeb' }}>
                <div style={{ position: 'absolute', top: 2, left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: 'white', padding: '2px 12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.8rem' }}>CORREÇÃO</div>
                </div>

                {renderConnections()}
                {macrofluxoNodes.map(node => renderNode(node))}

            </motion.div>
        </div>
    );
}
