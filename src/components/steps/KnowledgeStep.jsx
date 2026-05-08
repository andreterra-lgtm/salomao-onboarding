import { useOnboarding } from '../../context/OnboardingContext';

const KnowledgeStep = () => {
  const { formData, updateData } = useOnboarding();

  return (
    <div className="animate-fade-in">
      <div className="step-number">PASSO 05</div>
      <h2 className="step-title">Base de Conhecimento</h2>
      <p className="step-subtitle">O que a IA precisa saber para ser imbatível?</p>
      <div className="form-group">
        <label className="form-label">Portfólio de Ofertas (Produtos/Serviços e Preços)</label>
        <textarea
          className="form-textarea"
          value={formData.products || ''}
          onChange={(e) => updateData({ products: e.target.value })}
          placeholder="Liste aqui suas ofertas e tickets..."
        />
      </div>
      <div className="form-group">
        <label className="form-label">Conversão Final (Call to Action)</label>
        <input
          type="text" className="form-input"
          value={formData.nextStep || ''}
          onChange={(e) => updateData({ nextStep: e.target.value })}
          placeholder="Ex: Mandar link de checkout, agendar no Calendly..."
        />
      </div>
    </div>
  );
};

export default KnowledgeStep;
