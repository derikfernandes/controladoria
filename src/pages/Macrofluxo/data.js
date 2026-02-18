export const macrofluxoNodes = [
    // --- PREVENÇÃO TRACK (Blue Background) ---
    {
        id: 'execucao-servicos',
        label: 'Execução dos Serviços da Prefeitura',
        type: 'prevention-start',
        x: 40, y: 265,
        details: {
            title: 'Execução dos Serviços',
            description: 'O início do ciclo de despesa e prestação de serviços nas Secretarias.',
            products: [],
            pops: []
        }
    },
    {
        id: 'controle-interno',
        label: 'Controle Interno',
        subLabels: ['✔ Conformidade', '✔ Execução'],
        type: 'prevention-highlight', // Orange/Yellowish
        x: 220, y: 150,
        details: {
            title: 'Controle Interno',
            description: 'Análise de conformidade e execução dos processos.',
            products: ['Relatório de Controle Interno'],
            pops: [
                {
                    label: 'POP-DCI-001 Controle Financeiro',
                    url: 'https://drive.google.com/file/d/1u_VQUJtomtZS_oAyK5u3f1fcdB24Dn8h/view?usp=sharing',
                    type: 'Conformidade'
                },
                {
                    label: 'POP-DCI-002 Ateste de conformidade',
                    url: 'https://drive.google.com/file/d/1_M6ZA7wNtlpjGF7a9oxzMEajtOLIoTcZ/view?usp=sharing',
                    type: 'Conformidade'
                },
                {
                    label: 'POP-DCI-003 Agentes de Controladoria',
                    url: 'https://drive.google.com/file/d/1s63ERopQdPbCXxcv53F5ICfGBCvW_QfE/view?usp=sharing',
                    type: 'Execução'
                },
                {
                    label: 'POP-DCI-005 Ciclos de Visitas',
                    url: 'https://drive.google.com/file/d/1mw0fhMS-qEv0OIr_-HH_iHExMjqMiUKB/view?usp=sharing',
                    type: ['Execução', 'Conformidade']
                },
                {
                    label: 'POP-DCI-006 Controle de Emendas',
                    url: 'https://drive.google.com/file/d/100FIT_Bf6JY3y-uZ3_2Uplr4vb5239W-/view?usp=sharing',
                    type: 'Conformidade'
                },
                {
                    label: 'POP-DCI-007 Contratos de Gestão',
                    url: 'https://drive.google.com/file/d/14LBmjD4V3RTKzsF6ZkPsKDQtvG7oI7uY/view?usp=sharing',
                    type: ['Conformidade', 'Execução']
                },
                {
                    label: 'POP-DTA-004 - Itens de Transparência',
                    url: 'https://drive.google.com/file/d/15iG_7kkjUMV3ne-U9eUSypr-t0OZcunj/view?usp=sharing',
                    type: 'Transparência'
                },
                {
                    label: 'POP-DTA-005 - LAI no Portal da Transparência',
                    url: 'https://drive.google.com/file/d/1WBfOhWf00_9GBPAX6COcO6bGs9ZstZw5/view?usp=sharing',
                    type: 'Transparência'
                },
                {
                    label: 'POP-DTA-006 - Relatórios 156',
                    url: 'https://drive.google.com/file/d/1rOaxh1pmNqfsCyb7NNnX-cobJk3pH4XO/view?usp=sharing',
                    type: 'Transparência'
                }
            ]
        }
    },
    {
        id: 'orgaos-externos',
        label: 'Órgãos de Controle Externo',
        subLabels: ['Tribunal de Contas', 'Ministério Público'],
        type: 'external', // Blue darker
        x: 220, y: 380,
        details: {
            title: 'Controle Externo',
            description: 'Demandas e apontamentos vindos do TCESP ou MP.',
            products: ['Resposta a Ofícios'],
            pops: [
                { label: 'POP-DTA-01', type: 'Conformidade' },
                {
                    label: 'POP-DCI-004 Requisições TCESP',
                    url: 'https://drive.google.com/file/d/1QfitqWhrJJn_YszWTmLjkL5Fq0NgxMYi/view?usp=sharing',
                    type: 'Tribunal de Contas'
                }
            ]
        }
    },
    {
        id: 'secretaria',
        label: 'Secretaria',
        type: 'prevention',
        x: 480, y: 170,
        details: {
            title: 'Secretaria',
            description: 'A unidade responsável pela gestão do contrato ou serviço.',
            products: ['Justificativa', 'Ajuste de Conduta'],
            pops: []
        }
    },
    {
        id: 'houve-correcao',
        label: 'Houve\nCorreção?',
        type: 'decision',
        x: 640, y: 150,
        details: {
            title: 'Decisão: Houve Correção?',
            description: 'Verificação se as irregularidades foram sanadas internamente.',
            products: [],
            pops: []
        }
    },
    {
        id: 'fim-prevention',
        label: 'FIM',
        type: 'end-success',
        x: 645, y: 60,
        details: {
            title: 'Processo Concluído',
            description: 'Situação regularizada no âmbito da prevenção.',
            products: [],
            pops: []
        }
    },

    // --- CORREÇÃO TRACK (Amber Background) ---
    {
        id: 'cidadao',
        label: 'Cidadão',
        type: 'input-correction',
        x: 880, y: 40,
        details: {
            title: 'Cidadão',
            description: 'Controle social.',
            products: [],
            pops: []
        }
    },
    {
        id: 'ouvidoria',
        label: 'Ouvidoria',
        type: 'input-correction',
        x: 885, y: 105,
        details: {
            title: 'Ouvidoria',
            description: 'Canal de recebimento de denúncias.',
            products: ['Protocolo de Ouvidoria'],
            pops: [{
                label: 'POP-DTA-003 - Ouvidoria',
                url: 'https://drive.google.com/file/d/1CrdCftfKHmeRcfbY4ccOIlDE5NzJcA9G/view?usp=sharing',
                type: 'Ouvidoria'
            }]
        }
    },
    {
        id: 'apontamento',
        label: 'Apontamento Potencial Irregularidade',
        type: 'correction-highlight', // Orange box
        x: 860, y: 160,
        details: {
            title: 'Apontamento',
            description: 'Identificação formal de um potencial desvio.',
            products: ['Matriz de Responsabilização'],
            pops: []
        }
    },
    {
        id: 'materialidade',
        label: 'Materialidade ou Indício?',
        type: 'decision',
        x: 1100, y: 147,
        details: {
            title: 'Análise de Admissibilidade',
            description: 'Avaliação se há elementos suficientes para abrir processo.',
            products: ['Juízo de Admissibilidade'],
            pops: [{ label: 'POP-COR-01', type: 'Conformidade' }]
        }
    },
    {
        id: 'fim-correction',
        label: 'FIM',
        type: 'end-success',
        x: 1105, y: 60,
        details: {
            title: 'Arquivamento',
            description: 'Denúncia improcedente ou sem materialidade.',
            products: ['Despacho de Arquivamento'],
            pops: []
        }
    },
    {
        id: 'auditoria',
        label: 'Auditoria',
        type: 'correction-highlight',
        x: 980, y: 320,
        details: {
            title: 'Auditoria',
            description: 'Processo de inspeção detalhada.',
            products: ['Relatório de Auditoria'],
            pops: [
                { label: 'POP-AUD-01', type: 'Execução' },
                {
                    label: 'POP-DTA-001 - Auditoria',
                    url: 'https://drive.google.com/file/d/1GQS0pcsxDl9QUop3tOFqsSMeKnnFsE0Q/view?usp=sharing',
                    type: 'Auditoria'
                }
            ]
        }
    },
    {
        id: 'corregedoria',
        label: 'Corregedoria',
        type: 'correction-highlight',
        x: 1150, y: 320,
        details: {
            title: 'Corregedoria',
            description: 'Processo administrativo disciplinar.',
            products: ['PAD', 'Sindicância'],
            pops: [
                { label: 'POP-CORREG-01', type: 'Execução' },
                {
                    label: 'POP-DTA-002 - Proced',
                    url: 'https://drive.google.com/file/d/13y9S1OYk5GgQc_FUQKHX4xBnaC4U4DcF/view?usp=sharing',
                    type: 'Corregedoria'
                }
            ]
        }
    },
    {
        id: 'relatorio',
        label: 'Relatório',
        type: 'process',
        x: 1090, y: 460,
        details: {
            title: 'Relatório Final',
            description: 'Conclusão dos trabalhos de auditoria ou corregedoria.',
            products: ['Relatório Final'],
            pops: []
        }
    },
    {
        id: 'fim-final',
        label: 'FIM',
        type: 'end-success',
        x: 1095, y: 550,
        details: {
            title: 'Encerramento',
            description: 'Processo concluído e arquivado.',
            products: [],
            pops: []
        }
    }
];

