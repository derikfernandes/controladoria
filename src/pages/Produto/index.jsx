import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, BarChart3, Shield, Phone, FileText, Calendar, Construction, ChevronDown, Megaphone, User, Network, Activity, Zap, TrendingUp, ClipboardCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

const produtos = [
    {
        id: 1,
        nome: 'Painel da Controladoria',
        descricao: 'Visualização em tempo real dos indicadores, métricas e performance do sistema de controle interno da Controladoria.',
        icone: BarChart3,
        cor: 'var(--col-primary)',
        corSubtle: 'var(--col-primary-subtle)',
        url: 'https://lookerstudio.google.com/reporting/347de84c-3304-4d05-bfc0-a9fe28916b0f/page/p_d4jj6wl0cd',
        linksAdicionais: [
            {
                nome: 'Termômetro do 156',
                url: 'https://lookerstudio.google.com/u/0/reporting/347de84c-3304-4d05-bfc0-a9fe28916b0f/page/p_nuecsxhqnd'
            },
            {
                nome: 'Desmistificando o IEG-M',
                url: 'https://lookerstudio.google.com/reporting/347de84c-3304-4d05-bfc0-a9fe28916b0f/page/p_zcg522l9wd'
            },
            {
                nome: 'Monitor TCE-SP',
                url: 'https://app.powerbi.com/view?r=eyJrIjoiYzRmNjE4ZmItZjUxNy00ZDc3LWJiYzctYjA0MjVlNDM1YzAxIiwidCI6IjhjZGE5NWUzLTZhMDYtNGQ3ZC1iYmFlLTM3MzhkNWMxZWM0NSJ9'
            }
        ]
    },
    {
        id: 2,
        nome: 'Transparência e Proteção de Dados',
        descricao: 'A Controladoria Geral do Município é responsável por coordenar a transparência pública, garantir a integridade das informações divulgadas e fortalecer o controle social, atuando de forma preventiva e corretiva.',
        icone: Shield,
        cor: '#10b981',
        corSubtle: '#d1fae5',
        url: '/transparencia',
        isInternalLink: true,
        itensPrincipais: [
            {
                nome: 'Transparência',
                url: '/transparencia',
                isInternalLink: true
            },
            {
                nome: 'Proteção de Dados',
                subitens: [
                    {
                        nome: '1º Relatório de Mapeamento LGPD',
                        url: 'https://drive.google.com/file/d/1i8K0OJiXQc664UcMR1ce5qOMVCP047jP/view?usp=sharing'
                    },
                    {
                        nome: '2º Relatório de Mapeamento LGPD',
                        url: 'https://drive.google.com/file/d/14yGLk_NuaYaEV5x3UXzbpDOR410Rt7U4/view?usp=sharing'
                    }
                ]
            },
            {
                nome: 'Prêmios e Certificados',
                url: 'https://www.sjc.sp.gov.br/servicos/governanca/portal-da-transparencia/premios-e-certificados/'
            }
        ],
        seloOuro: {
            url: 'https://i.ibb.co/WvHCYqZv/images-4.jpg'
        }
    },
    {
        id: 3,
        nome: '156 e Ouvidoria',
        descricao: 'Canal de comunicação direta entre cidadãos e a administração pública para manifestações, denúncias e solicitações.',
        icone: User,
        cor: '#f59e0b',
        corSubtle: '#fef3c7',
        mostraConexao: true
    },
    {
        id: 6,
        nome: 'Seu José',
        descricao: <>Lançamento do <strong>156 no WhatsApp</strong>! O "Seu José" é o novo canal que aproxima o cidadão da Prefeitura, permitindo registrar solicitações e demandas de forma rápida e direta pelo WhatsApp.</>,
        icone: Phone,
        cor: '#2563eb',
        corSubtle: '#dbeafe',
        iconeImagem: 'https://www.sjc.sp.gov.br/media/3whhjihe/14730_b_s7_banner_web_seu_jose_940x627px.png?width=940&height=627&v=1dcd72adb606c40',
        telefone: '(12) 99710-0156',
        linksAdicionais: [
            {
                nome: 'Saiba mais',
                url: 'https://www.sjc.sp.gov.br/noticias/2026/abril/24/prefeitura-lanca-o-whatsapp-156-com-servicos-24h/'
            }
        ]
    },
    {
        id: 4,
        nome: '',
        subtitulo: 'Centro Integrado de Transparência e Eficiência',
        descricao: 'É a estrutura operacional de monitoramento onde as secretarias acompanham a execução através de níveis críticos, geração alertas, comunicação entre setores responsáveis e promoções de ações.',
        icone: Activity,
        cor: '#8b5cf6',
        corSubtle: '#ede9fe',
        caracteristicas: [
            'Acompanhamento contínuo de indicadores',
            'Identificação precoce de riscos',
            'Priorização de ações preventivas',
            'Suporte à tomada de decisão'
        ],
        imagem: {
            url: 'https://i.ibb.co/PvLktK3L/CITE-Logo.png'
        },
        linksAdicionais: [
            {
                nome: 'Apresentação',
                url: 'https://canva.link/h1cs0xcedsbwvx6'
            },
            {
                nome: 'CITE - Saúde',
                url: 'https://lookerstudio.google.com/reporting/16f9b762-b1b6-4763-adfa-4b1bd680cc97'
            },
            {
                nome: 'CITE - SMC',
                url: 'https://lookerstudio.google.com/reporting/9739a138-ad95-46a6-9453-eaeec63d33de'
            },
            {
                nome: 'CITE - SEMOB',
                url: null,
                emConstrucao: true
            },
            {
                nome: 'CITE - Defesa Civil',
                url: null,
                emConstrucao: true
            }
        ]
    },
    {
        id: 5,
        nome: 'Ciclo de Visitas',
        descricao: 'Diagnóstico completo sobre um tema relevante e sensível a administração pública, com propostas de melhorias, adequações e reforço de pontos positivos.',
        icone: ClipboardCheck,
        cor: '#ec4899',
        corSubtle: '#fce7f3',
        mostraCiclo: true,
        etapasCiclo: [
            { numero: '01', texto: 'Definição da matéria e locais' },
            { numero: '02', texto: 'Realização das Visitas e elaboração de relatórios individuais' },
            { numero: '03', texto: 'Elaboração do Relatório Final' },
            { numero: '04', texto: 'Apresentação à SG e Secretaria Responsável' },
            { numero: '05', texto: 'Devolutiva da Secretaria interessada' },
            { numero: '06', texto: 'Acompanhamento das providências' }
        ],
        linksAdicionais: [
            {
                nome: 'Acompanhe as visitas',
                url: 'https://lookerstudio.google.com/reporting/347de84c-3304-4d05-bfc0-a9fe28916b0f/page/p_lp6eg9v4qd'
            }
        ]
    },
    {
        id: 7,
        nome: 'Processos Inteligentes',
        descricao: 'União entre mapeamento de processos, POPs, IA e automação para gerar eficiência real.',
        icone: Network,
        cor: '#1e293b',
        corSubtle: '#e2e8f0',
        iconeImagem: 'https://i.ibb.co/hFVYpmn5/processos-inteligentes.png',
        iconeImagemFundo: 'transparent',
        url: 'https://canva.link/rud7ex8t7iatm6b',
        textoAcesso: 'Apresentação'
    }
];

