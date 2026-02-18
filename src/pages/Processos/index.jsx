import React, { useMemo, useState } from 'react';
import { macrofluxoNodes } from '../Macrofluxo/data';

function normalizeType(type) {
    if (Array.isArray(type)) {
        return type;
    }

    if (typeof type === 'string' && type.trim()) {
        return [type.trim()];
    }

    return ['Sem tipo'];
}

function collectProcessos() {
    return macrofluxoNodes
        .flatMap((node) => {
            const bloco = node?.details?.title || node?.label || 'Sem bloco';
            const pops = node?.details?.pops || [];

            return pops.map((pop) => ({
                ...pop,
                bloco
            }));
        })
        .filter((pop) => pop?.label && pop?.url)
        .map((pop) => ({
            label: pop.label,
            url: pop.url,
            types: normalizeType(pop.type),
            bloco: pop.bloco
        }));
}

function MultiSelectFilter({ id, label, options, selectedValues, onToggle, onClear }) {
    const [isOpen, setIsOpen] = useState(false);

    const labelValue = selectedValues.length === 0
        ? 'Todos'
        : selectedValues.length === 1
            ? selectedValues[0]
            : `${selectedValues.length} selecionados`;

    return (
        <div style={{ width: '100%', maxWidth: '420px', position: 'relative' }}>
            <label htmlFor={id} style={{ color: 'var(--text-main)', fontWeight: 600 }}>
                {label}
            </label>

            <button
                id={id}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                style={{
                    marginTop: '6px',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 12px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    color: 'var(--text-main)',
                    background: 'var(--bg-surface)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <span>{labelValue}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        left: 0,
                        right: 0,
                        zIndex: 20,
                        border: '1px solid var(--border-light)',
                        borderRadius: '8px',
                        background: 'var(--bg-surface)',
                        boxShadow: 'var(--shadow-md)',
                        maxHeight: '240px',
                        overflowY: 'auto',
                        padding: '8px'
                    }}
                >
                    <button
                        type="button"
                        className="btn"
                        onClick={onClear}
                        style={{
                            width: '100%',
                            justifyContent: 'flex-start',
                            padding: '8px 10px',
                            marginBottom: '6px',
                            border: '1px solid var(--border-light)',
                            borderRadius: '8px',
                            background: selectedValues.length === 0 ? 'var(--col-primary-subtle)' : 'var(--bg-surface)',
                            color: selectedValues.length === 0 ? 'var(--col-primary)' : 'var(--text-body)'
                        }}
                    >
                        Todos
                    </button>

                    {options.map((option) => (
                        <label
                            key={option}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '7px 8px',
                                borderRadius: '6px',
                                cursor: 'pointer'
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={selectedValues.includes(option)}
                                onChange={() => onToggle(option)}
                            />
                            <span style={{ color: 'var(--text-main)', fontSize: '0.92rem' }}>{option}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export function Processos() {
    const processos = useMemo(() => collectProcessos(), []);
    const tipos = useMemo(() => {
        const allTypes = processos.flatMap((processo) => processo.types);
        return [...new Set(allTypes)].sort((a, b) => a.localeCompare(b, 'pt-BR'));
    }, [processos]);
    const blocos = useMemo(() => {
        const allBlocos = processos.map((processo) => processo.bloco);
        return [...new Set(allBlocos)].sort((a, b) => a.localeCompare(b, 'pt-BR'));
    }, [processos]);

    const [filtrosTipo, setFiltrosTipo] = useState([]);
    const [filtrosBloco, setFiltrosBloco] = useState([]);

    function toggleTipo(tipo) {
        setFiltrosTipo((prev) =>
            prev.includes(tipo) ? prev.filter((item) => item !== tipo) : [...prev, tipo]
        );
    }

    function toggleBloco(bloco) {
        setFiltrosBloco((prev) =>
            prev.includes(bloco) ? prev.filter((item) => item !== bloco) : [...prev, bloco]
        );
    }

    const processosFiltrados = useMemo(() => {
        return processos
            .filter((processo) => {
                const tipoOk = filtrosTipo.length === 0 || processo.types.some((tipo) => filtrosTipo.includes(tipo));
                const blocoOk = filtrosBloco.length === 0 || filtrosBloco.includes(processo.bloco);

                return tipoOk && blocoOk;
            })
            .sort((a, b) =>
                a.label.localeCompare(b.label, 'pt-BR', {
                    numeric: true,
                    sensitivity: 'base'
                })
            );
    }, [processos, filtrosTipo, filtrosBloco]);

    return (
        <section className="container" style={{ padding: '48px 24px 80px' }}>
            <div style={{ marginBottom: '24px' }}>
                <h1 className="h2" style={{ marginBottom: '8px' }}>Processos (POPs)</h1>
                <p className="text-body">
                    Consulte todos os POPs com link e filtre por tipo de processo.
                </p>
            </div>

            <div
                className="card"
                style={{
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    alignItems: 'flex-start'
                }}
            >
                <MultiSelectFilter
                    id="filtro-tipo"
                    label="Filtrar por tipo"
                    options={tipos}
                    selectedValues={filtrosTipo}
                    onToggle={toggleTipo}
                    onClear={() => setFiltrosTipo([])}
                />
                <MultiSelectFilter
                    id="filtro-bloco"
                    label="Filtrar por bloco"
                    options={blocos}
                    selectedValues={filtrosBloco}
                    onToggle={toggleBloco}
                    onClear={() => setFiltrosBloco([])}
                />
            </div>

            <div className="card">
                <div style={{ marginBottom: '14px', color: 'var(--text-body)', fontSize: '0.95rem' }}>
                    {processosFiltrados.length} processo(s) encontrado(s)
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                    {processosFiltrados.map((processo) => (
                        <li key={`${processo.label}-${processo.url}`}>
                            <a
                                href={processo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '12px 14px',
                                    border: '1px solid var(--border-light)',
                                    borderRadius: '10px',
                                    background: 'var(--bg-surface)'
                                }}
                            >
                                <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{processo.label}</span>
                                <span style={{ color: 'var(--col-primary)', fontSize: '0.85rem' }}>
                                    {processo.types.join(' • ')}
                                </span>
                            </a>
                            <div style={{ marginTop: '6px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                Bloco: {processo.bloco}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

