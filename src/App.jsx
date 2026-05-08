import './index.css';
import { useOnboarding } from './context/OnboardingContext';
import { playClickSound, playSuccessSound } from './utils/sounds';

import WelcomeStep from './components/WelcomeStep';
import ReviewStep from './components/ReviewStep';
import RobotHelper from './components/RobotHelper';
import ScanEffect from './components/ScanEffect';

// Loaded lazily in FASE 7 — imported from steps/
import NameStep from './components/steps/NameStep';
import BusinessStep from './components/steps/BusinessStep';
import ObjectiveStep from './components/steps/ObjectiveStep';
import PersonaStep from './components/steps/PersonaStep';
import KnowledgeStep from './components/steps/KnowledgeStep';
import ObjectionsStep from './components/steps/ObjectionsStep';
import HandoffStep from './components/steps/HandoffStep';

export default function App() {
  const {
    currentStep, totalSteps,
    showScan, handleScanComplete: ctxScanComplete,
    nextStep, prevStep, goToStep, resetForm,
  } = useOnboarding();

  const progressPercentage =
    currentStep === 0 ? 0
    : currentStep === totalSteps ? 100
    : (currentStep / (totalSteps - 1)) * 100;

  const handleNavNext = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    nextStep();
  };

  const handleNavPrev = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    prevStep();
  };

  const handleScanComplete = () => {
    playSuccessSound();
    ctxScanComplete();
  };

  const handleReset = () => {
    if (window.confirm('Deseja realmente reiniciar o mapeamento?')) {
      resetForm();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:  return <WelcomeStep />;
      case 1:  return <NameStep />;
      case 2:  return <BusinessStep />;
      case 3:  return <ObjectiveStep />;
      case 4:  return <PersonaStep />;
      case 5:  return <KnowledgeStep />;
      case 6:  return <ObjectionsStep />;
      case 7:  return <HandoffStep />;
      case 8:  return <ReviewStep />;
      default: return <WelcomeStep />;
    }
  };

  return (
    <div className="app-container">
      {showScan && <ScanEffect onComplete={handleScanComplete} />}

      <header className="header">
        <div className="logo-container">
          <div className="logo">Salomão<span>Santos</span></div>
          <div className="header-divider" />
          <img
            src="/LOGO_WEEKE.png" alt="Weeke"
            style={{ height: '22px', opacity: 0.75, filter: 'brightness(2)' }}
            onError={(e) => (e.target.style.display = 'none')}
          />
        </div>

        {currentStep > 0 && currentStep < totalSteps && (
          <div className="progress-container">
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }} />
            </div>
            <div className="progress-text">Passo {currentStep} de {totalSteps - 1}</div>
          </div>
        )}

        {currentStep === totalSteps && (
          <button
            className="btn btn-secondary"
            onClick={handleReset}
            style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}
          >
            ↩ Reiniciar
          </button>
        )}
      </header>

      <main className="main-content">
        <div className="wizard-card" key={currentStep}>
          {renderStep()}

          {currentStep > 0 && currentStep < totalSteps && (
            <div className="button-group">
              <button className="btn btn-secondary" onClick={handleNavPrev}>← Voltar</button>
              <button className="btn btn-primary" onClick={handleNavNext}>
                {currentStep === totalSteps - 1 ? '🔍 Gerar Auditoria' : 'Continuar →'}
              </button>
            </div>
          )}

          {currentStep === totalSteps && (
            <div className="final-actions">
              <button className="btn btn-secondary" onClick={() => { playClickSound(); goToStep(7); }}>
                ✏️ Editar Dados
              </button>
              <button className="btn btn-primary" onClick={() => window.print()}>
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
