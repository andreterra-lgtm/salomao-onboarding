import { useOnboarding } from '../../context/OnboardingContext';

const HandoffStep = () => {
  const { formData, updateData } = useOnboarding();

  return (
    <div className="animate-fade-in">
      <div className="step-number">PASSO 07</div>
      <h2 className="step-title">Fronteira Humana</h2>
      <p className="step-subtitle">Defina o limite onde a IA passa o bastão para o seu time.</p>
      <div className="form-group">
        <label className="form-label">Gatilhos de Transbordo (Quando parar?)</label>
        <textarea
          className="form-textarea"
          value={formData.handoffRules || ''}
          onChange={(e) => updateData({ handoffRules: e.target.value })}
          placeholder="Ex: Quando pedem desconto específico, suporte técnico complexo..."
        />
      </div>
      <div className="form-group">
        <label className="form-label">Kit de Sobrevivência (Dados obrigatórios para o humano)</label>
        <input
          type="text" className="form-input"
          value={formData.requiredData || ''}
          onChange={(e) => updateData({ requiredData: e.target.value })}
          placeholder="Ex: Nome, WhatsApp, Faturamento..."
        />
      </div>
    </div>
  );
};

export default HandoffStep;
