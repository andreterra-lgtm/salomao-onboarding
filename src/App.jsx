import { useState, useEffect } from 'react';
import './index.css';

import WelcomeStep from './components/WelcomeStep';
import { 
  NameStep, BusinessStep, ObjectiveStep, 
  PersonaStep, KnowledgeStep, ObjectionsStep, HandoffStep 
} from './components/FormSteps';
import ReviewStep from './components/ReviewStep';
import RobotHelper from './components/RobotHelper';
import ScanEffect from './components/ScanEffect';
import { playClickSound, playSuccessSound } from './utils/sounds';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showScan, setShowScan] = useState(false);
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('salomao_onboarding_data');
    return saved ? JSON.parse(saved) : {};
  });

  const totalSteps = 8;

  useEffect(() => {
    localStorage.setItem('salomao_onboarding_data', JSON.stringify(formData));
  }, [formData]);

  const updateData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Se for o último passo antes do relatório, mostrar scan
    if (currentStep === totalSteps - 1) {
      setShowScan(true);
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleScanComplete = () => {
    playSuccessSound();
    setShowScan(false);
    setCurrentStep(8);
  };

  const handlePrint = () => {
    window.print();
  };

  const resetForm = () => {
    if (window.confirm("Deseja realmente reiniciar o mapeamento?")) {
      setFormData({});
      setCurrentStep(0);
      localStorage.removeItem('salomao_onboarding_data');
    }
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

  const progressPercentage = currentStep === 0 ? 0 
    : currentStep === totalSteps ? 100 
    : ((currentStep) / (totalSteps - 1)) * 100;

  return (
    <div className="app-container">
      {/* Scan Overlay */}
      {showScan && <ScanEffect onComplete={handleScanComplete} />}

      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <div className="logo">Salomão<span>Santos</span></div>
          <div className="header-divider" />
          <img 
            src="/LOGO_WEEKE.png" alt="Weeke" 
            style={{ height: '22px', opacity: 0.75, filter: 'brightness(2)' }} 
            onError={(e) => e.target.style.display='none'} 
          />
        </div>
        
        {currentStep > 0 && currentStep < totalSteps && (
          <div className="progress-container">
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <div className="progress-text">Passo {currentStep} de {totalSteps - 1}</div>
          </div>
        )}

        {currentStep === totalSteps && (
          <button className="btn btn-secondary" onClick={resetForm} style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}>
            ↩ Reiniciar
          </button>
        )}
      </header>

      {/* Main */}
      <main className="main-content">
        <div className="wizard-card" key={currentStep}>
          {renderStep()}

          {currentStep > 0 && currentStep < totalSteps && (
            <div className="button-group">
              <button className="btn btn-secondary" onClick={prevStep}>← Voltar</button>
              <button className="btn btn-primary" onClick={nextStep}>
                {currentStep === totalSteps - 1 ? '🔍 Gerar Auditoria' : 'Continuar →'}
              </button>
            </div>
          )}

          {currentStep === totalSteps && (
            <div className="final-actions">
              <button className="btn btn-secondary" onClick={() => { playClickSound(); setCurrentStep(7); }}>
                ✏️ Editar Dados
              </button>
              <button className="btn btn-primary" onClick={handlePrint}>
                ⬇️ Download PDF Estratégico
              </button>
            </div>
          )}
        </div>
      </main>
      
      <RobotHelper currentStep={currentStep} progressPercentage={progressPercentage} />
    </div>
  );
}
