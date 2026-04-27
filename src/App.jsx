import { useState } from 'react';
import './index.css';

// Componentes de Passo
const WelcomeStep = ({ onNext }) => (
  <div className="animate-fade-in" style={{ textAlign: 'center' }}>
    <h2 className="step-title">Bem-vindo ao Onboarding da Salomão Santos</h2>
    <p className="step-subtitle">
      Vamos mapear a estrutura perfeita para a sua Inteligência Artificial. 
      Este questionário leva cerca de 10-15 minutos e nos ajudará a criar um cérebro digital sob medida para a sua operação.
    </p>
    <div style={{ marginTop: '2rem' }}>
      <button className="btn btn-primary" onClick={onNext}>🧠 Vamos Lá! 🤖</button>
    </div>
  </div>
);

const NameStep = ({ data, updateData }) => (
  <div className="animate-fade-in">
    <h2 className="step-title">1. Identidade</h2>
    <p className="step-subtitle">Primeiro passo: como vamos chamar o seu novo colaborador digital?</p>
    
    <div className="form-group">
      <label className="form-label" style={{ fontSize: '1.3rem' }}>Como vai se chamar Seu Agente?</label>
      <input 
        type="text" 
        className="form-input" 
        value={data.aiName || ''} 
        onChange={(e) => updateData({ aiName: e.target.value })}
        placeholder="Ex: Salomão, Nina, Bot Virtual..."
        style={{ fontSize: '1.2rem', padding: '1.2rem' }}
      />
    </div>
  </div>
);

const BusinessStep = ({ data, updateData }) => (
  <div className="animate-fade-in">
    <h2 className="step-title">2. O Seu Negócio</h2>
    <p className="step-subtitle">Conte-nos o básico para contextualizarmos a IA.</p>
    
    <div className="form-group">
      <label className="form-label">Nome da Empresa / Marca</label>
      <input 
        type="text" 
        className="form-input" 
        value={data.companyName || ''} 
        onChange={(e) => updateData({ companyName: e.target.value })}
        placeholder="Ex: Empresa Exemplo, Clínica Sorriso..."
      />
    </div>
    
    <div className="form-group">
      <label className="form-label">Nicho de Atuação</label>
      <input 
        type="text" 
        className="form-input" 
        value={data.niche || ''} 
        onChange={(e) => updateData({ niche: e.target.value })}
        placeholder="Ex: Venda de Peças, Odontologia, Franquias..."
      />
    </div>

    <div className="form-group">
      <label className="form-label">Site ou Instagram (Opcional)</label>
      <input 
        type="text" 
        className="form-input" 
        value={data.website || ''} 
        onChange={(e) => updateData({ website: e.target.value })}
        placeholder="https://..."
      />
    </div>
  </div>
);

