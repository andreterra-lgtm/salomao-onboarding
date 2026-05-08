import React from 'react';

const ReviewStep = ({ data }) => (
  <div className="animate-fade-in" id="printable-area">
    <div className="print-header" style={{ display: 'none', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '3px solid #d4af37', paddingBottom: '1rem' }}>
      <img src="/logo_salomao.png" alt="Salomão Santos" style={{ height: '60px' }} />
      <div style={{ textAlign: 'right' }}>
        <h3 style={{ margin: 0, color: '#d4af37' }}>RELATÓRIO DE ESTRUTURAÇÃO IA</h3>
        <p style={{ margin: 0, fontSize: '0.8rem' }}>SALOMÃO SANTOS x WEEKE</p>
      </div>
    </div>

    <div className="review-badge">ESTRATÉGIA FINALIZADA</div>
    <h2 className="step-title" style={{ textAlign: 'center', fontSize: '2.5rem' }}>Dossiê do Agente</h2>
    <p className="step-subtitle" style={{ textAlign: 'center', marginBottom: '3rem' }}>
      Aqui está o mapeamento completo do cérebro digital que vamos construir.
    </p>

    <div className="review-grid">
      <div className="review-card highlight">
        <div className="review-label">NOME DO AGENTE</div>
        <div className="review-value-hero">{data.aiName || 'Não definido'}</div>
      </div>

      <div className="review-card">
        <div className="review-title-premium">🏢 Perfil do Negócio</div>
        <div className="review-row">
          <div className="review-col">
            <span className="review-small-label">Empresa</span>
            <span className="review-small-value">{data.companyName || '-'}</span>
          </div>
          <div className="review-col">
            <span className="review-small-label">Nicho</span>
            <span className="review-small-value">{data.niche || '-'}</span>
          </div>
        </div>
      </div>

      <div className="review-card">
        <div className="review-title-premium">🎯 Missão & Tom</div>
        <div className="review-row">
          <div className="review-col">
            <span className="review-small-label">Objetivo</span>
            <span className="review-small-value">{data.mainObjective || '-'}</span>
          </div>
          <div className="review-col">
            <span className="review-small-label">Personalidade</span>
            <span className="review-small-value">{data.tone || '-'}</span>
          </div>
        </div>
      </div>

      <div className="review-card full-width">
        <div className="review-title-premium">📚 Inteligência & Ofertas</div>
        <div className="review-row-stacked">
          <div className="review-stack-item">
            <span className="review-small-label">Produtos e Serviços</span>
            <div className="review-long-text">{data.products || 'Não informado'}</div>
          </div>
          <div className="review-stack-item">
            <span className="review-small-label">Call to Action (CTA)</span>
            <div className="review-long-text">{data.nextStep || 'Não informado'}</div>
          </div>
        </div>
      </div>

      <div className="review-card full-width">
        <div className="review-title-premium">🛡️ Blindagem & Objeções</div>
        <div className="review-row-stacked">
          <div className="review-stack-item">
            <span className="review-small-label">Dúvidas Frequentes</span>
            <div className="review-long-text">{data.commonQuestions || 'Não informado'}</div>
          </div>
          <div className="review-stack-item">
            <span className="review-small-label">Tratativa de Objeções</span>
            <div className="review-long-text">{data.mainObjection || 'Não informado'}</div>
          </div>
        </div>
      </div>
    </div>

    <div className="confidential-seal">
      <div className="seal-icon">🔒</div>
      <div className="seal-text">
        <strong>DOCUMENTO ESTRATÉGICO CONFIDENCIAL</strong><br />
        Este mapeamento é de uso exclusivo para implementação via Salomão Santos & Weeke.
      </div>
    </div>
  </div>
);

export default ReviewStep;
