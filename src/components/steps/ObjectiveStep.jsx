import { useOnboarding } from '../../context/OnboardingContext';
import TiltCard from '../TiltCard';
import { playClickSound } from '../../utils/sounds';

const OPTIONS = [
  { id: 'vendas',       icon: '💰', title: 'Vendas & Qualificação',  desc: 'Transformar leads em clientes pagantes.' },
  { id: 'suporte',      icon: '🛠️', title: 'Suporte & Retenção',     desc: 'Encantar e resolver problemas com agilidade.' },
  { id: 'agendamento',  icon: '📅', title: 'Agendamento / SDR',       desc: 'Lotar sua agenda com leads qualificados.' },
  { id: 'misto',        icon: '🔄', title: 'Agente Híbrido',          desc: 'Múltiplas funções em um único cérebro.' },
];

const ObjectiveStep = () => {
  const { formData, updateData } = useOnboarding();

  return (
    <div className="animate-fade-in">
      <div className="step-number">PASSO 03</div>
      <h2 className="step-title">Missão Principal</h2>
      <p className="step-subtitle">Qual o KPI número um que esta IA deve bater?</p>
      <div className="options-grid">
        {OPTIONS.map((opt) => (
          <TiltCard
            key={opt.id}
            className={`option-card ${formData.mainObjective === opt.title ? 'selected' : ''}`}
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

export default ObjectiveStep;
