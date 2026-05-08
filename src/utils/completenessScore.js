const FIELDS = [
  { key: 'aiName',           label: 'Nome do Agente',                         weight: 10, step: 1 },
  { key: 'companyName',      label: 'Nome da Empresa / Marca',                 weight: 8,  step: 2 },
  { key: 'niche',            label: 'Nicho / Setor de Atuação',                weight: 8,  step: 2 },
  { key: 'website',          label: 'Canal de Presença (Site ou Instagram)',    weight: 4,  step: 2 },
  { key: 'mainObjective',    label: 'Objetivo Principal da IA',                weight: 10, step: 3 },
  { key: 'tone',             label: 'Tom de Voz / Personalidade',              weight: 10, step: 4 },
  { key: 'forbiddenWords',   label: 'Vocabulário Bloqueado',                   weight: 4,  step: 4 },
  { key: 'products',         label: 'Portfólio de Produtos e Preços',          weight: 12, step: 5 },
  { key: 'nextStep',         label: 'Call to Action (próximo passo)',          weight: 10, step: 5 },
  { key: 'commonQuestions',  label: 'Dúvidas Frequentes dos Clientes',         weight: 12, step: 6 },
  { key: 'mainObjection',    label: 'Objeção Principal e Como Vencê-la',       weight: 10, step: 6 },
  { key: 'handoffRules',     label: 'Gatilhos de Transbordo',                  weight: 8,  step: 7 },
  { key: 'requiredData',     label: 'Dados Obrigatórios para Transbordo',      weight: 4,  step: 7 },
];

const TOTAL_WEIGHT = FIELDS.reduce((sum, f) => sum + f.weight, 0);

export function computeScore(formData) {
  let earned = 0;
  const missing = [];

  for (const field of FIELDS) {
    const val = formData[field.key];
    if (val && String(val).trim().length > 0) {
      earned += field.weight;
    } else {
      missing.push({ label: field.label, step: field.step });
    }
  }

  const score = Math.round((earned / TOTAL_WEIGHT) * 100);
  const suggestions = missing.slice(0, 3);

  return { score, suggestions };
}
