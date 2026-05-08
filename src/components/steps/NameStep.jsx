import { useOnboarding } from '../../context/OnboardingContext';

const NameStep = () => {
  const { formData, updateData } = useOnboarding();

  return (
    <div className="animate-fade-in">
      <div className="step-number">PASSO 01</div>
      <h2 className="step-title">Identidade Digital</h2>
      <p className="step-subtitle">Como vamos chamar o seu novo colaborador de elite?</p>
      <div className="form-group">
        <label className="form-label">Nome do Agente</label>
        <input
          type="text"
          className="form-input"
          value={formData.aiName || ''}
          onChange={(e) => updateData({ aiName: e.target.value })}
          placeholder="Ex: Salomão, Sophia, Jarvis..."
        />
        <small className="form-help">Escolha um nome que transmita a autoridade da sua marca.</small>
      </div>
    </div>
  );
};

export default NameStep;