export function Produto() {
    return (
        <div>
            {/* Hero Section */}
            <section className="container" style={{ padding: '80px 24px 60px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ maxWidth: '800px' }}
                >
                    <h1 className="h1" style={{ marginBottom: '24px', fontSize: '2.8rem' }}>
                        Carteira de Produtos
                    </h1>
                    <p className="text-body" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                        Conheça os principais produtos e serviços desenvolvidos pela Controladoria Geral do Município 
                        para promover transparência, integridade, eficiência e efetividade na gestão pública.
                    </p>
                </motion.div>
            </section>

            {/* Produtos Grid */}
            <section className="container" style={{ padding: '0 24px 80px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px'
                }}>
                    {produtos.map((produto, index) => {
                        const Icon = produto.icone;
                        return (
                            <motion.div
                                key={produto.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                style={{
                                    background: 'var(--bg-surface)',
                                    border: '1px solid var(--border-light)',
                                    borderRadius: '20px',
                                    padding: '32px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: 'var(--shadow-sm)',
                                    position: 'relative'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                    e.currentTarget.style.borderColor = produto.cor;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                    e.currentTarget.style.borderColor = 'var(--border-light)';
                                }}
                            >
                                {/* Selo Ouro - Canto Superior Direito */}
                                {produto.seloOuro && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        width: '80px',
                                        height: '80px',
                                        zIndex: 1
                                    }}>
                                        <img
                                            src={produto.seloOuro.url}
                                            alt="Selo Ouro 2025 no Painel Nacional da Transparência"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Selo de Destaque - Canto Superior Direito */}
                                {produto.destaque && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
                                        padding: '4px 12px',
                                        borderRadius: '999px',
                                        background: produto.cor,
                                        color: '#ffffff',
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                        zIndex: 1
                                    }}>
                                        {produto.destaque}
                                    </div>
                                )}

                                {/* Ícone como Banner (imagem) */}
                                {produto.iconeImagem ? (
                                    <div style={{
                                        width: '100%',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        background: produto.iconeImagemFundo || produto.corSubtle,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <img
                                            src={produto.iconeImagem}
                                            alt={produto.nome}
                                            style={{
                                                width: '100%',
                                                height: '160px',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
                                ) : (

                                /* Ícone e Imagem */
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '40px',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '16px',
                                        background: produto.id === 4 ? '#000000' : produto.id === 5 ? '#f3f4f6' : produto.corSubtle,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: produto.id === 4 ? '#000000' : produto.id === 5 ? '#000000' : produto.cor,
                                        position: 'relative',
                                        flexShrink: 0
                                    }}>
                                        {produto.id === 4 ? (
                                            <CiteIcon size={32} />
                                        ) : (
                                            <Icon size={32} strokeWidth={2} color={produto.id === 5 ? '#000000' : undefined} />
                                        )}
                                    </div>
                                    
                                    {/* Imagem do CITE ao lado direito do ícone */}
                                    {produto.imagem && (
                                        <div style={{
                                            width: '180px',
                                            height: '96px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <img
                                                src={produto.imagem.url}
                                                alt="CITE"
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                                )}

                                {/* Conteúdo */}
                                <div style={{
                                    flex: 1,
                                    display: produto.iconeImagem ? 'flex' : 'block',
                                    flexDirection: 'column'
                                }}>
                                    <h3 className="h3" style={{ 
                                        marginBottom: produto.subtitulo ? '4px' : '12px',
                                        color: 'var(--text-main)',
                                        fontSize: '1.4rem'
                                    }}>
                                        {produto.nome}
                                    </h3>
                                    {produto.subtitulo && (
                                        <p style={{
                                            fontSize: '0.85rem',
                                            color: produto.id === 4 ? '#000000' : produto.cor,
                                            fontWeight: 600,
                                            marginBottom: '12px',
                                            letterSpacing: '0.02em'
                                        }}>
                                            {produto.subtitulo}
                                        </p>
                                    )}
                                    {produto.mostraConexao ? (
                                        <Conexao156OuvidoriaInterna cor={produto.cor} />
                                    ) : produto.mostraCiclo ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                            <p className="text-body" style={{ 
                                                lineHeight: '1.6',
                                                color: 'var(--text-body)',
                                                fontSize: '0.95rem'
                                            }}>
                                                {produto.descricao}
                                            </p>
                                            <CicloVisitasVisual etapas={produto.etapasCiclo} cor={produto.cor} />
                                        </div>
                                    ) : produto.caracteristicas && produto.id !== 4 ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <p className="text-body" style={{ 
                                                lineHeight: '1.6',
                                                color: 'var(--text-body)',
                                                marginBottom: '8px',
                                                fontSize: '0.95rem'
                                            }}>
                                                {produto.descricao}
                                            </p>
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '6px',
                                                padding: '12px',
                                                background: 'var(--bg-app)',
                                                borderRadius: '10px',
                                                border: `1px solid ${produto.cor}20`
                                            }}>
                                                {produto.caracteristicas.map((caracteristica, idx) => (
                                                    <div key={idx} style={{
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '8px',
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-body)',
                                                        lineHeight: '1.5'
                                                    }}>
                                                        <div style={{
                                                            width: '6px',
                                                            height: '6px',
                                                            borderRadius: '50%',
                                                            background: produto.cor,
                                                            marginTop: '6px',
                                                            flexShrink: 0
                                                        }} />
                                                        <span>{caracteristica}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="text-body" style={{ 
                                                lineHeight: '1.6',
                                                color: 'var(--text-body)'
                                            }}>
                                                {produto.descricao}
                                            </p>
                                            {produto.telefone && (
                                                <div style={{
                                                    flex: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '6px',
                                                    margin: '12px 0'
                                                }}>
                                                    <span style={{
                                                        fontSize: '0.75rem',
                                                        fontWeight: 600,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.08em',
                                                        color: 'var(--text-body)'
                                                    }}>
                                                        Fale com o Seu José
                                                    </span>
                                                    <a
                                                        href={`https://wa.me/55${produto.telefone.replace(/\D/g, '')}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '10px',
                                                            fontSize: '1.7rem',
                                                            fontWeight: 800,
                                                            color: produto.cor,
                                                            textDecoration: 'none',
                                                            lineHeight: '1.1'
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                                                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                                    >
                                                        <Phone size={26} strokeWidth={2.5} />
                                                        {produto.telefone}
                                                    </a>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* Link/Ação */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                    {produto.itensPrincipais ? (
                                        produto.itensPrincipais.map((item, idx) => (
                                            <ItemComSubitens 
                                                key={idx} 
                                                item={item} 
                                                cor={produto.cor}
                                            />
                                        ))
                                    ) : produto.url ? (
                                        produto.isInternalLink ? (
                                            <Link
                                                to={produto.url}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    color: produto.cor,
                                                    fontWeight: 600,
                                                    fontSize: '0.95rem',
                                                    textDecoration: 'none',
                                                    transition: 'opacity 0.2s'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                            >
                                                <span>{produto.textoAcesso || (produto.id === 2 ? 'Transparência' : 'Acesse aqui')}</span>
                                                <ArrowRight size={18} />
                                            </Link>
                                        ) : (
                                            <a
                                                href={produto.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    color: produto.cor,
                                                    fontWeight: 600,
                                                    fontSize: '0.95rem',
                                                    textDecoration: 'none',
                                                    transition: 'opacity 0.2s'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                            >
                                                <span>{produto.textoAcesso || (produto.id === 2 ? 'Transparência' : 'Acesse aqui')}</span>
                                                <ArrowRight size={18} />
                                            </a>
                                        )
                                    ) : null}
                                    
                                    {/* Links Adicionais */}
                                    {produto.linksAdicionais && produto.linksAdicionais.map((link, idx) => {
                                        if (link.emConstrucao) {
                                            return (
                                                <ItemEmConstrucao 
                                                    key={idx} 
                                                    link={link} 
                                                    cor={produto.cor}
                                                />
                                            );
                                        }
                                        
                                        return (
                                            <a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    color: produto.id === 5 || produto.id === 4 ? '#000000' : produto.cor,
                                                    fontWeight: 500,
                                                    fontSize: '0.8rem',
                                                    textDecoration: 'none',
                                                    transition: 'opacity 0.2s',
                                                    marginLeft: '8px'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                            >
                                                <span>{link.nome}</span>
                                                <ArrowRight size={14} color={produto.id === 5 || produto.id === 4 ? '#000000' : undefined} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container" style={{ padding: '0 24px 80px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="card"
                    style={{
                        background: 'linear-gradient(135deg, var(--col-primary-subtle) 0%, var(--col-correction-subtle) 100%)',
                        border: '1px solid var(--border-light)',
                        padding: '48px',
                        textAlign: 'center',
                        borderRadius: '24px'
                    }}
                >
                    <h2 className="h2" style={{ marginBottom: '16px' }}>
                        Explore o Macrofluxo
                    </h2>
                    <p className="text-body" style={{ marginBottom: '32px', fontSize: '1.05rem' }}>
                        Entenda como todos esses produtos se conectam em um único sistema.
                    </p>
                    <Link to="/macrofluxo">
                        <Button variant="primary" icon={ArrowRight}>
                            Ver Macrofluxo Completo
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}

function ItemEmConstrucao({ link, cor }) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginLeft: '8px',
                opacity: 0.7,
                cursor: 'help',
                position: 'relative'
            }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#000000',
                fontWeight: 500,
                fontSize: '0.8rem'
            }}>
                <Construction size={14} color="#f59e0b" />
                <span>{link.nome}</span>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginLeft: '20px',
                fontSize: '0.7rem',
                color: '#000000',
                fontStyle: 'italic'
            }}>
                <span>Em construção</span>
            </div>
            
            {showTooltip && (
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '0',
                        marginBottom: '8px',
                        padding: '8px 12px',
                        background: '#1f2937',
                        color: 'white',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        whiteSpace: 'nowrap',
                        zIndex: 1000,
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    Este produto está em desenvolvimento
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '12px',
                        width: 0,
                        height: 0,
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid #1f2937'
                    }} />
                </motion.div>
            )}
        </div>
    );
}

function ItemComSubitens({ item, cor }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {item.url ? (
                item.isInternalLink ? (
                    <Link
                        to={item.url}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: cor,
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'opacity 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                        <span>{item.nome}</span>
                        <ArrowRight size={18} />
                    </Link>
                ) : (
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: cor,
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'opacity 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                        <span>{item.nome}</span>
                        <ArrowRight size={18} />
                    </a>
                )
            ) : (
                <div
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: cor,
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                    <span>{item.nome}</span>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown size={18} />
                    </motion.div>
                </div>
            )}
            
            {/* Subitens de Proteção de Dados */}
            <AnimatePresence>
                {item.subitens && isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden' }}
                    >
                        {item.subitens.map((subitem, subIdx) => (
                            <a
                                key={subIdx}
                                href={subitem.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: cor,
                                    fontWeight: 500,
                                    fontSize: '0.8rem',
                                    textDecoration: 'none',
                                    transition: 'opacity 0.2s',
                                    marginLeft: '8px',
                                    marginTop: '6px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                <span>{subitem.nome}</span>
                                <ArrowRight size={14} />
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function Conexao156Ouvidoria({ cor }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '4px',
            padding: '8px',
            background: 'var(--bg-surface)',
            borderRadius: '8px',
            border: `1px solid ${cor}40`
        }}>
            {/* Primeira Linha - 156 */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 8px',
                background: `${cor}15`,
                borderRadius: '6px',
                fontSize: '0.7rem',
                fontWeight: 600,
                color: cor,
                whiteSpace: 'nowrap'
            }}>
                <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: cor
                }} />
                <span>156 - 1ª Linha</span>
            </div>
            
            {/* Seta de conexão */}
            <div style={{
                width: '2px',
                height: '12px',
                background: `${cor}60`,
                margin: '2px 0'
            }} />
            
            {/* Segunda Linha - Ouvidoria */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 8px',
                background: `${cor}25`,
                borderRadius: '6px',
                fontSize: '0.7rem',
                fontWeight: 600,
                color: cor,
                whiteSpace: 'nowrap'
            }}>
                <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: cor
                }} />
                <span>Ouvidoria - 2ª Linha</span>
            </div>
        </div>
    );
}

function Conexao156OuvidoriaInterna({ cor }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '8px'
        }}>
            {/* Primeira Linha - 156 */}
            <div style={{
                display: 'flex',
                gap: '12px',
                padding: '12px',
                background: '#f9fafb',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: 'var(--col-primary-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }}>
                    <Phone size={24} color="var(--col-primary)" strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--col-primary)',
                        marginBottom: '4px'
                    }}>
                        156 - 1ª Linha
                    </div>
                    <div style={{
                        fontSize: '0.8rem',
                        color: '#6b7280',
                        lineHeight: '1.5'
                    }}>
                        Atendimento imediato a solicitações e demandas rotineiras.
                    </div>
                </div>
            </div>

            {/* Segunda Linha - Ouvidoria */}
            <div style={{
                display: 'flex',
                gap: '12px',
                padding: '12px',
                background: '#f9fafb',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: 'var(--col-correction-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                }}>
                    <Megaphone size={24} color="var(--col-correction)" strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--col-correction)',
                        marginBottom: '4px'
                    }}>
                        Ouvidoria - 2ª Linha
                    </div>
                    <div style={{
                        fontSize: '0.8rem',
                        color: '#6b7280',
                        lineHeight: '1.5',
                        marginBottom: '4px'
                    }}>
                        Atendimento aprofundado às denúncias e manifestações mais complexas.
                    </div>
                    <div style={{
                        fontSize: '0.75rem',
                        color: '#9ca3af',
                        fontStyle: 'italic',
                        lineHeight: '1.4'
                    }}>
                        Problemas não solucionados no 156.
                    </div>
                </div>
            </div>
        </div>
    );
}

function CiteIcon({ size }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Linha verde (cor do gráfico) */}
            <path
                d="M22 12h-4l-3 9L9 3l-3 9H2"
                stroke="#39ff14"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Pontos verdes */}
            <circle cx="2" cy="12" r="2" fill="#39ff14" />
            <circle cx="9" cy="3" r="2" fill="#39ff14" />
            <circle cx="15" cy="21" r="2" fill="#39ff14" />
            <circle cx="22" cy="12" r="2" fill="#39ff14" />
        </svg>
    );
}

function CicloVisitasVisual({ etapas, cor }) {
    const [hoveredEtapa, setHoveredEtapa] = useState(null);
    const size = 220;
    const center = size / 2;
    const radius = 75;
    const segmentAngle = (2 * Math.PI) / 6;
    
    const getSegmentPosition = (index) => {
        const angle = (index * segmentAngle) - (Math.PI / 2); // Começar do topo
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return { x, y, angle };
    };
    
    const getSegmentPath = (index) => {
        const startAngle = (index * segmentAngle) - (Math.PI / 2);
        const endAngle = ((index + 1) * segmentAngle) - (Math.PI / 2);
        const innerRadius = radius - 40;
        const outerRadius = radius + 20;
        
        const x1 = center + innerRadius * Math.cos(startAngle);
        const y1 = center + innerRadius * Math.sin(startAngle);
        const x2 = center + outerRadius * Math.cos(startAngle);
        const y2 = center + outerRadius * Math.sin(startAngle);
        const x3 = center + outerRadius * Math.cos(endAngle);
        const y3 = center + outerRadius * Math.sin(endAngle);
        const x4 = center + innerRadius * Math.cos(endAngle);
        const y4 = center + innerRadius * Math.sin(endAngle);
        
        return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1} Z`;
    };
    
    const getSegmentColor = (index) => {
        if (index === 0) return '#000000';
        if (index === 5) return '#14b8a6'; // Teal mais claro
        return '#0f766e'; // Teal escuro
    };
    
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
            position: 'relative'
        }}>
            <svg width={size} height={size} style={{ position: 'relative' }}>
                {/* Primeiro renderiza todos os segmentos */}
                {etapas.map((etapa, index) => {
                    const isHovered = hoveredEtapa === index;
                    return (
                        <path
                            key={`segment-${index}`}
                            d={getSegmentPath(index)}
                            fill={getSegmentColor(index)}
                            stroke="none"
                            style={{
                                cursor: 'pointer',
                                opacity: isHovered ? 0.8 : 1,
                                transition: 'opacity 0.2s'
                            }}
                            onMouseEnter={() => setHoveredEtapa(index)}
                            onMouseLeave={() => setHoveredEtapa(null)}
                        />
                    );
                })}
                
                {/* Círculo central branco */}
                <circle
                    cx={center}
                    cy={center}
                    r={radius - 50}
                    fill="white"
                />
                
                {/* Depois renderiza todos os círculos com números (para ficarem por cima) */}
                {etapas.map((etapa, index) => {
                    const pos = getSegmentPosition(index);
                    const isHovered = hoveredEtapa === index;
                    
                    return (
                        <g key={`number-${index}`}>
                            <circle
                                cx={pos.x}
                                cy={pos.y}
                                r="18"
                                fill="white"
                                stroke={getSegmentColor(index)}
                                strokeWidth="2"
                                style={{
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s'
                                }}
                                onMouseEnter={() => setHoveredEtapa(index)}
                                onMouseLeave={() => setHoveredEtapa(null)}
                            />
                            <text
                                x={pos.x}
                                y={pos.y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="12"
                                fontWeight="700"
                                fill={getSegmentColor(index)}
                                style={{
                                    cursor: 'pointer',
                                    pointerEvents: 'none'
                                }}
                            >
                                {etapa.numero}
                            </text>
                        </g>
                    );
                })}
            </svg>
            
            {/* Tooltips renderizados fora do SVG para ficarem sempre na frente */}
            {etapas.map((etapa, index) => {
                const pos = getSegmentPosition(index);
                const isHovered = hoveredEtapa === index;
                
                if (!isHovered) return null;
                
                // Calcula posição relativa ao container (considerando padding de 24px)
                const tooltipX = pos.x + 24;
                const tooltipY = pos.y + 24;
                
                // Determina posição do tooltip baseado na posição do segmento
                const isTop = pos.y < center;
                const isRight = pos.x > center;
                
                return (
                    <motion.div
                        key={`tooltip-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        style={{
                            position: 'absolute',
                            left: `${tooltipX}px`,
                            top: `${tooltipY}px`,
                            transform: isTop ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
                            marginTop: isTop ? '-10px' : '10px',
                            zIndex: 10000,
                            pointerEvents: 'none',
                            width: 'max-content',
                            maxWidth: '280px'
                        }}
                    >
                        <div style={{
                            background: '#1f2937',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            textAlign: 'center',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                            whiteSpace: 'normal',
                            maxWidth: '280px',
                            lineHeight: '1.4'
                        }}>
                            {etapa.texto}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

