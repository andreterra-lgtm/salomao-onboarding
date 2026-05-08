import { useOnboarding } from '../context/OnboardingContext';
import { STORAGE_KEY, STEP_STORAGE_KEY } from '../constants';
import { playClickSound } from '../utils/sounds';

const WelcomeStep = () => {
  const { nextStep, goToStep, startFresh } = useOnboarding();

  // Read saved session directly from localStorage (not from stale context state)
  const savedStep = (() => {
    try { return parseInt(localStorage.getItem(STEP_STORAGE_KEY) || '0', 10) || 0; }
    catch { return 0; }
  })();
  const savedData = (() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch { return {}; }
  })();
  const hasSavedSession = savedStep > 0 && Object.keys(savedData).length > 0;

  const handleStart = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    nextStep();
  };

  const handleResume = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    goToStep(savedStep);
  };

  const handleStartFresh = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    startFresh();
  };

  return (
    <div className="animate-fade-in" style={{ textAlign: 'center', padding: '2rem 0' }}>
      <div className="welcome-badge">ONBOARDING ESTRATÉGICO</div>
      <h2 className="step-title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
        Dê Vida à Sua <br /><span>Inteligência Artificial</span>
      </h2>
      <p className="step-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.2rem' }}>
        Vamos mapear a estrutura perfeita para o seu Agente Digital.
        Este processo transformará sua operação em uma máquina de escala com IA.
      </p>

      <div className="welcome-features">
        <div className="feature-item"><span>🧠</span> Mapeamento de Cérebro</div>
        <div className="feature-item"><span>🎯</span> Definição de Metas</div>
        <div className="feature-item"><span>🚀</span> Escala Automática</div>
      </div>

      {hasSavedSession ? (
        <div className="session-banner">
          <div className="session-banner-icon">⚡</div>
          <p className="session-banner-text">
            Você tem um mapeamento em andamento — <strong>Passo {savedStep} de 7</strong>.<br />
            Deseja continuar de onde parou?
          </p>
          <div className="session-banner-actions">
            <button className="btn btn-primary" onClick={handleResume}>
              Continuar de onde parou →
            </button>
            <button className="btn btn-secondary" onClick={handleStartFresh}>
              Começar do zero
            </button>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '3rem' }}>
          <button className="btn btn-primary btn-xl" onClick={handleStart}>
            Iniciar Jornada 🤖
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomeStep;
