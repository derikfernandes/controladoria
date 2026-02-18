import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search } from 'lucide-react';
import { Button } from '../ui/Button';

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
            <div className="container flex items-center justify-between" style={{ width: '100%' }}>
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
                <nav className="flex items-center gap-8" style={{ fontSize: '0.9rem', color: 'var(--text-body)', fontWeight: 500 }}>
                    <a href="#" className="nav-link">A Controladoria</a>
                    <Link to="/macrofluxo" className="nav-link" style={{ color: 'var(--text-main)' }}>Macrofluxo</Link>
                    <Link to="/produto" className="nav-link">Produtos</Link>
                    <Link to="/processos" className="nav-link">Processos (POPs)</Link>
                    <Link to="/transparencia" className="nav-link">Transparência</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Icon (Hidden on Desktop usually, but here just generic) */}
                    <a href="/macrofluxo">
                        <Button variant="primary">Ver Macrofluxo</Button>
                    </a>
                </div>
            </div>
        </header>
    );
}
