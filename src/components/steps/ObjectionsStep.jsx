import { useOnboarding } from '../../context/OnboardingContext';

const ObjectionsStep = () => {
  const { formData, updateData } = useOnboarding();

  return (
    <div className="animate-fade-in">
      <div className="step-number">PASSO 06</div>
      <h2 className="step-title">Inteligência Emocional</h2>
      <p className="step-subtitle">Prepare a IA para quebrar as barreiras de compra.</p>
      <div className="form-group">
        <label className="form-label">As 3 Dúvidas Mais Críticas dos Clientes</label>
        <textarea
          className="form-textarea"
          value={formData.commonQuestions || ''}
          onChange={(e) => updateData({ commonQuestions: e.target.value })}
          placeholder="Quais perguntas sempre aparecem?"
        />
      </div>
      <div className="form-group">
        <label className="form-label">A 'Objeção Matadora' e como vencê-la</label>
        <textarea
          className="form-textarea"
          value={formData.mainObjection || ''}
          onChange={(e) => updateData({ mainObjection: e.target.value })}
          placeholder="O que impede a venda e qual o contra-argumento?"
        />
      </div>
    </div>
  );
};

export default ObjectionsStep;
