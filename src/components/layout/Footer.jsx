import React from 'react';

export function Footer() {
    return (
        <footer style={{ background: 'white', borderTop: '1px solid var(--border-light)', padding: '60px 0 24px' }}>
            <div className="container">
                <div className="flex justify-between" style={{ marginBottom: '40px' }}>

                    <div style={{ maxWidth: '300px' }}>
                        <h4 className="h3" style={{ fontSize: '1.2rem', marginBottom: '16px' }}>CGM</h4>
                        <p className="text-body text-sm">
                            Garantindo a Transparência, Integridade, a Eficiência e Efetividade na gestão pública municipal através de um sistema integrado de controle.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <div className="flex flex-col gap-2">
                            <span style={{ fontWeight: 600, marginBottom: '8px' }}>Institucional</span>
                            <a href="#" className="text-sm text-body">Quem Somos</a>
                            <a href="#" className="text-sm text-body">Legislação</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span style={{ fontWeight: 600, marginBottom: '8px' }}>Serviços</span>
                            <a href="#" className="text-sm text-body">Ouvidoria</a>
                            <a href="#" className="text-sm text-body">Portal da Transparência</a>
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between' }} className="text-xs text-body">
                    <span>© 2024 Controladoria Geral do Município. Todos os direitos reservados.</span>
                    <span>Versão 2.1.0 • Atualizado em Fev/2026</span>
                </div>
            </div>
        </footer>
    );
}
