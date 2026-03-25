export const STORAGE_KEY = 'guerreras-aprendizaje-v1';

export const SUBJECT_IDS = {
  MATH: 'matematica',
  SCIENCE: 'ciencias',
  LANGUAGE: 'lenguaje',
  HISTORY: 'historia',
  ENGLISH: 'ingles',
  JULIETA: 'julieta'
};

export const SUBJECT_ORDER = [
  SUBJECT_IDS.MATH,
  SUBJECT_IDS.LANGUAGE,
  SUBJECT_IDS.SCIENCE,
  SUBJECT_IDS.HISTORY,
  SUBJECT_IDS.ENGLISH,
  SUBJECT_IDS.JULIETA
];

export const MODE_LABELS = {
  learn: 'Aprender',
  practice: 'Practicar',
  review: 'Repasar'
};

export const PRAISE_MESSAGES = [
  'Muy bien, mision lograda.',
  'Excelente mision.',
  'Gran trabajo, estrella recuperada.',
  'Fantastico, sigamos juntas.',
  'Tu equipo pop magico te aplaude.'
];

export const ENCOURAGE_MESSAGES = [
  'Buen intento. Vamos otra vez.',
  'Casi lo logras. Tu puedes.',
  'Respira y prueba de nuevo.',
  'Vamos paso a paso, lo haras genial.'
];

export const STAR_THRESHOLDS = {
  bronze: 30,
  silver: 60,
  gold: 85
};

export const PRACTICE_QUESTION_COUNT = 10;
