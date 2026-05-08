import React from 'react';
import TiltCard from './TiltCard';
import { playClickSound } from '../utils/sounds';

export const NameStep = ({ data, updateData }) => (
  <div className="animate-fade-in">
    <div className="step-number">PASSO 01</div>
    <h2 className="step-title">Identidade Digital</h2>
    <p className="step-subtitle">Como vamos chamar o seu novo colaborador de elite?</p>
    <div className="form-group">
      <label className="form-label">Nome do Agente</label>
      <input 
        type="text" className="form-input" 
        value={data.aiName || ''} 
        onChange={(e) => updateData({ aiName: e.target.value })}
        placeholder="Ex: Salomão, Sophia, Jarvis..."
      />
      <small className="form-help">Escolha um nome que transmita a autoridade da sua marca.</small>
    </div>
  </div>
);

export const BusinessStep = ({ data, updateData }) => (
  <div className="animate-fade-in">
    <div className="step-number">PASSO 02</div>
    <h2 className="step-title">Ecossistema de Negócio</h2>
    <p className="step-subtitle">Contextualize a IA sobre o universo da sua empresa.</p>
    <div className="form-group">
      <label className="form-label">Nome da Corporação / Marca</label>
      <input type="text" className="form-input" value={data.companyName || ''} 
        onChange={(e) => updateData({ companyName: e.target.value })}
        placeholder="Ex: Salomão Santos Agency" />
    </div>
    <div className="form-group">
      <label className="form-label">Nicho / Setor de Atuação</label>
      <input type="text" className="form-input" value={data.niche || ''} 
        onChange={(e) => updateData({ niche: e.target.value })}
        placeholder="Ex: Infoprodutos, Imobiliário, Consultoria..." />
    </div>
    <div className="form-group">
      <label className="form-label">Canal de Presença (Site ou Instagram)</label>
      <input type="text" className="form-input" value={data.website || ''} 
        onChange={(e) => updateData({ website: e.target.value })}
        placeholder="https://..." />
    </div>
  </div>
);

