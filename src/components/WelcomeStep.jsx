import React from 'react';

const WelcomeStep = ({ onNext }) => (
  <div className="animate-fade-in" style={{ textAlign: 'center', padding: '2rem 0' }}>
    <div className="welcome-badge">ONBOARDING ESTRATÉGICO</div>
    <h2 className="step-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
      Dê Vida à Sua <br /><span>Inteligência Artificial</span>
    </h2>
    <p className="step-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem' }}>
      Vamos mapear a estrutura perfeita para o seu Agente Digital. 
      Este processo transformará sua operação em uma máquina de escala com IA.
    </p>
    <div className="welcome-features">
      <div className="feature-item"><span>🧠</span> Mapeamento de Cérebro</div>
      <div className="feature-item"><span>🎯</span> Definição de Metas</div>
      <div className="feature-item"><span>🚀</span> Escala Automática</div>
    </div>
    <div style={{ marginTop: '3rem' }}>
      <button className="btn btn-primary btn-xl" onClick={onNext}>
        Iniciar Jornada 🤖
      </button>
    </div>
  </div>
);

export default WelcomeStep;
