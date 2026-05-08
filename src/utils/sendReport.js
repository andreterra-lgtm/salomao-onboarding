import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../constants';

function formatReportText(data) {
  return `
DOSSIÊ DO AGENTE — ${data.aiName || 'Não definido'}
======================================================

IDENTIDADE DIGITAL
• Nome do Agente: ${data.aiName || 'Não informado'}
• Canal de Presença: ${data.website || 'Não informado'}

PERFIL DO NEGÓCIO
• Empresa / Marca: ${data.companyName || 'Não informado'}
• Nicho / Setor: ${data.niche || 'Não informado'}

MISSÃO & PERSONALIDADE
• Objetivo Principal: ${data.mainObjective || 'Não informado'}
• Tom de Voz: ${data.tone || 'Não informado'}
• Vocabulário Bloqueado: ${data.forbiddenWords || 'Nenhum'}

BASE DE CONHECIMENTO
• Portfólio de Produtos/Serviços e Preços:
${data.products || 'Não informado'}

• Call to Action:
${data.nextStep || 'Não informado'}

INTELIGÊNCIA EMOCIONAL
• Dúvidas Frequentes dos Clientes:
${data.commonQuestions || 'Não informado'}

• Objeção Principal e Contra-argumento:
${data.mainObjection || 'Não informado'}

PROTOCOLO DE TRANSBORDO HUMANO
• Gatilhos de Transferência:
${data.handoffRules || 'Não informado'}

• Dados Obrigatórios a Coletar:
${data.requiredData || 'Não informado'}
`.trim();
}

export async function sendReport(formData) {
  const reportText = formatReportText(formData);
  const reportDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    {
      ai_name:           formData.aiName        || 'Não informado',
      company_name:      formData.companyName   || 'Não informado',
      niche:             formData.niche         || 'Não informado',
      website:           formData.website       || 'Não informado',
      main_objective:    formData.mainObjective || 'Não informado',
      tone:              formData.tone          || 'Não informado',
      forbidden_words:   formData.forbiddenWords|| 'Nenhum',
      products:          formData.products      || 'Não informado',
      next_step:         formData.nextStep      || 'Não informado',
      common_questions:  formData.commonQuestions || 'Não informado',
      main_objection:    formData.mainObjection || 'Não informado',
      handoff_rules:     formData.handoffRules  || 'Não informado',
      required_data:     formData.requiredData  || 'Não informado',
      report_date:       reportDate,
      report_text:       reportText,
    },
    EMAILJS_CONFIG.publicKey,
  );
}
