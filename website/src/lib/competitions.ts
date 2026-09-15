import type competitionsData from '../data/competitions.json';

export type Competition = (typeof competitionsData.competitions)[number];

/** Texto da faixa/badge por status — mantido aqui para ser o único ponto de atualização. */
export const STATUS_LABEL: Record<string, string> = {
  'em-breve': 'EM BREVE',
  inscricoes: 'INSCRIÇÕES ABERTAS',
  encerrado: 'ENCERRADO',
};

/** Para onde o card de uma competição deve apontar: regulamento próprio, se existir. */
export function competitionHref(competition: Competition): string {
  return competition.regulationUrl || 'regulamentos.html';
}
