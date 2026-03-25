import { ENCOURAGE_MESSAGES, PRAISE_MESSAGES } from './constants';

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function shuffleArray(items = []) {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

export function pickRandom(items = []) {
  if (!items.length) {
    return '';
  }
  return items[Math.floor(Math.random() * items.length)];
}

export function sampleQuestions(questions, count) {
  return shuffleArray(questions).slice(0, count);
}

const TOPIC_PRIORITY = {
  matematica: [
    'Reconocimiento de numeros',
    'Conteo',
    'Representacion de cantidades',
    'Relacion numero-cantidad',
    'Comparacion de numeros',
    'Comparacion de cantidades',
    'Orden de numeros',
    'Secuencias',
    'Conteo hasta 10'
  ],
  ciencias: [
    'Sentidos',
    'Organos y sentidos',
    'Uso de sentidos',
    'Cuidado de sentidos',
    'Habitos saludables',
    'Higiene',
    'Verdadero o falso'
  ],
  lenguaje: [
    'Vocales',
    'Vocales en palabras',
    'Silabas',
    'Letra M',
    'Letra L',
    'Comprension lectora',
    'Fabula breve'
  ],
  historia: [
    'Momentos del dia',
    'Secuencias',
    'Dias de la semana',
    'Meses del ano',
    'Estaciones'
  ],
  ingles: ['Numbers', 'Colours', 'Weather', 'School objects'],
  julieta: ['Inicio del cuento', 'Travesuras de Julieta', 'El gran escondite']
};

function topicRank(subjectId, topic) {
  const order = TOPIC_PRIORITY[subjectId] || [];
  const idx = order.findIndex((item) => item === topic);
  return idx === -1 ? 999 : idx;
}

export function buildPracticeSession(questions = [], count = 10) {
  if (!questions.length) return [];

  const easyFirstPool = questions.filter((question) => question.difficulty !== 'medium' && question.difficulty !== 'hard');
  const sourcePool = easyFirstPool.length >= count ? easyFirstPool : questions;

  const byTopic = sourcePool.reduce((acc, question) => {
    const key = question.topic || 'General';
    if (!acc[key]) acc[key] = [];
    acc[key].push(question);
    return acc;
  }, {});

  const subjectId = sourcePool[0]?.subject;
  const preferredOrder = TOPIC_PRIORITY[subjectId] || [];
  const orderedTopics = [
    ...preferredOrder.filter((topic) => byTopic[topic]),
    ...Object.keys(byTopic).filter((topic) => !preferredOrder.includes(topic))
  ];

  orderedTopics.forEach((key) => {
    byTopic[key] = shuffleArray(byTopic[key]);
  });

  const picked = [];
  let safety = 0;

  while (picked.length < count && safety < 500) {
    safety += 1;
    let addedThisRound = false;

    for (const key of orderedTopics) {
      const nextQuestion = byTopic[key].shift();
      if (nextQuestion) {
        picked.push(nextQuestion);
        addedThisRound = true;
      }
      if (picked.length >= count) break;
    }

    if (!addedThisRound) break;
  }

  return picked.slice(0, count).sort((a, b) => {
    const byTopicOrder = topicRank(subjectId, a.topic) - topicRank(subjectId, b.topic);
    if (byTopicOrder !== 0) return byTopicOrder;
    return a.id.localeCompare(b.id);
  });
}

export function formatPercent(value) {
  return `${Math.round(value)}%`;
}

export function getStarLevel(scorePercent) {
  if (scorePercent >= 85) {
    return 'gold';
  }
  if (scorePercent >= 60) {
    return 'silver';
  }
  if (scorePercent >= 30) {
    return 'bronze';
  }
  return 'none';
}

export function buildFeedback(isCorrect, customMessage = '') {
  if (isCorrect) {
    return customMessage || pickRandom(PRAISE_MESSAGES);
  }
  return pickRandom(ENCOURAGE_MESSAGES);
}

export function summarizeWeakTopics(wrongAnswers = []) {
  if (!wrongAnswers.length) {
    return [];
  }

  const topicMap = wrongAnswers.reduce((acc, item) => {
    const topic = item.topic || 'General';
    acc[topic] = (acc[topic] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(topicMap)
    .sort((a, b) => b[1] - a[1])
    .map(([topic, total]) => ({ topic, total }));
}

export function getGreetingByTime() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Buenos dias';
  if (hour < 19) return 'Buenas tardes';
  return 'Buenas noches';
}

const TEXT_REPLACEMENTS = [
  [/\bBasico\b/g, 'Básico'],
  [/\bbasico\b/g, 'básico'],
  [/\bMatematica\b/g, 'Matemática'],
  [/\bmatematica\b/g, 'matemática'],
  [/\bMision\b/g, 'Misión'],
  [/\bmision\b/g, 'misión'],
  [/\bMagico\b/g, 'Mágico'],
  [/\bmagico\b/g, 'mágico'],
  [/\bNumeros\b/g, 'Números'],
  [/\bnumeros\b/g, 'números'],
  [/\bNumero\b/g, 'Número'],
  [/\bnumero\b/g, 'número'],
  [/\bPractica\b/g, 'Práctica'],
  [/\bpractica\b/g, 'práctica'],
  [/\bPracticas\b/g, 'Prácticas'],
  [/\bpracticas\b/g, 'prácticas'],
  [/\bSeccion\b/g, 'Sección'],
  [/\bseccion\b/g, 'sección'],
  [/\bUltima\b/g, 'Última'],
  [/\bultima\b/g, 'última'],
  [/\bIngles\b/g, 'Inglés'],
  [/\bingles\b/g, 'inglés'],
  [/\bEspanol\b/g, 'Español'],
  [/\bespanol\b/g, 'español'],
  [/\bNino\b/g, 'Niño'],
  [/\bnino\b/g, 'niño'],
  [/\bNina\b/g, 'Niña'],
  [/\bnina\b/g, 'niña'],
  [/\bManana\b/g, 'Mañana'],
  [/\bmanana\b/g, 'mañana'],
  [/\bOtono\b/g, 'Otoño'],
  [/\botono\b/g, 'otoño'],
  [/\bAno\b/g, 'Año'],
  [/\bano\b/g, 'año'],
  [/\bPequeno\b/g, 'Pequeño'],
  [/\bpequeno\b/g, 'pequeño'],
  [/\bPequena\b/g, 'Pequeña'],
  [/\bpequena\b/g, 'pequeña'],
  [/\bSenales\b/g, 'Señales'],
  [/\bsenales\b/g, 'señales'],
  [/\bSenal\b/g, 'Señal'],
  [/\bsenal\b/g, 'señal'],
  [/\bAtencion\b/g, 'Atención'],
  [/\batencion\b/g, 'atención'],
  [/\bRapido\b/g, 'Rápido'],
  [/\brapido\b/g, 'rápido'],
  [/\bTambien\b/g, 'También'],
  [/\btambien\b/g, 'también'],
  [/\bMas\b/g, 'Más'],
  [/\bmas\b/g, 'más'],
  [/\bAun\b/g, 'Aún'],
  [/\baun\b/g, 'aún'],
  [/\bPor que\b/g, 'Por qué'],
  [/\bpor que\b/g, 'por qué']
];

export function fixSpanishText(value) {
  if (typeof value !== 'string') return value;
  return TEXT_REPLACEMENTS.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), value);
}
