import { useEffect, useState } from 'react';

export default function ScanEffect({ onComplete }) {
  const [phase, setPhase] = useState('scanning'); // scanning | revealing

  useEffect(() => {
    // Toca o som de scan
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      
      // Som de beep tecnológico
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.5);
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.8);
    } catch (e) { /* Navegador sem Web Audio */ }

    // Após 1.8s o scan termina e revela o relatório
    const timer = setTimeout(() => {
      setPhase('revealing');
      setTimeout(onComplete, 600);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`scan-overlay ${phase === 'revealing' ? 'scan-fade-out' : ''}`}>
      <div className="scan-content">
        <div className="scan-icon">🧠</div>
        <h3 className="scan-title">Processando Auditoria</h3>
        <p className="scan-subtitle">Estruturando o cérebro digital do seu agente...</p>
        <div className="scan-bar-container">
          <div className="scan-bar-fill"></div>
        </div>
        <div className="scan-steps">
          <span className="scan-step active">✓ Identidade</span>
          <span className="scan-step active">✓ Negócio</span>
          <span className="scan-step active">✓ Objetivos</span>
          <span className="scan-step active">✓ Personalidade</span>
          <span className="scan-step loading">⟳ Compilando...</span>
        </div>
      </div>
      <div className="scan-line"></div>
    </div>
  );
}