export const ObjectiveStep = ({ data, updateData }) => {
  const options = [
    { id: 'vendas', icon: '💰', title: 'Vendas & Qualificação', desc: 'Transformar leads em clientes pagantes.' },
    { id: 'suporte', icon: '🛠️', title: 'Suporte & Retenção', desc: 'Encantar e resolver problemas com agilidade.' },
    { id: 'agendamento', icon: '📅', title: 'Agendamento / SDR', desc: 'Lotar sua agenda com leads qualificados.' },
    { id: 'misto', icon: '🔄', title: 'Agente Híbrido', desc: 'Múltiplas funções em um único cérebro.' }
  ];
  return (
    <div className="animate-fade-in">
      <div className="step-number">PASSO 03</div>
      <h2 className="step-title">Missão Principal</h2>
      <p className="step-subtitle">Qual o KPI número um que esta IA deve bater?</p>
      <div className="options-grid">
        {options.map(opt => (
          <TiltCard key={opt.id}
            className={`option-card ${data.mainObjective === opt.title ? 'selected' : ''}`}
            onClick={() => { playClickSound(); updateData({ mainObjective: opt.title }); }}
          >
            <div className="option-icon">{opt.icon}</div>
            <div className="option-title">{opt.title}</div>
            <div className="option-desc">{opt.desc}</div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};

export const PersonaStep = ({ data, updateData }) => {
  const options = [
    { id: 'amigavel', icon: '😊', title: 'Amigável e Empática' },
    { id: 'formal', icon: '👔', title: 'Sóbria e Profissional' },
    { id: 'especialista', icon: '🧠', title: 'Autoridade Consultiva' },
    { id: 'animada', icon: '🎉', title: 'Persuasiva e Energética' }
  ];
  return (
    <div className="animate-fade-in">
      <div className="step-number">PASSO 04</div>
      <h2 className="step-title">DNA de Personalidade</h2>
      <p className="step-subtitle">Como sua IA deve se comportar na linha de frente?</p>
      <div className="options-grid" style={{ marginBottom: '2.5rem' }}>
        {options.map(opt => (
          <TiltCard key={opt.id}
            className={`option-card ${data.tone === opt.title ? 'selected' : ''}`}
            onClick={() => { playClickSound(); updateData({ tone: opt.title }); }}
          >
            <div className="option-icon">{opt.icon}</div>
            <div className="option-title">{opt.title}</div>
          </TiltCard>
        ))}
      </div>
      <div className="form-group">
        <label className="form-label">Blindagem de Vocabulário (Termos Proibidos)</label>
        <input type="text" className="form-input" value={data.forbiddenWords || ''} 
          onChange={(e) => updateData({ forbiddenWords: e.target.value })}
          placeholder="Ex: Gírias, 'Não sei', concorrência..." />
      </div>
    </div>
  );
};

export const KnowledgeStep = ({ data, updateData }) => (
  <div className="animate-fade-in">
    <div className="step-number">PASSO 05</div>
    <h2 className="step-title">Base de Conhecimento</h2>
    <p className="step-subtitle">O que a IA precisa saber para ser imbatível?</p>
    <div className="form-group">
      <label className="form-label">Portfólio de Ofertas (Produtos/Serviços e Preços)</label>
      <textarea className="form-textarea" value={data.products || ''} 
        onChange={(e) => updateData({ products: e.target.value })}
        placeholder="Liste aqui suas ofertas e tickets..." />
    </div>
    <div className="form-group">
      <label className="form-label">Conversão Final (Call to Action)</label>
      <input type="text" className="form-input" value={data.nextStep || ''} 
        onChange={(e) => updateData({ nextStep: e.target.value })}
        placeholder="Ex: Mandar link de checkout, agendar no Calendly..." />
    </div>
  </div>
);

export const ObjectionsStep = ({ data, updateData }) => (
  <div className="animate-fade-in">
    <div className="step-number">PASSO 06</div>
    <h2 className="step-title">Inteligência Emocional</h2>
    <p className="step-subtitle">Prepare a IA para quebrar as barreiras de compra.</p>
    <div className="form-group">
      <label className="form-label">As 3 Dúvidas Mais Críticas dos Clientes</label>
      <textarea className="form-textarea" value={data.commonQuestions || ''} 
        onChange={(e) => updateData({ commonQuestions: e.target.value })}
        placeholder="Quais perguntas sempre aparecem?" />
    </div>
    <div className="form-group">
      <label className="form-label">A 'Objeção Matadora' e como vencê-la</label>
      <textarea className="form-textarea" value={data.mainObjection || ''} 
        onChange={(e) => updateData({ mainObjection: e.target.value })}
        placeholder="O que impede a venda e qual o contra-argumento?" />
    </div>
  </div>
);

export const HandoffStep = ({ data, updateData }) => (
  <div className="animate-fade-in">
    <div className="step-number">PASSO 07</div>
    <h2 className="step-title">Fronteira Humana</h2>
    <p className="step-subtitle">Defina o limite onde a IA passa o bastão para o seu time.</p>
    <div className="form-group">
      <label className="form-label">Gatilhos de Transbordo (Quando parar?)</label>
      <textarea className="form-textarea" value={data.handoffRules || ''} 
        onChange={(e) => updateData({ handoffRules: e.target.value })}
        placeholder="Ex: Quando pedem desconto específico, suporte técnico complexo..." />
    </div>
    <div className="form-group">
      <label className="form-label">Kit de Sobrevivência (Dados obrigatórios para o humano)</label>
      <input type="text" className="form-input" value={data.requiredData || ''} 
        onChange={(e) => updateData({ requiredData: e.target.value })}
        placeholder="Ex: Nome, WhatsApp, Faturamento..." />
    </div>
  </div>
);
