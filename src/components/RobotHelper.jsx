import React, { useState, useEffect } from 'react';

const RobotHelper = ({ currentStep, progressPercentage }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getTip = () => {
    switch (currentStep) {
      case 0: return "Olá! Sou o Salomão. Vou guiar você na criação do cérebro da sua nova IA.";
      case 1: return "Um bom nome cria conexão imediata. Como você quer que seus clientes chamem seu Agente?";
      case 2: return "Quanto mais eu souber sobre seu nicho, mais afiada será a linguagem da IA.";
      case 3: return "Foco total no objetivo! Isso define a prioridade de cada conversa.";
      case 4: return "A personalidade é a alma do negócio. Escolha o tom que mais combina com sua marca.";
      case 5: return "Seja detalhista nos preços e condições. Informação é poder de fechamento.";
      case 6: return "Antecipar dúvidas é o segredo para uma venda sem atritos.";
      case 7: return "Defina bem o momento do humano entrar. Isso garante a melhor experiência pro cliente.";
      default: return "Estou aqui para garantir que sua IA seja um sucesso!";
    }
  };

  useEffect(() => {
    const text = getTip();
    setDisplayText('');
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [currentStep]);

  if (currentStep === 8) return null;

  return (
    <div className="robot-helper">
      <div className="robot-speech-bubble-premium">
        <div className="robot-header-mini">CONSULTOR ESTRATÉGICO</div>
        <p className="robot-tip">"{displayText}"{isTyping && <span className="typing-cursor">|</span>}</p>
        {currentStep > 0 && (
          <div className="robot-progress-container">
            <div className="robot-progress-label">Mapeamento</div>
            <div className="robot-progress-bar">
              <div className="robot-progress-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="robot-progress-value">{Math.round(progressPercentage)}%</div>
          </div>
        )}
      </div>
      <div className="robot-avatar-premium">
        <div className="robot-avatar-inner">
          <img 
            src="/salomao_avatar.jpg.png" 
            alt="Salomão"
            onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Salomão+Santos&background=8b2c2c&color=fff&size=150'; }} 
          />
          <div className="avatar-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default RobotHelper;