const ObjectiveStep = ({ data, updateData }) => {
  const options = [
    { id: 'vendas', icon: '💰', title: 'Vendas & Qualificação', desc: 'Foco em vender e qualificar leads' },
    { id: 'suporte', icon: '🛠️', title: 'Suporte Técnico', desc: 'Resolver dúvidas e problemas' },
    { id: 'agendamento', icon: '📅', title: 'Agendamento', desc: 'Marcar consultas ou reuniões' },
    { id: 'misto', icon: '🔄', title: 'Híbrido', desc: 'Várias funções ao mesmo tempo' }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="step-title">3. Objetivo Principal</h2>
      <p className="step-subtitle">Qual será a missão número um desta Inteligência Artificial?</p>
      
      <div className="options-grid">
        {options.map(opt => (
          <div 
            key={opt.id}
            className={`option-card ${data.mainObjective === opt.title ? 'selected' : ''}`}
            onClick={() => updateData({ mainObjective: opt.title })}
          >
            <div className="option-icon">{opt.icon}</div>
            <div className="option-title">{opt.title}</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{opt.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PersonaStep = ({ data, updateData }) => {
  const options = [
    { id: 'amigavel', icon: '😊', title: 'Amigável e Descontraída' },
    { id: 'formal', icon: '👔', title: 'Formal e Direta' },
    { id: 'especialista', icon: '🧠', title: 'Especialista Consultiva' },
    { id: 'animada', icon: '🎉', title: 'Enérgica e Comercial' }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="step-title">4. A Personalidade</h2>
      <p className="step-subtitle">Como sua IA deve se portar com os clientes?</p>

      <div className="form-label">Tom de Voz da IA</div>
      <div className="options-grid" style={{ marginBottom: '2rem' }}>
        {options.map(opt => (
          <div 
            key={opt.id}
            className={`option-card ${data.tone === opt.title ? 'selected' : ''}`}
            onClick={() => updateData({ tone: opt.title })}
          >
            <div className="option-icon">{opt.icon}</div>
            <div className="option-title">{opt.title}</div>
          </div>
        ))}
      </div>
      
      <div className="form-group">
        <label className="form-label">Palavras Proibidas (Termos que ela NUNCA deve usar)</label>
        <input 
          type="text" 
          className="form-input" 
          value={data.forbiddenWords || ''} 
          onChange={(e) => updateData({ forbiddenWords: e.target.value })}
          placeholder="Ex: 'Não sei', gírias, palavrões..."
        />
      </div>
    </div>
  );
};

const KnowledgeStep = ({ data, updateData }) => (
  <div className="animate-fade-in">
    <h2 className="step-title">5. Produtos e Serviços</h2>
    <p className="step-subtitle">O que a IA está vendendo ou defendendo?</p>
    
    <div className="form-group">
      <label className="form-label">Liste os principais produtos ou serviços (e preços, se aplicável)</label>
      <textarea 
        className="form-textarea" 
        value={data.products || ''} 
        onChange={(e) => updateData({ products: e.target.value })}
        placeholder="Ex: 
- Produto Premium: R$ 10.000,00.
- Consulta Inicial: R$ 150,00."
      />
    </div>

    <div className="form-group">
      <label className="form-label">Qual o "Próximo Passo" que a IA deve incentivar?</label>
      <input 
        type="text" 
        className="form-input" 
        value={data.nextStep || ''} 
        onChange={(e) => updateData({ nextStep: e.target.value })}
        placeholder="Ex: Clicar no link de pagamento, passar os dados para agendamento..."
      />
    </div>
  </div>
);

const ObjectionsStep = ({ data, updateData }) => (
  <div className="animate-fade-in">
    <h2 className="step-title">6. Dúvidas e Objeções</h2>
    <p className="step-subtitle">Vamos preparar a IA para os desafios reais da operação.</p>
    
    <div className="form-group">
      <label className="form-label">Quais são as 3 dúvidas que os clientes mais perguntam?</label>
      <textarea 
        className="form-textarea" 
        value={data.commonQuestions || ''} 
        onChange={(e) => updateData({ commonQuestions: e.target.value })}
        placeholder="1. ... 
2. ...
3. ..."
      />
    </div>

    <div className="form-group">
      <label className="form-label">Qual a principal objeção de venda e como a IA deve rebatê-la?</label>
      <textarea 
        className="form-textarea" 
        value={data.mainObjection || ''} 
        onChange={(e) => updateData({ mainObjection: e.target.value })}
        placeholder="Ex: Quando dizem que está caro, a IA deve focar no valor agregado e ROI a longo prazo..."
      />
    </div>
  </div>
);

const HandoffStep = ({ data, updateData }) => (
  <div className="animate-fade-in">
    <h2 className="step-title">7. Regras de Transbordo (Humano)</h2>
    <p className="step-subtitle">A IA sabe até onde ir. Quando ela deve passar o bastão para sua equipe?</p>
    
    <div className="form-group">
      <label className="form-label">Em quais situações específicas a IA deve transferir para um humano?</label>
      <textarea 
        className="form-textarea" 
        value={data.handoffRules || ''} 
        onChange={(e) => updateData({ handoffRules: e.target.value })}
        placeholder="Ex: Problemas financeiros, dúvidas sobre devolução, ou quando o cliente estiver irritado."
      />
    </div>

    <div className="form-group">
      <label className="form-label">Quais dados a IA OBRIGATORIAMENTE deve coletar antes de transferir?</label>
      <input 
        type="text" 
        className="form-input" 
        value={data.requiredData || ''} 
        onChange={(e) => updateData({ requiredData: e.target.value })}
        placeholder="Ex: Nome, Cidade, Estado e Email."
      />
    </div>
  </div>
);

const ReviewStep = ({ data }) => (
  <div className="animate-fade-in" id="printable-area">
    
    <div className="print-header" style={{ display: 'none', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '2px solid #d4af37', paddingBottom: '1rem' }}>
      <img src="/logo_salomao.png" alt="Salomão Santos" style={{ height: '50px' }} />
      <img src="/LOGO_WEEKE.png" alt="Weeke" style={{ height: '40px' }} />
    </div>

    <h2 className="step-title" style={{ textAlign: 'center' }}>Resultado</h2>
    <p className="step-subtitle" style={{ textAlign: 'center' }}>
      Resumo estratégico para a estruturação do seu projeto de inteligência artificial.
    </p>

    <div className="review-section" style={{ textAlign: 'center', backgroundColor: 'rgba(212, 175, 55, 0.05)', border: '2px solid var(--accent)' }}>
      <div className="review-label" style={{ marginBottom: '0.5rem' }}>Nome do Agente</div>
      <div className="review-value" style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--accent)', margin: 0 }}>
        {data.aiName || 'Não definido'}
      </div>
    </div>

    <div className="review-section">
      <div className="review-title">Perfil do Negócio</div>
      <div className="review-item">
        <div className="review-label">Empresa / Marca</div>
        <div className="review-value">{data.companyName || 'Não informado'}</div>
      </div>
      <div className="review-item">
        <div className="review-label">Nicho de Atuação</div>
        <div className="review-value">{data.niche || 'Não informado'}</div>
      </div>
      <div className="review-item">
        <div className="review-label">Site / Link</div>
        <div className="review-value">{data.website || 'Não informado'}</div>
      </div>
    </div>

    <div className="review-section">
      <div className="review-title">Objetivos e Personalidade</div>
      <div className="review-item">
        <div className="review-label">Objetivo Principal</div>
        <div className="review-value">{data.mainObjective || 'Não informado'}</div>
      </div>
      <div className="review-item">
        <div className="review-label">Tom de Voz</div>
        <div className="review-value">{data.tone || 'Não informado'}</div>
      </div>
      <div className="review-item">
        <div className="review-label">Palavras Proibidas</div>
        <div className="review-value">{data.forbiddenWords || 'Nenhuma restrição especial'}</div>
      </div>
    </div>

    <div className="review-section">
      <div className="review-title">Conhecimento e Objeções</div>
      <div className="review-item">
        <div className="review-label">Produtos e Serviços</div>
        <div className="review-value">{data.products || 'Não informado'}</div>
      </div>
      <div className="review-item">
        <div className="review-label">Próximo Passo / CTA</div>
        <div className="review-value">{data.nextStep || 'Não informado'}</div>
      </div>
      <div className="review-item">
        <div className="review-label">Dúvidas Frequentes</div>
        <div className="review-value">{data.commonQuestions || 'Não informado'}</div>
      </div>
      <div className="review-item">
        <div className="review-label">Tratativa de Objeções</div>
        <div className="review-value">{data.mainObjection || 'Não informado'}</div>
      </div>
    </div>

    <div className="review-section">
      <div className="review-title">Regras de Operação e Transbordo</div>
      <div className="review-item">
        <div className="review-label">Situações de Transbordo</div>
        <div className="review-value">{data.handoffRules || 'Não informado'}</div>
      </div>
      <div className="review-item">
        <div className="review-label">Dados Obrigatórios para Transbordo</div>
        <div className="review-value">{data.requiredData || 'Não informado'}</div>
      </div>
    </div>

    <div className="confidential-notice" style={{ marginTop: '3rem', padding: '1rem', borderTop: '1px solid var(--border)', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
      <strong>CONFIDENCIAL:</strong> Este documento é de uso exclusivo interno para a equipe da Salomão Santos e Weeke, destinado à estruturação técnica e comercial da IA. O compartilhamento não autorizado é proibido.
    </div>
  </div>
);

const RobotHelper = ({ currentStep, progressPercentage }) => {
  if (currentStep === 8) return null;

  const getTip = () => {
    switch (currentStep) {
      case 0: return "Olá! Eu sou o Salomão. Vou te acompanhar por aqui. Vamos mapear o cérebro da sua IA juntos!";
      case 1: return "Se ainda não tiver pensado num nome incrível, não se preocupe! Pode deixar em branco por enquanto e decidimos isso depois.";
      case 2: return "Dica: Seja específico no nicho para que eu entenda o contexto exato do seu mercado!";
      case 3: return "Lembre-se: Escolher o objetivo principal me foca na meta que mais importa para você.";
      case 4: return "A personalidade dita como eu vou conversar com seus clientes. Escolha com carinho!";
      case 5: return "Detalhe bem os produtos e serviços. Eu preciso saber exatamente o que estou vendendo.";
      case 6: return "Pense nas perguntas que sua equipe mais responde. Eu vou assumir essa linha de frente!";
      case 7: return "Regras claras de transbordo garantem que eu saiba a hora exata de chamar sua equipe humana.";
      default: return "Estou aqui para ajudar!";
    }
  };

  return (
    <div className="robot-helper">
      <div className="robot-speech-bubble">
        <p className="robot-tip"><strong>Salomão:</strong> {getTip()}</p>
        {currentStep > 0 && (
          <p className="robot-progress">Conclusão: {Math.round(progressPercentage)}%</p>
        )}
      </div>
      <div className="robot-avatar">
        <img 
          src="/salomao_avatar.jpg.png" 
          alt="Salomão" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Salomão+Santos&background=d4af37&color=fff&size=150'; }} 
        />
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const totalSteps = 8; // Welcome (0) + 7 steps + Review (8)

  const updateData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    window.scrollTo(0, 0);
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    window.scrollTo(0, 0);
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handlePrint = () => {
    window.print();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <WelcomeStep onNext={nextStep} />;
      case 1: return <NameStep data={formData} updateData={updateData} />;
      case 2: return <BusinessStep data={formData} updateData={updateData} />;
      case 3: return <ObjectiveStep data={formData} updateData={updateData} />;
      case 4: return <PersonaStep data={formData} updateData={updateData} />;
      case 5: return <KnowledgeStep data={formData} updateData={updateData} />;
      case 6: return <ObjectionsStep data={formData} updateData={updateData} />;
      case 7: return <HandoffStep data={formData} updateData={updateData} />;
      case 8: return <ReviewStep data={formData} />;
      default: return <WelcomeStep onNext={nextStep} />;
    }
  };

  const progressPercentage = currentStep === 0 ? 0 : currentStep === totalSteps ? 100 : ((currentStep) / (totalSteps - 1)) * 100;

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/logo_salomao.png" alt="Salomão Santos" style={{ height: '40px' }} onError={(e) => e.target.style.display='none'} />
          <div className="logo">Salomão<span>Santos</span></div>
          <span style={{ color: 'var(--text-secondary)' }}>x</span>
          <img src="/LOGO_WEEKE.png" alt="Weeke" style={{ height: '30px' }} onError={(e) => e.target.style.display='none'} />
        </div>
        {currentStep > 0 && currentStep < totalSteps && (
          <div className="progress-container">
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="progress-text">Passo {currentStep} de {totalSteps - 1}</div>
          </div>
        )}
      </header>

      <main className="main-content">
        <div className="wizard-card" key={currentStep}>
          {renderStep()}

          {currentStep > 0 && currentStep < totalSteps && (
            <div className="button-group">
              <button className="btn btn-secondary" onClick={prevStep}>Voltar</button>
              <button className="btn btn-primary" onClick={nextStep}>
                {currentStep === totalSteps - 1 ? 'Finalizar Auditoria' : 'Próximo Passo'}
              </button>
            </div>
          )}

          {currentStep === totalSteps && (
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
              
              <div style={{ 
                backgroundColor: 'rgba(212, 175, 55, 0.1)', 
                border: '1px solid var(--accent)', 
                borderRadius: '8px', 
                padding: '1.5rem', 
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem'
              }}>
                <img 
                  src="/salomao_avatar.jpg.png" 
                  alt="Salomão" 
                  style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent)' }} 
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Salomão+Santos&background=d4af37&color=fff&size=150'; }} 
                />
                <div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.3rem', fontSize: '1.1rem' }}>Mensagem do Salomão:</h4>
                  <p style={{ margin: 0, lineHeight: 1.5 }}>
                    Assim que você estiver satisfeito com seu resumo estratégico, faça o <strong>Download (Gerar PDF)</strong> e envie para nossa equipe para que possamos dar início ao processo de construção do seu Agente de IA.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <button className="btn btn-secondary" onClick={() => setCurrentStep(7)}>Voltar para Edição</button>
                <button className="btn btn-primary" onClick={handlePrint}>Gerar PDF Histórico</button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <RobotHelper currentStep={currentStep} progressPercentage={progressPercentage} />
    </div>
  );
}
