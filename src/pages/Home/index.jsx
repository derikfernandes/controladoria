import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Pen, Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Home() {
    const [showMission, setShowMission] = useState(false);

    return (
        <div>
            {/* Hero Section */}
            <section className="container" style={{ padding: '80px 24px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="flex flex-col gap-8" style={{ flex: 1, paddingRight: '40px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div 
                            style={{ 
                                marginBottom: '32px', 
                                maxWidth: '600px',
                                cursor: 'pointer',
                                minHeight: '200px'
                            }}
                            onClick={() => setShowMission(!showMission)}
                        >
                            <AnimatePresence mode="wait">
                                {!showMission ? (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                        transition={{ 
                                            duration: 0.5,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                    >
                                        <h1 
                                            className="h1" 
                                            style={{ 
                                                marginBottom: '24px',
                                                transition: 'color 0.2s'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = 'var(--col-primary)'}
                                            onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
                                        >
                                            Transparência, Integridade, Eficiência e Efetividade em forma de sistema.
                                        </h1>
                                        <p 
                                            className="text-body" 
                                            style={{ 
                                                fontSize: '1.25rem',
                                                transition: 'color 0.2s'
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = 'var(--col-primary)'}
                                            onMouseLeave={(e) => e.target.style.color = 'var(--text-body)'}
                                        >
                                            A Missão da Controladoria é controlar os atos administrativos e a efetividade do serviço público por meio de ações preventivas e corretivas, e oferecer suporte qualificado à tomada de decisão.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="mission"
                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                        transition={{ 
                                            duration: 0.5,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                        style={{
                                            padding: '32px',
                                            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                                            borderRadius: '20px',
                                            border: '2px solid #bfdbfe',
                                            boxShadow: '0 8px 16px -4px rgba(59, 130, 246, 0.2)'
                                        }}
                                    >
                                        <motion.div 
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}
                                        >
                                            <Pen size={24} color="var(--col-primary)" strokeWidth={2.5} />
                                            <h3 style={{ 
                                                fontSize: '1.3rem', 
                                                fontWeight: 700, 
                                                color: 'var(--col-primary)',
                                                margin: 0
                                            }}>
                                                Missão da Controladoria
                                            </h3>
                                        </motion.div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                            <motion.div 
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3, duration: 0.4 }}
                                                style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                                            >
                                                <div style={{
                                                    minWidth: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    background: 'var(--col-primary)',
                                                    marginTop: '8px',
                                                    flexShrink: 0,
                                                    boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
                                                }} />
                                                <div>
                                                    <strong style={{ color: 'var(--col-primary)', fontSize: '1.1rem', display: 'block', marginBottom: '4px' }}>O que:</strong>
                                                    <span style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.6' }}>
                                                        Controlar os <strong>Atos administrativos</strong> e a <strong>Efetividade</strong> do serviço público.
                                                    </span>
                                                </div>
                                            </motion.div>
                                            <motion.div 
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4, duration: 0.4 }}
                                                style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                                            >
                                                <div style={{
                                                    minWidth: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    background: 'var(--col-primary)',
                                                    marginTop: '8px',
                                                    flexShrink: 0,
                                                    boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
                                                }} />
                                                <div>
                                                    <strong style={{ color: 'var(--col-primary)', fontSize: '1.1rem', display: 'block', marginBottom: '4px' }}>Como:</strong>
                                                    <span style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.6' }}>
                                                        Através de ações de <strong>prevenção</strong> e <strong>correção</strong>.
                                                    </span>
                                                </div>
                                            </motion.div>
                                            <motion.div 
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5, duration: 0.4 }}
                                                style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                                            >
                                                <div style={{
                                                    minWidth: '8px',
                                                    height: '8px',
                                                    borderRadius: '50%',
                                                    background: 'var(--col-primary)',
                                                    marginTop: '8px',
                                                    flexShrink: 0,
                                                    boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
                                                }} />
                                                <div>
                                                    <strong style={{ color: 'var(--col-primary)', fontSize: '1.1rem', display: 'block', marginBottom: '4px' }}>Para que:</strong>
                                                    <span style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.6' }}>
                                                        Para <strong>suporte qualificado</strong> à tomada de decisão.
                                                    </span>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="flex gap-4">
                            <Link to="/macrofluxo">
                                <Button variant="primary" icon={ArrowRight}>Explorar Macrofluxo</Button>
                            </Link>
                            <Link to="/produto">
                                <Button variant="secondary">Ver Carteira de Produtos</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Macrofluxo Teaser */}
                <div style={{ flex: 1, position: 'relative', height: '500px' }}>
                    <MacrofluxoTeaser />
                </div>
            </section>

            {/* Stats Section */}
            <section className="container" style={{ padding: '100px 24px' }}>
                <div className="card flex items-center justify-between" style={{ background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-app) 100%)' }}>
                    <div style={{ padding: '40px' }}>
                        <h2 className="h2" style={{ marginBottom: '16px' }}>Impacto em números</h2>
                        <p className="text-body">Acompanhe a performance do sistema de controle em tempo real.</p>
                    </div>
                    <div className="flex gap-8" style={{ padding: '40px' }}>
                        <Stat number="98%" label="Prazos Atendidos" />
                        <Stat number="1.2k" label="Manifestações" />
                        <Stat number="14" label="Ciclos de Auditoria" />
                    </div>
                </div>
            </section>
        </div>
    );
}

function Stat({ number, label }) {
    return (
        <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--col-primary)' }}>{number}</div>
            <div className="text-body text-sm uppercase tracking-wider">{label}</div>
        </div>
    )
}

function MacrofluxoTeaser() {
    const [showOrganograma, setShowOrganograma] = useState(false);
    const [showSistemaControle, setShowSistemaControle] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (!showOrganograma && !showSistemaControle) {
            // Primeiro clique: mostra organograma
            setShowOrganograma(true);
        } else if (showOrganograma && !showSistemaControle) {
            // Segundo clique: mostra sistema de controle
            setShowSistemaControle(true);
        } else {
            // Terceiro clique: volta ao início
            setShowOrganograma(false);
            setShowSistemaControle(false);
        }
    };

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                // Reset ao sair do mouse
                setShowOrganograma(false);
                setShowSistemaControle(false);
                setIsHovered(false);
            }}
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
                width: '100%',
                height: '100%',
                borderRadius: '24px',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                cursor: 'pointer',
                backgroundImage: 'linear-gradient(to right, var(--col-primary-subtle) 0%, var(--col-primary-subtle) 50%, var(--col-correction-subtle) 50%, var(--col-correction-subtle) 100%)',
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'stretch'
            }}
        >
            {/* Metade Prevenção */}
            <motion.div
                animate={{
                    flex: isHovered ? [1, 2.0, 1.8] : 1,
                }}
                transition={{
                    duration: 2,
                    times: [0, 0.7, 1],
                    ease: "easeInOut"
                }}
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '32px',
                    color: 'var(--col-primary)',
                    position: 'relative',
                    zIndex: 1,
                    background: 'var(--col-primary-subtle)'
                }}
            >
                <div style={{
                    fontSize: '1rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    opacity: 0.8
                }}>
                    Eixo de
                </div>
                <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginTop: '8px'
                }}>
                    Prevenção
                </div>
                <p className="text-body" style={{ marginTop: '12px', textAlign: 'center', maxWidth: '220px' }}>
                    Monitoramento, orientação e recomendação para antecipar riscos e evitar falhas
                </p>
            </motion.div>

            {/* Metade Correção */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '32px',
                    color: 'var(--col-correction)',
                    position: 'relative',
                    zIndex: 1,
                    background: 'var(--col-correction-subtle)'
                }}
            >
                <div style={{
                    fontSize: '1rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    opacity: 0.8
                }}>
                    Eixo de
                </div>
                <div style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    marginTop: '8px'
                }}>
                    Correção
                </div>
                <p className="text-body" style={{ marginTop: '12px', textAlign: 'center', maxWidth: '220px' }}>
                    Auditorias, responsabilização e correção de rotas quando algo sai do previsto.
                </p>
            </div>

            {/* Linha divisória */}
            <motion.div
                animate={{
                    left: isHovered ? ['50%', '66.7%', '64.3%'] : '50%', // Calculado baseado na proporção: quando Prevenção flex: 2.0 → 66.7%, quando flex: 1.8 → 64.3%
                }}
                transition={{
                    duration: 2,
                    times: [0, 0.7, 1],
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'linear-gradient(to bottom, transparent, rgba(15,23,42,0.25), transparent)',
                    zIndex: 1
                }}
            />

            {/* Overlay do organograma - aparece no clique */}
            <motion.div
                animate={{ opacity: (showOrganograma || showSistemaControle) ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(15,23,42,0.72)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '32px',
                    zIndex: 2,
                    pointerEvents: (showOrganograma || showSistemaControle) ? 'auto' : 'none',
                    backdropFilter: 'blur(6px)'
                }}
            >
                <AnimatePresence mode="wait">
                    {!showSistemaControle ? (
                        <motion.div
                            key="organograma-institucional"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                                <div style={{
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    opacity: 0.75
                                }}>
                                    Organograma institucional
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '8px' }}>
                                    Controladoria Geral do Município
                                </div>
                                <div style={{ marginTop: '4px', fontSize: '0.8rem', opacity: 0.75 }}>
                                    Estrutura hierárquica da Controladoria
                                </div>
                            </div>

                {/* Organograma simplificado */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '600px',
                    position: 'relative'
                }}>
                    {/* Nível diretorias - usado como referência para centralização */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                        gap: '16px',
                        width: '100%',
                        position: 'relative',
                        paddingTop: '120px',
                        marginBottom: '0'
                    }}>
                        {/* Linha horizontal ligando as duas diretorias */}
                        <div style={{
                            position: 'absolute',
                            top: '112px',
                            left: '8%',
                            right: '8%',
                            height: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none'
                        }}>
                            <div style={{
                                height: '4px',
                                width: '100%',
                                background: 'linear-gradient(to right, rgba(148,163,184,0.6), rgba(148,163,184,0.95), rgba(148,163,184,0.6))'
                            }} />
                        </div>

                        <OrganogramaBox titulo="Diretor de Controle Interno" itens={[
                            
                        ]} cor="var(--col-primary)" />
                        <OrganogramaBox titulo="Diretor de Transparência e Auditoria" itens={[
                            
                        ]} cor="var(--col-correction)" />
                    </div>

                    {/* Controlador Geral - Centralizado sobre a linha dos diretores */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        zIndex: 10
                    }}>
                        <div style={{
                            padding: '12px 24px',
                            borderRadius: '999px',
                            border: '1px solid rgba(148,163,184,0.6)',
                            background: 'rgba(15,23,42,0.9)',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            boxShadow: '0 0 0 1px rgba(15,23,42,0.8)',
                            textAlign: 'center',
                            lineHeight: '1.3',
                            whiteSpace: 'nowrap'
                        }}>
                            Controlador Geral<br />do Município
                        </div>
                    </div>

                    {/* Conexão vertical do Controlador para as Diretorias */}
                    <div style={{
                        position: 'absolute',
                        top: '48px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        height: '68px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 5
                    }}>
                        <div style={{
                            width: '4px',
                            height: '100%',
                            background: 'linear-gradient(to bottom, rgba(148,163,184,0.95), rgba(148,163,184,0.75))'
                        }} />
                    </div>

                </div>

                            <div style={{ marginTop: '24px', fontSize: '0.8rem', opacity: 0.85, textAlign: 'center' }}>
                                Clique para ver o Sistema de Controle Interno
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sistema-controle-interno"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                        >
                            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                                <div style={{ position: 'relative', display: 'inline-block' }}>
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                                        style={{
                                            fontSize: '1.05rem',
                                            letterSpacing: '0.18em',
                                            textTransform: 'uppercase',
                                            color: 'white',
                                            fontWeight: 700
                                        }}
                                    >
                                        Sistema de Controle
                                    </motion.div>
                                    {/* Rabisco estilo lapis abaixo do titulo */}
                                    <motion.svg
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{ opacity: 0.75, scaleX: 1 }}
                                        transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
                                        width="320"
                                        height="18"
                                        viewBox="0 0 320 18"
                                        style={{
                                            position: 'absolute',
                                            left: '50%',
                                            marginLeft: '-160px',
                                            bottom: '-12px',
                                            pointerEvents: 'none',
                                            transformOrigin: 'center'
                                        }}
                                    >
                                        <path
                                            d="M6 9 C55 14, 110 3, 160 9 C210 15, 265 3, 314 8"
                                            fill="none"
                                            stroke="rgba(0, 0, 0, 0.9)"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M10 12 C62 16, 112 6, 160 12 C208 17, 258 7, 310 11"
                                            fill="none"
                                            stroke="rgba(0, 0, 0, 0.55)"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                        />
                                    </motion.svg>
                                </div>
                            </div>

                            {/* Organograma do Sistema de Controle Interno */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: '600px',
                                position: 'relative'
                            }}>
                                {/* Nível diretorias - usado como referência para centralização */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                    gap: '16px',
                                    width: '100%',
                                    position: 'relative',
                                    paddingTop: '120px',
                                    marginBottom: '92px'
                                }}>
                                    {/* Linha horizontal ligando as duas diretorias */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '112px',
                                        left: '8%',
                                        right: '8%',
                                        height: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pointerEvents: 'none'
                                    }}>
                                        <div style={{
                                            height: '4px',
                                            width: '100%',
                                            background: 'linear-gradient(to right, rgba(148,163,184,0.6), rgba(148,163,184,0.95), rgba(148,163,184,0.6))'
                                        }} />
                                    </div>

                                    <div style={{ width: '100%' }}>
                                        <OrganogramaBox
                                            titulo="Diretor de Controle Interno"
                                            itens={[]}
                                            cor="var(--col-primary)"
                                            isDiretoria={true}
                                        />
                                    </div>

                                    <div style={{ width: '100%' }}>
                                        <OrganogramaBox
                                            titulo="Diretor de Transparência e Auditoria"
                                            itens={[]}
                                            cor="var(--col-correction)"
                                            isDiretoria={true}
                                        />
                                    </div>

                                    {/* Itens com + centralizados entre os dois blocos */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 19px)',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        alignItems: 'center'
                                    }}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                                        >
                                            <ItemComPlus titulo="Agentes de controladoria" />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
                                        >
                                            <ItemComPlus titulo="Secretarias" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Controlador Geral - Centralizado sobre a linha dos diretores */}
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '6px',
                                    zIndex: 10
                                }}>
                                    <div style={{
                                        padding: '12px 24px',
                                        borderRadius: '999px',
                                        border: '1px solid rgba(148,163,184,0.6)',
                                        background: 'rgba(15,23,42,0.9)',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        boxShadow: '0 0 0 1px rgba(15,23,42,0.8)',
                                        textAlign: 'center',
                                        lineHeight: '1.3',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        Controlador Geral<br />do Município
                                    </div>
                                </div>

                                {/* Conexão vertical do Controlador para as Diretorias */}
                                <div style={{
                                    position: 'absolute',
                                    top: '48px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    height: '68px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 5
                                }}>
                                    <div style={{
                                        width: '4px',
                                        height: '100%',
                                        background: 'linear-gradient(to bottom, rgba(148,163,184,0.95), rgba(148,163,184,0.75))'
                                    }} />
                                </div>

                                {/* Comissão de Controladoria - à direita do Controlador */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                                    style={{
                                        position: 'absolute',
                                        top: '0px',
                                        left: 'calc(50% + 160px)',
                                        zIndex: 10,
                                        maxWidth: '150px'
                                    }}
                                >
                                    <OrganogramaBox 
                                        titulo="Comissão de Controladoria" 
                                        itens={[]} 
                                        cor="#10b981"
                                        isComissao={true}
                                    />
                                </motion.div>

                                {/* Linha horizontal conectando Controlador e Comissão */}
                                <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: 1, scaleX: 1 }}
                                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                    style={{
                                        position: 'absolute',
                                        top: '18px',
                                        left: 'calc(50% + 100px)',
                                        width: '50px',
                                        height: '3px',
                                        background: 'linear-gradient(to right, rgba(148,163,184,0.6), rgba(16, 185, 129, 0.6))',
                                        zIndex: 8,
                                        transformOrigin: 'left center'
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        right: '-2px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '0',
                                        height: '0',
                                        borderLeft: '6px solid rgba(16, 185, 129, 0.6)',
                                        borderTop: '4px solid transparent',
                                        borderBottom: '4px solid transparent'
                                    }} />
                                </motion.div>

                            </div>

                            <div style={{ marginTop: '24px', fontSize: '0.8rem', opacity: 0.85, textAlign: 'center' }}>
                                Clique para voltar ao Organograma Institucional
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

function OrganogramaBox({ titulo, itens, cor, isComissao = false, isDiretoria = false }) {
    // Determina a cor de fundo baseada na cor passada
    let backgroundCor;
    if (isComissao) {
        backgroundCor = 'rgba(16, 185, 129, 0.15)'; // Verde claro para a Comissão
    } else {
        backgroundCor = cor === 'var(--col-primary)' 
            ? 'var(--col-primary-subtle)' 
            : 'var(--col-correction-subtle)';
    }
    
    return (
        <div style={{
            borderRadius: isComissao ? '12px' : '18px',
            padding: isComissao ? '8px 10px' : '14px 16px',
            background: backgroundCor,
            border: isComissao 
                ? `2px dashed ${cor}80` 
                : `1px solid ${cor}55`,
            display: 'flex',
            flexDirection: 'column',
            gap: isComissao ? '3px' : '6px',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            boxShadow: isComissao ? `0 0 0 1px ${cor}40` : 'none',
            width: '100%',
            minHeight: isDiretoria ? '96px' : 'auto'
        }}>
            {isComissao && (
                <div style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: cor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 2px 5px ${cor}60`
                }}>
                    <span style={{ color: 'white', fontSize: '9px', fontWeight: 'bold' }}>✓</span>
                </div>
            )}
            <div style={{ 
                fontSize: isComissao ? '0.75rem' : '1.05rem', 
                fontWeight: 700, 
                color: cor,
                lineHeight: '1.3'
            }}>
                {titulo}
            </div>
            {isComissao && (
                <div style={{
                    fontSize: '0.65rem',
                    color: cor,
                    opacity: 0.9,
                    marginTop: '2px',
                    fontStyle: 'italic'
                }}>
                    Controle da Controladoria
                </div>
            )}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.78rem', opacity: 0.9, display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'center' }}>
                {itens.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '999px',
                            background: cor
                        }} />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function OrganogramaBoxComPlus({ titulo, cor }) {
    // Determina a cor de fundo baseada na cor passada
    const backgroundCor = cor === 'var(--col-primary)' 
        ? 'var(--col-primary-subtle)' 
        : 'var(--col-correction-subtle)';
    
    return (
        <div style={{
            borderRadius: '18px',
            padding: '14px 16px',
            background: backgroundCor,
            border: `1px solid ${cor}55`,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            textAlign: 'center',
            position: 'relative'
        }}>
            <div style={{ 
                fontSize: '1.05rem', 
                fontWeight: 700, 
                color: cor,
                lineHeight: '1.3'
            }}>
                {titulo}
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: cor,
                color: 'white',
                fontSize: '14px',
                fontWeight: 'bold',
                flexShrink: 0
            }}>
                <Plus size={14} strokeWidth={3} />
            </div>
        </div>
    );
}

function ItemComPlus({ titulo }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '280px'
        }}>
            {/* Sinal de + vermelho */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#ef4444',
                color: 'white',
                flexShrink: 0
            }}>
                <span style={{ fontSize: '18px', lineHeight: 1, fontWeight: 700 }}>+</span>
            </div>
            {/* Texto branco */}
            <div style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'white',
                textTransform: 'capitalize',
                width: '190px',
                textAlign: 'left',
                lineHeight: 1.2
            }}>
                {titulo}
            </div>
        </div>
    );
}
