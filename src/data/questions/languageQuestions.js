const q = (
  id,
  topic,
  question,
  options,
  correctAnswer,
  explanation,
  praiseMessage,
  difficulty = 'easy',
  type = 'multiple-choice',
  extra = {}
) => ({
  id,
  subject: 'lenguaje',
  topic,
  question,
  options,
  correctAnswer,
  explanation,
  praiseMessage,
  difficulty,
  type,
  ...extra
});

export const languageQuestions = [
  q('language-001', 'Vocales', 'Que letra es la vocal A?', ['A', 'M', 'L'], 0, 'La letra A es una vocal.', 'Muy bien.'),
  q('language-002', 'Vocales', 'Que letra es la vocal E?', ['L', 'E', 'M'], 1, 'La letra E es una vocal.', 'Excelente mision.'),
  q('language-003', 'Vocales', 'Que letra es la vocal I?', ['O', 'U', 'I'], 2, 'La letra I es una vocal.', 'Super trabajo.'),
  q('language-004', 'Vocales', 'Que letra es la vocal O?', ['O', 'P', 'T'], 0, 'La letra O es una vocal.', 'Muy bien, cada vez mejor.'),
  q('language-005', 'Vocales', 'Que letra es la vocal U?', ['R', 'U', 'N'], 1, 'La letra U es una vocal.', 'Excelente mision.'),
  q('language-006', 'Vocales', 'Cual de estas letras es una vocal?', ['M', 'A', 'L'], 1, 'A es vocal. M y L son consonantes.', 'Muy bien.'),
  q('language-007', 'Vocales', 'Completa la palabra: M_SA', ['E', 'O', 'U'], 0, 'La palabra correcta es MESA.', 'Excelente.'),
  q('language-008', 'Vocales', 'Completa la palabra: L_NA', ['A', 'U', 'I'], 1, 'La palabra correcta es LUNA.', 'Super trabajo.'),
  q('language-009', 'Vocales en palabras', 'Elige la palabra que tiene vocal A.', ['mesa', 'lilo', 'nene'], 0, 'Mesa contiene la vocal A.', 'Muy bien.'),
  q('language-010', 'Vocales en palabras', 'Elige la palabra que tiene vocal O.', ['mama', 'mono', 'mesa'], 1, 'Mono contiene la vocal O.', 'Excelente mision.'),
  q('language-011', 'Silabas', 'Cuantas silabas tiene "mesa"?', ['1', '2', '3'], 1, 'Me-sa tiene 2 silabas.', 'Muy bien.'),
  q('language-012', 'Silabas', 'Cuantas silabas tiene "luna"?', ['2', '1', '3'], 0, 'Lu-na tiene 2 silabas.', 'Excelente.'),
  q('language-013', 'Silabas', 'Cuantas silabas tiene "mono"?', ['2', '3', '1'], 0, 'Mo-no tiene 2 silabas.', 'Super trabajo.'),
  q('language-014', 'Silabas', 'Cuantas silabas tiene "mano"?', ['2', '1', '4'], 0, 'Ma-no tiene 2 silabas.', 'Muy bien.'),
  q('language-015', 'Silabas', 'Cual palabra tiene 2 silabas?', ['sol', 'luna', 'pan'], 1, 'Lu-na tiene 2 silabas.', 'Excelente mision.'),
  q('language-016', 'Letra M', 'Cual palabra empieza con M?', ['mesa', 'luna', 'pato'], 0, 'Mesa empieza con M.', 'Muy bien.'),
  q('language-017', 'Letra M', 'Cual palabra tiene la letra M?', ['mono', 'lila', 'sol'], 0, 'Mono contiene la letra M.', 'Excelente.'),
  q('language-018', 'Letra M', 'Elige la palabra "mama".', ['mama', 'luna', 'leon'], 0, 'La palabra correcta es mama.', 'Super trabajo.'),
  q('language-019', 'Letra M', 'Elige la palabra "mesa".', ['mesa', 'luna', 'mono'], 0, 'La palabra correcta es mesa.', 'Muy bien.'),
  q('language-020', 'Letra M', 'Elige la palabra "mono".', ['mono', 'mano', 'luna'], 0, 'La palabra correcta es mono.', 'Excelente mision.'),
  q('language-021', 'Letra L', 'Cual palabra empieza con L?', ['luna', 'mesa', 'pato'], 0, 'Luna empieza con L.', 'Muy bien.'),
  q('language-022', 'Letra L', 'Cual palabra tiene la letra L?', ['lapiz', 'mano', 'mama'], 0, 'Lapiz contiene la letra L.', 'Excelente.'),
  q('language-023', 'Letra L', 'Elige la palabra "luna".', ['luna', 'leon', 'lapiz'], 0, 'La palabra correcta es luna.', 'Super trabajo.'),
  q('language-024', 'Letra L', 'Elige la palabra "lapiz".', ['luna', 'lapiz', 'libro'], 1, 'La palabra correcta es lapiz.', 'Muy bien.'),
  q('language-025', 'Letra L', 'Elige la palabra "leon".', ['leon', 'luna', 'mono'], 0, 'La palabra correcta es leon.', 'Excelente mision.'),
  q(
    'language-026',
    'Comprension lectora',
    'Quienes aparecen en el cuento?',
    ['Lila y Milo', 'Un dragon', 'Nadie'],
    0,
    'En el cuento aparecen Lila y Milo.',
    'Muy bien, leiste con atencion.',
    'easy',
    'multiple-choice',
    {
      supportText:
        'Lee este mini cuento:\nLila juega con una pelota roja.\nMilo aplaude y se rie con ella.'
    }
  ),
  q(
    'language-027',
    'Comprension lectora',
    'Que paso primero?',
    ['Lila guardo los lapices', 'Lila abrio un libro', 'Lila se fue a dormir'],
    0,
    'Primero Lila guardo los lapices.',
    'Excelente mision.',
    'easy',
    'multiple-choice',
    {
      supportText:
        'Lee este mini cuento:\nPrimero Lila guardo los lapices.\nLuego abrio un libro y comenzo a leer.'
    }
  ),
  q(
    'language-028',
    'Comprension lectora',
    'Que paso al final?',
    ['Leo rego la planta', 'Leo se sento a leer', 'Leo salio corriendo'],
    1,
    'Al final Leo se sento a leer.',
    'Super trabajo.',
    'easy',
    'multiple-choice',
    {
      supportText:
        'Lee este mini cuento:\nLeo rego la planta.\nDespues se sento a leer su cuento favorito.'
    }
  ),
  q(
    'language-029',
    'Fabula breve',
    'Quien ayudo al leon?',
    ['El raton', 'Una nube', 'Un lapiz'],
    0,
    'En la fabula, el raton ayudo al leon.',
    'Muy bien.',
    'easy',
    'multiple-choice',
    {
      supportText:
        'Lee esta mini fabula:\nUn leon quedo atrapado en una red.\nUn raton lo ayudo a salir.'
    }
  ),
  q(
    'language-030',
    'Fabula breve',
    'Que ensenanza deja la fabula?',
    ['Ayudar a otros es bueno', 'No compartir nunca', 'No escuchar a nadie'],
    0,
    'La ensenanza es que ayudar a otros es algo bueno.',
    'Excelente mision final.',
    'medium',
    'multiple-choice',
    {
      supportText:
        'Lee esta mini fabula:\nUn leon quedo atrapado en una red.\nUn raton pequeno lo ayudo.\nTodos podemos ayudar.'
    }
  )
];
