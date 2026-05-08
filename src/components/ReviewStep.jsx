import { useState } from 'react';
import { useOnboarding } from '../context/OnboardingContext';
import { computeScore } from '../utils/completenessScore';
import { sendReport } from '../utils/sendReport';

const Field = ({ label, value }) => (
  <div className="review-stack-item">
    <span className="review-small-label">{label}</span>
    <div className="review-long-text">
      {value || <em style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>Não informado</em>}
    </div>
  </div>
);

const CardHeader = ({ title, step, onEditStep }) => (
  <div className="review-card-header">
    <div className="review-title-premium">{title}</div>
    {onEditStep && (
      <button className="review-card-edit-btn" onClick={() => onEditStep(step)}>
        ✏️ Editar
      </button>
    )}
  </div>
);

const ScoreRing = ({ score, suggestions, onEditStep }) => {
  const color =
    score >= 80 ? 'var(--success)' :
    score >= 50 ? 'var(--accent-gold)' :
    'var(--accent-light)';

  return (
    <div className="score-ring-wrapper">
      <div
        className="score-ring"
        style={{
          background: `conic-gradient(${color} 0% ${score}%, rgba(255,255,255,0.05) ${score}% 100%)`,
        }}
      >
        <div className="score-ring-inner">
          <span className="score-value">{score}%</span>
          <span className="score-label">completo</span>
        </div>
      </div>
      <div className="score-suggestions">
        {suggestions.length === 0 ? (
          <p style={{ color: 'var(--success)', fontWeight: 600, fontSize: '0.9rem' }}>
            ✅ Dossiê 100% completo!
          </p>
        ) : (
          <>
            <h4>Campos para melhorar:</h4>
            {suggestions.map((s) => (
              <div key={s.key} className="score-suggestion-item">
                <span>→</span>
                <button
                  className="score-suggestion-link"
                  onClick={() => onEditStep(s.step)}
                >
                  {s.label}
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const ReviewStep = () => {
  const { formData, goToStep } = useOnboarding();
  const [emailState, setEmailState] = useState('idle');

  const now = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  const { score, suggestions } = computeScore(formData);

  const handleSendEmail = async () => {
    setEmailState('sending');
    try {
      await sendReport(formData);
      setEmailState('sent');
    } catch {
      setEmailState('error');
    }
  };

  const emailBtnLabel = {
    idle:    '📧 Enviar Relatório por E-mail',
    sending: '⏳ Enviando...',
    sent:    '✅ Enviado com sucesso!',
    error:   '❌ Erro — Tentar novamente',
  }[emailState];

  return (
    <div className="animate-fade-in" id="printable-area">

      {/* Cabeçalho só para impressão */}
      <div className="print-header">
        <img src="/logo_salomao.png" alt="Salomão Santos" style={{ height: '55px' }} />
        <div style={{ textAlign: 'right' }}>
          <h3 style={{ margin: 0, color: '#8b2c2c', fontFamily: 'Outfit, sans-serif' }}>RELATÓRIO DE ESTRUTURAÇÃO IA</h3>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#555' }}>SALOMÃO SANTOS × WEEKE | {now}</p>
        </div>
      </div>

      <div className="review-badge">✅ ESTRATÉGIA FINALIZADA</div>
      <h2 className="step-title" style={{ textAlign: 'center', fontSize: '2.4rem' }}>Dossiê do Agente</h2>
      <p className="step-subtitle" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Mapeamento completo do cérebro digital que será implementado.
      </p>

      <ScoreRing score={score} suggestions={suggestions} onEditStep={goToStep} />

      <div className="review-grid">

        <div className="review-card highlight">
          <CardHeader title="🤖 Identidade Digital" step={1} onEditStep={goToStep} />
          <div className="review-value-hero">{formData.aiName || 'Não definido'}</div>
          {formData.website && (
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              🔗 {formData.website}
            </p>
          )}
        </div>

        <div className="review-card">
          <CardHeader title="🏢 Perfil do Negócio" step={2} onEditStep={goToStep} />
          <div className="review-row">
            <div className="review-col">
              <span className="review-small-label">Empresa / Marca</span>
              <span className="review-small-value">{formData.companyName || '-'}</span>
            </div>
            <div className="review-col">
              <span className="review-small-label">Nicho / Setor</span>
              <span className="review-small-value">{formData.niche || '-'}</span>
            </div>
          </div>
        </div>

        <div className="review-card">
          <CardHeader title="🎯 Missão & Personalidade" step={3} onEditStep={goToStep} />
          <div className="review-row">
            <div className="review-col">
              <span className="review-small-label">Objetivo Principal</span>
              <span className="review-small-value">{formData.mainObjective || '-'}</span>
            </div>
            <div className="review-col">
              <span className="review-small-label">Tom de Voz</span>
              <span className="review-small-value">{formData.tone || '-'}</span>
            </div>
          </div>
          {formData.forbiddenWords && (
            <div style={{ marginTop: '1rem' }}>
              <span className="review-small-label">🚫 Vocabulário Bloqueado</span>
              <span className="review-small-value">{formData.forbiddenWords}</span>
            </div>
          )}
        </div>

        <div className="review-card full-width">
          <CardHeader title="📚 Base de Conhecimento & Ofertas" step={5} onEditStep={goToStep} />
          <div className="review-row-stacked">
            <Field label="Portfólio de Produtos / Serviços e Preços" value={formData.products} />
            <Field label="Call to Action (Próximo passo após qualificação)" value={formData.nextStep} />
          </div>
        </div>

        <div className="review-card full-width">
          <CardHeader title="🧠 Inteligência Emocional & Objeções" step={6} onEditStep={goToStep} />
          <div className="review-row-stacked">
            <Field label="Dúvidas Frequentes dos Clientes" value={formData.commonQuestions} />
            <Field label="Objeção Principal e Como Vencê-la" value={formData.mainObjection} />
          </div>
        </div>

        <div className="review-card full-width">
          <CardHeader title="🤝 Protocolo de Transbordo Humano" step={7} onEditStep={goToStep} />
          <div className="review-row-stacked">
            <Field label="Gatilhos de Transferência (Quando a IA para e o humano entra)" value={formData.handoffRules} />
            <Field label="Dados Obrigatórios a Coletar Antes de Transferir" value={formData.requiredData} />
          </div>
        </div>

      </div>

      <div className="email-action-row">
        <button
          className={`btn ${emailState === 'sent' ? 'btn-secondary' : 'btn-primary'} email-send-btn`}
          onClick={emailState === 'idle' || emailState === 'error' ? handleSendEmail : undefined}
          disabled={emailState === 'sending' || emailState === 'sent'}
        >
          {emailBtnLabel}
        </button>
        {emailState === 'sent' && (
          <p className="email-sent-hint">Relatório enviado para a equipe Salomão Santos.</p>
        )}
      </div>

      <div className="confidential-seal">
        <div className="seal-icon">🔒</div>
        <div className="seal-text">
          <strong>DOCUMENTO ESTRATÉGICO CONFIDENCIAL</strong><br />
          Gerado em {now} · Uso exclusivo para implementação via Salomão Santos & Weeke.
        </div>
      </div>

    </div>
  );
};

export default ReviewStep;
