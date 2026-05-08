import { useOnboarding } from '../../context/OnboardingContext';
import TiltCard from '../TiltCard';
import { playClickSound } from '../../utils/sounds';

const OPTIONS = [
  { id: 'amigavel',    icon: '😊', title: 'Amigável e Empática' },
  { id: 'formal',      icon: '👔', title: 'Sóbria e Profissional' },
  { id: 'especialista',icon: '🧠', title: 'Autoridade Consultiva' },
  { id: 'animada',     icon: '🎉', title: 'Persuasiva e Energética' },
];

const PersonaStep = () => {
  const { formData, updateData } = useOnboarding();

  return (
    <div className="animate-fade-in">
      <div className="step-number">PASSO 04</div>
      <h2 className="step-title">DNA de Personalidade</h2>
      <p className="step-subtitle">Como sua IA deve se comportar na linha de frente?</p>
      <div className="options-grid" style={{ marginBottom: '2.5rem' }}>
        {OPTIONS.map((opt) => (
          <TiltCard
            key={opt.id}
            className={`option-card ${formData.tone === opt.title ? 'selected' : ''}`}
            onClick={() => { playClickSound(); updateData({ tone: opt.title }); }}
          >
            <div className="option-icon">{opt.icon}</div>
            <div className="option-title">{opt.title}</div>
          </TiltCard>
        ))}
      </div>
      <div className="form-group">
        <label className="form-label">Blindagem de Vocabulário (Termos Proibidos)</label>
        <input
          type="text" className="form-input"
          value={formData.forbiddenWords || ''}
          onChange={(e) => updateData({ forbiddenWords: e.target.value })}
          placeholder="Ex: Gírias, 'Não sei', concorrência..."
        />
      </div>
    </div>
  );
};

export default PersonaStep;
