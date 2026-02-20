import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="glass-panel" style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            height: '70px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container flex items-center" style={{ width: '100%', gap: '56px' }}>
                {/* Logo */}
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--col-primary)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        CG
                    </div>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem', letterSpacing: '-0.02em', color: 'var(--col-primary)' }}>
                        Controladoria Geral do Município
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center" style={{ fontSize: '0.9rem', color: 'var(--text-body)', fontWeight: 500, gap: '40px' }}>
                    <a href="#" className="nav-link">A Controladoria</a>
                    <Link to="/macrofluxo" className="nav-link" style={{ color: 'var(--text-main)' }}>Macrofluxo</Link>
                    <Link to="/produto" className="nav-link">Produtos</Link>
                    <Link to="/processos" className="nav-link">Processos (POPs)</Link>
                    <Link to="/transparencia" className="nav-link">Transparência</Link>
                </nav>
            </div>
        </header>
    );
}
