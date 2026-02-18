import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ArrowRight, Layers } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function DetailPanel({ hidden, node, onClose }) {
    if (!node) return null;
    const defaultTypes = useMemo(() => {
        if (node?.id === 'orgaos-externos') {
            return ['Tribunal de Contas', 'Ministério Público'];
        }
        if (node?.id === 'controle-interno') {
            return ['Conformidade', 'Execução', 'Transparência'];
        }
        if (node?.id === 'auditoria') {
            return ['Auditoria'];
        }
        if (node?.id === 'corregedoria') {
            return ['Corregedoria'];
        }
        if (node?.id === 'ouvidoria') {
            return ['Ouvidoria'];
        }
        return ['Conformidade', 'Execução', 'Tribunal de Contas'];
    }, [node?.id]);
    const [selectedTypes, setSelectedTypes] = useState(defaultTypes);
    useEffect(() => {
        setSelectedTypes(defaultTypes);
    }, [node?.id]);
    const filteredPops = useMemo(() => {
        if (!node.details?.pops?.length) return [];
        if (!selectedTypes.length) return [];
        return node.details.pops.filter((pop) => {
            const types = Array.isArray(pop?.type) ? pop.type : (pop?.type ? [pop.type] : []);
            return types.some((t) => selectedTypes.includes(t));
        });
    }, [node, selectedTypes]);

    return (
        <AnimatePresence>
            {!hidden && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="glass-panel"
                    style={{
                        position: 'absolute',
                        top: 0, right: 0,
                        width: '35%', height: '100%',
                        borderLeft: '1px solid var(--border-light)',
                        padding: '24px',
                        zIndex: 20,
                        background: 'rgba(255,255,255,0.95)',
                        overflowY: 'auto'
                    }}
                >
                    {/* Header */}
                    <div className="flex justify-between items-start" style={{ marginBottom: '32px' }}>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
                                {node.type === 'prevention' ? 'Eixo Prevenção' : node.type === 'correction' ? 'Eixo Correção' : 'Entrada'}
                            </div>
                            <h2 className="h3" style={{ fontSize: '1.75rem' }}>{node.details.title}</h2>
                        </div>
                        <button onClick={onClose} style={{ padding: '8px', borderRadius: '50%', background: 'var(--bg-app)' }}>
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content */}
                    <p className="text-body" style={{ marginBottom: '32px', fontSize: '1.1rem' }}>
                        {node.details.description}
                    </p>

                    <div style={{ marginBottom: '32px' }}>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Layers size={16} /> Tipo
                        </h4>
                        <div className="flex flex-col gap-2">
                            {(
                                node.id === 'orgaos-externos'
                                    ? ['Tribunal de Contas', 'Ministério Público']
                                    : node.id === 'controle-interno'
                                    ? ['Conformidade', 'Execução', 'Transparência']
                                        : node.id === 'auditoria'
                                            ? ['Auditoria']
                                            : node.id === 'corregedoria'
                                                ? ['Corregedoria']
                                                : node.id === 'ouvidoria'
                                                    ? ['Ouvidoria']
                                                    : ['Conformidade', 'Execução', 'Tribunal de Contas']
                            ).map((tipo) => {
                                const checked = selectedTypes.includes(tipo);
                                return (
                                    <label key={tipo} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                                        <input
                                            type="checkbox"
                                            checked={checked}
                                            onChange={() => {
                                                setSelectedTypes((prev) => (
                                                    checked ? prev.filter((t) => t !== tipo) : [...prev, tipo]
                                                ));
                                            }}
                                        />
                                        {tipo}
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FileText size={16} /> Processos Relacionados (POPs)
                        </h4>
                        <div className="flex flex-col gap-2">
                            {filteredPops.map((pop, i) => {
                                const isObject = pop && typeof pop === 'object';
                                const isLink = isObject && pop.url;
                                const label = isObject ? pop.label : pop;
                                const commonStyle = {
                                    background: 'var(--bg-app)',
                                    padding: '6px 12px',
                                    borderRadius: '16px',
                                    fontSize: '0.8rem',
                                    fontWeight: 500,
                                    border: '1px solid var(--border-light)',
                                    display: 'inline-block'
                                };

                                return isLink ? (
                                    <a
                                        key={i}
                                        href={pop.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ ...commonStyle, color: 'var(--col-primary)', textDecoration: 'none' }}
                                    >
                                        {label}
                                    </a>
                                ) : (
                                    <span key={i} style={commonStyle}>
                                        {label}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <Button variant="primary" style={{ width: '100%' }}>Ver Documentação Completa</Button>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