export const macrofluxoEdges = [
    // Left Side
    { from: 'execucao-servicos', to: 'controle-interno', arrow: 'simple' },
    { from: 'execucao-servicos', to: 'orgaos-externos', arrow: 'simple' },

    { from: 'orgaos-externos', to: 'controle-interno', arrow: 'simple', label: 'Comunica' },
    { from: 'controle-interno', to: 'secretaria', arrow: 'simple', label: 'Recomendações / Questionamentos' },
    { from: 'orgaos-externos', to: 'apontamento', arrow: 'simple', label: 'Relatório / Julgamento' },

    { from: 'secretaria', to: 'houve-correcao', arrow: 'simple' },
    { from: 'secretaria', to: 'apontamento', arrow: 'simple', label: 'Denúncia / Averiguação Preliminar' },

    { from: 'houve-correcao', to: 'fim-prevention', arrow: 'simple', label: 'SIM' },
    { from: 'houve-correcao', to: 'apontamento', arrow: 'simple', label: 'NÃO' },

    // Right Side
    { from: 'cidadao', to: 'ouvidoria', arrow: 'simple' },
    { from: 'ouvidoria', to: 'apontamento', arrow: 'simple' },
    { from: 'apontamento', to: 'materialidade', arrow: 'simple' },

    { from: 'materialidade', to: 'fim-correction', arrow: 'simple', label: 'NÃO' },
    { from: 'materialidade', to: 'auditoria', arrow: 'fork', label: 'SIM' },
    { from: 'materialidade', to: 'corregedoria', arrow: 'fork', label: 'SIM' },
    { from: 'auditoria', to: 'corregedoria', arrow: 'double' },

    { from: 'relatorio', to: 'orgaos-externos', arrow: 'return-long', label: 'Irregularidade' },
    { from: 'relatorio', to: 'controle-interno', arrow: 'return-long', label: 'Recomendação' },
    { from: 'relatorio', to: 'fim-final', arrow: 'simple', label: 'Regular sem recomendação' }
];
