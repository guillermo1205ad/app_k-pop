import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.png';
import hero3 from '../assets/hero-3.avif';
import hero4 from '../assets/hero-4.jpg';
import hero5 from '../assets/hero-5.jpg';
import hero6 from '../assets/hero-6.png';

const mediaBase = `${import.meta.env.BASE_URL}media`;

export const subjects = [
  {
    id: 'matematica',
    name: 'Matemática',
    icon: '🔢',
    color: 'var(--math-color)',
    softColor: 'var(--math-soft)',
    image: hero1,
    description: 'Juguemos con numeros del 1 al 10, conteo y orden.',
    mission: 'Recupera cristales numericos para que la ciudad brille otra vez.',
    learningGoals: [
      'Leer numeros hasta 10',
      'Contar objetos',
      'Comparar mayor y menor',
      'Ordenar secuencias'
    ]
  },
  {
    id: 'lenguaje',
    name: 'Lenguaje',
    icon: '📚',
    color: 'var(--language-color)',
    softColor: 'var(--language-soft)',
    image: hero2,
    description: 'Vocales, silabas, letras M y L, y mini cuentos.',
    mission: 'Activa notas magicas con palabras claras y cuentos cortos.',
    learningGoals: [
      'Reconocer vocales',
      'Contar silabas simples',
      'Identificar palabras con M y L',
      'Comprender cuentos breves'
    ]
  },
  {
    id: 'ciencias',
    name: 'Ciencias',
    icon: '🧠',
    color: 'var(--science-color)',
    softColor: 'var(--science-soft)',
    image: hero3,
    description: 'Los sentidos y habitos para cuidar el cuerpo.',
    mission: 'Protege las estrellas de salud con acciones que cuidan tu cuerpo.',
    learningGoals: [
      'Reconocer los 5 sentidos',
      'Cuidar ojos, oidos, nariz, lengua y piel',
      'Practicar habitos saludables',
      'Elegir acciones de autocuidado'
    ]
  },
  {
    id: 'historia',
    name: 'Historia',
    icon: '🕒',
    color: 'var(--history-color)',
    softColor: 'var(--history-soft)',
    image: hero4,
    description: 'Momentos del dia, secuencias, dias, meses y estaciones.',
    mission: 'Ordena el tiempo para mantener la armonia del calendario magico.',
    learningGoals: [
      'Distinguir manana, tarde y noche',
      'Usar primero, luego y despues',
      'Reconocer dias y meses',
      'Identificar estaciones'
    ]
  },
  {
    id: 'ingles',
    name: 'Ingles',
    icon: '🌎',
    color: 'var(--english-color)',
    softColor: 'var(--english-soft)',
    image: hero5,
    description: 'Numbers, colours, weather and school objects.',
    mission: 'Canta en ingles para encender las luces del escenario.',
    learningGoals: [
      'Numbers from 1 to 10',
      'Basic colours',
      'Weather words',
      'School objects vocabulary'
    ],
    parentGuide: {
      title: 'Guía breve para familias (Inglés)',
      intro: 'Apoyo opcional en español e inglés para acompañar con calma durante la práctica.',
      tips: [
        'ES: Primero deja que la niña o niño responda sola/o. EN: First let your child answer on their own.',
        'ES: Refuerza con una frase corta: “Muy bien, era one”. EN: Reinforce with a short phrase: “Great, it was one”.',
        'ES: Usa objetos reales del estuche: lápiz, libro, mochila. EN: Use real school objects: pencil, book, backpack.',
        'ES: Si se equivoca, repitan dos opciones con cariño y vuelvan a elegir. EN: If they miss it, repeat two options kindly and choose again.',
        'ES: Haz sesiones cortas (5-10 min) para mantener la atención. EN: Keep sessions short (5-10 min) to support attention.',
        'ES: Cierra con repetición amable: numbers, colours, weather, school objects. EN: Finish with gentle repetition of key words.'
      ]
    }
  },
  {
    id: 'julieta',
    name: 'Julieta Estate Quieta',
    icon: '🐭',
    color: 'var(--julieta-color)',
    softColor: 'var(--julieta-soft)',
    image: hero6,
    description: 'Comprension lectora guiada con el cuento de Julieta y su familia.',
    mission: 'Escucha, mira y lee la historia para descubrir emociones, acciones y secuencias.',
    learningGoals: [
      'Identificar personajes principales',
      'Reconocer acciones importantes de la historia',
      'Ordenar hechos de inicio, desarrollo y final',
      'Comprender mensajes simples del cuento'
    ],
    resources: {
      cover: hero6,
      pdf: `${mediaBase}/julieta-libro.pdf`,
      video: `${mediaBase}/julieta-video.mp4`,
      audio: `${mediaBase}/julieta-audio.m4a`
    }
  }
];

export const subjectMap = subjects.reduce((acc, subject) => {
  acc[subject.id] = subject;
  return acc;
}, {});
