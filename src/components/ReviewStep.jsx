import React from 'react';

const Field = ({ label, value }) => (
  <div className="review-stack-item">
    <span className="review-small-label">{label}</span>
    <div className="review-long-text">{value || <em style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>Não informado</em>}</div>
  </div>
);

const ReviewStep = ({ data }) => {
  const now = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

  return (
    <div className="animate-fade-in" id="printable-area">

      {/* === CABEÇALHO APENAS PARA IMPRESSÃO === */}
      <div className="print-header">
        <img src="/logo_salomao.png" alt="Salomão Santos" style={{ height: '55px' }} />
        <div style={{ textAlign: 'right' }}>
          <h3 style={{ margin: 0, color: '#8b2c2c', fontFamily: 'Outfit, sans-serif' }}>RELATÓRIO DE ESTRUTURAÇÃO IA</h3>
          <p style={{ margin: 0, fontSize: '0.8rem', color: '#555' }}>SALOMÃO SANTOS × WEEKE | {now}</p>
        </div>
      </div>

      {/* === TÍTULO === */}
      <div className="review-badge">✅ ESTRATÉGIA FINALIZADA</div>
      <h2 className="step-title" style={{ textAlign: 'center', fontSize: '2.4rem' }}>
        Dossiê do Agente
      </h2>
      <p className="step-subtitle" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        Mapeamento completo do cérebro digital que será implementado.
      </p>

      <div className="review-grid">

        {/* NOME DO AGENTE — DESTAQUE HERÓI */}
        <div className="review-card highlight">
          <div className="review-title-premium">🤖 Identidade Digital</div>
          <div className="review-value-hero">{data.aiName || 'Não definido'}</div>
          {data.website && (
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              🔗 {data.website}
            </p>
          )}
        </div>

        {/* PERFIL DO NEGÓCIO */}
        <div className="review-card">
          <div className="review-title-premium">🏢 Perfil do Negócio</div>
          <div className="review-row">
            <div className="review-col">
              <span className="review-small-label">Empresa / Marca</span>
              <span className="review-small-value">{data.companyName || '-'}</span>
            </div>
            <div className="review-col">
              <span className="review-small-label">Nicho / Setor</span>
              <span className="review-small-value">{data.niche || '-'}</span>
            </div>
          </div>
        </div>

        {/* MISSÃO & TOM */}
        <div className="review-card">
          <div className="review-title-premium">🎯 Missão & Personalidade</div>
          <div className="review-row">
            <div className="review-col">
              <span className="review-small-label">Objetivo Principal</span>
              <span className="review-small-value">{data.mainObjective || '-'}</span>
            </div>
            <div className="review-col">
              <span className="review-small-label">Tom de Voz</span>
              <span className="review-small-value">{data.tone || '-'}</span>
            </div>
          </div>
          {data.forbiddenWords && (
            <div style={{ marginTop: '1rem' }}>
              <span className="review-small-label">🚫 Vocabulário Bloqueado</span>
              <span className="review-small-value">{data.forbiddenWords}</span>
            </div>
          )}
        </div>

        {/* BASE DE CONHECIMENTO */}
        <div className="review-card full-width">
          <div className="review-title-premium">📚 Base de Conhecimento & Ofertas</div>
          <div className="review-row-stacked">
            <Field label="Portfólio de Produtos / Serviços e Preços" value={data.products} />
            <Field label="Call to Action (Próximo passo após qualificação)" value={data.nextStep} />
          </div>
        </div>

        {/* INTELIGÊNCIA EMOCIONAL */}
        <div className="review-card full-width">
          <div className="review-title-premium">🧠 Inteligência Emocional & Objeções</div>
          <div className="review-row-stacked">
            <Field label="Dúvidas Frequentes dos Clientes" value={data.commonQuestions} />
            <Field label="Objeção Principal e Como Vencê-la" value={data.mainObjection} />
          </div>
        </div>

        {/* FRONTEIRA HUMANA */}
        <div className="review-card full-width">
          <div className="review-title-premium">🤝 Protocolo de Transbordo Humano</div>
          <div className="review-row-stacked">
            <Field label="Gatilhos de Transferência (Quando a IA para e o humano entra)" value={data.handoffRules} />
            <Field label="Dados Obrigatórios a Coletar Antes de Transferir" value={data.requiredData} />
          </div>
        </div>

      </div>

      {/* SELO DE CONFIDENCIALIDADE */}
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
