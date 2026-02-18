import React from 'react';

const seloOuroUrl = 'https://i.ibb.co/WvHCYqZv/images-4.jpg';

export function Transparencia() {
    const checkIcon = (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="#e7f5ed" />
            <path
                d="M7.5 12.5l2.7 2.7 6.3-6.3"
                fill="none"
                stroke="#2f7a4e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    const trophyIcon = (
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M7 4h10v2a4 4 0 01-4 4h-2a4 4 0 01-4-4V4z"
                fill="#c28a2f"
            />
            <path
                d="M5 5h2v2a3 3 0 01-3 3H3V7a2 2 0 012-2zM19 5h2a2 2 0 012 2v3h-1a3 3 0 01-3-3V5z"
                fill="#e2b15a"
            />
            <rect x="10" y="10" width="4" height="3" fill="#c28a2f" />
            <rect x="8" y="13" width="8" height="2" fill="#b27a22" />
            <rect x="7" y="15" width="10" height="3" rx="1" fill="#c28a2f" />
        </svg>
    );

    return (
        <div>
            <section className="container" style={{ padding: '72px 24px 24px' }}>
                <div className="flex flex-col gap-4" style={{ maxWidth: '860px' }}>
                    <h1 className="h1" style={{ marginBottom: '4px', fontSize: '2.8rem' }}>
                        Transparência em tempo real.
                        <br />
                        Controle social na prática.
                    </h1>
                    <p className="text-body" style={{ fontSize: '1.1rem', maxWidth: '720px' }}>
                        A Controladoria Geral do Município é responsável por coordenar a transparência pública,
                        garantir a integridade das informações divulgadas e fortalecer o controle social,
                        atuando de forma preventiva e corretiva.
                    </p>
                </div>
            </section>

            <section className="container" style={{ padding: '0 24px 80px' }}>
                <div
                    style={{
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '16px',
                        padding: '28px',
                        display: 'flex',
                        gap: '28px',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)'
                    }}
                >
                    <div style={{ flex: '0 1 220px', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src={seloOuroUrl}
                            alt="Selo Ouro 2025 no Painel Nacional da Transparência"
                            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                        />
                    </div>
                    <div style={{ flex: '1 1 360px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1d4ed8', fontWeight: 600 }}>
                                {trophyIcon}
                                Reconhecimento Nacional em Transparencia
                            </span>
                        </div>
                        <h2 className="h2" style={{ marginBottom: '12px', fontSize: '1.6rem' }}>
                            Selo Ouro – Painel Nacional da Transparencia (2025)
                        </h2>
                        <div className="flex flex-col gap-2" style={{ marginBottom: '12px' }}>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                {checkIcon}
                                <span className="text-body">Atendimento integral aos criterios legais</span>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                {checkIcon}
                                <span className="text-body">Dados completos, atualizados e acessiveis</span>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                {checkIcon}
                                <span className="text-body">Compromisso com integridade e controle social</span>
                            </div>
                        </div>
                        <a
                            href="https://www.sjc.sp.gov.br/servicos/governanca/portal-da-transparencia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#1d4ed8', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                        >
                            Acesse o portal da transparencia
                            <span aria-hidden="true">›</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

