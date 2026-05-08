import { useOnboarding } from '../../context/OnboardingContext';

const BusinessStep = () => {
  const { formData, updateData } = useOnboarding();

  const handleWebsiteBlur = () => {
    const val = formData.website?.trim();
    if (val && !/^https?:\/\//i.test(val)) {
      updateData({ website: `https://${val}` });
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="step-number">PASSO 02</div>
      <h2 className="step-title">Ecossistema de Negócio</h2>
      <p className="step-subtitle">Contextualize a IA sobre o universo da sua empresa.</p>
      <div className="form-group">
        <label className="form-label">Nome da Corporação / Marca</label>
        <input
          type="text" className="form-input"
          value={formData.companyName || ''}
          onChange={(e) => updateData({ companyName: e.target.value })}
          placeholder="Ex: Salomão Santos Agency"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Nicho / Setor de Atuação</label>
        <input
          type="text" className="form-input"
          value={formData.niche || ''}
          onChange={(e) => updateData({ niche: e.target.value })}
          placeholder="Ex: Infoprodutos, Imobiliário, Consultoria..."
        />
      </div>
      <div className="form-group">
        <label className="form-label">Canal de Presença (Site ou Instagram)</label>
        <input
          type="text" className="form-input"
          value={formData.website || ''}
          onChange={(e) => updateData({ website: e.target.value })}
          onBlur={handleWebsiteBlur}
          placeholder="https://..."
        />
      </div>
    </div>
  );
};

export default BusinessStep;
