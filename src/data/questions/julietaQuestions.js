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
  subject: 'julieta',
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

export const julietaQuestions = [
  q(
    'julieta-001',
    'Inicio del cuento',
    'Como se llama la ratoncita protagonista de esta historia?',
    ['Julieta', 'Flor', 'Mila'],
    0,
    'La protagonista del cuento es Julieta.',
    'Muy bien.',
    'easy',
    'multiple-choice',
    { supportText: 'Personaje principal del cuento.' }
  ),
  q(
    'julieta-002',
    'Inicio del cuento',
    'A quien le dan de cenar muy temprano en la casa?',
    ['A Flor', 'A Salustiano', 'A Julieta'],
    1,
    'Le dan de cenar al hermano pequeno: Salustiano.',
    'Excelente mision.',
    'easy',
    'multiple-choice',
    { supportText: 'Recuerda al hermano menor.' }
  ),
  q(
    'julieta-003',
    'Inicio del cuento',
    'Con quien se pone a jugar Papa al principio?',
    ['Con Julieta', 'Con la hermana mayor Flor', 'Con Salustiano'],
    1,
    'Papa juega con Flor al inicio.',
    'Super trabajo.',
    'easy'
  ),
  q(
    'julieta-004',
    'Inicio del cuento',
    'Que tiene que hacer Julieta mientras Papa y Mama atienden a sus hermanos?',
    ['Salir a correr', 'Esperar y estarse quieta', 'Ir a dormir'],
    1,
    'Julieta debe esperar y quedarse quieta.',
    'Muy bien, leiste con atencion.',
    'easy'
  ),
  q(
    'julieta-005',
    'Travesuras de Julieta',
    'A Julieta le gusta quedarse esperando y estar quieta?',
    ['Si, le encanta', 'No, se cansa y se enoja', 'No sabe'],
    1,
    'No le gusta esperar y dice que ya no quiere hacerlo.',
    'Excelente.',
    'easy'
  ),
  q(
    'julieta-006',
    'Travesuras de Julieta',
    'Que travesura hace Julieta con las cosas de su hermana Flor?',
    ['Le ordena la pieza', 'Le tira los dulces', 'Le regala una cometa'],
    1,
    'Julieta se enoja y le tira los dulces a Flor.',
    'Muy bien.',
    'easy'
  ),
  q(
    'julieta-007',
    'Travesuras de Julieta',
    'Que ruido muy fuerte hace Julieta cuando hace su berrinche?',
    ['Canta suave', 'Pega un portazo muy fuerte', 'Toca piano'],
    1,
    'Hace un portazo de horror.',
    'Excelente mision.',
    'easy'
  ),
  q(
    'julieta-008',
    'Travesuras de Julieta',
    'Que le dicen Papa y Mama cuando hace mucho ruido?',
    ['Julieta, sigue asi', 'Julieta, por favor, estate quieta', 'Julieta, ve al patio'],
    1,
    'Le piden que se quede quieta.',
    'Super trabajo.',
    'easy'
  ),
  q(
    'julieta-009',
    'Travesuras de Julieta',
    'Que hace Papa con el bebe Salustiano en el bano?',
    ['Lo seca con cuidado', 'Lo lleva al parque', 'Le da un juguete'],
    0,
    'Papa seca a Salustiano porque esta empapado.',
    'Muy bien.',
    'easy'
  ),
  q(
    'julieta-010',
    'Travesuras de Julieta',
    'Que desastre hace Julieta al jalar un hilo de lana?',
    ['Ordena los muebles', 'Se caen los muebles en un monton', 'Nada cambia'],
    1,
    'Tira de la lana y provoca que caigan los muebles.',
    'Excelente.',
    'easy'
  ),
  q(
    'julieta-011',
    'Travesuras de Julieta',
    'Donde termina enredada la cometa de Flor por culpa de Julieta?',
    ['En el colgador', 'En la ventana', 'En la cocina'],
    0,
    'La cometa queda enredada en el colgador.',
    'Muy bien.',
    'easy'
  ),
  q(
    'julieta-012',
    'Travesuras de Julieta',
    'Que le dice Flor a Julieta cuando se enoja por tirar sus cosas?',
    ['Gracias por ayudar', 'Por que seras tan patosa', 'Te quiero mucho'],
    1,
    'Flor le dice: "Por que seras tan patosa".',
    'Excelente mision.',
    'easy'
  ),
  q(
    'julieta-013',
    'El gran escondite',
    'Que pide el pequeno Salustiano cuando le entra mucho sueno?',
    ['Un cuento para dormir', 'Una bicicleta', 'Una pelota'],
    0,
    'Pide un cuento para dormirse contento.',
    'Super trabajo.',
    'easy'
  ),
  q(
    'julieta-014',
    'El gran escondite',
    'Que grita Julieta cuando decide irse a esconder?',
    ['Me voy. Nunca sabreis donde estoy', 'Me quedo aqui', 'No quiero jugar'],
    0,
    'Julieta grita esa frase antes de esconderse.',
    'Muy bien.',
    'easy'
  ),
  q(
    'julieta-015',
    'El gran escondite',
    'Que pasa en la casa justo despues de que Julieta dice que se va?',
    ['Empieza una fiesta', 'No se oye ni un solo ruido', 'Llega una visita'],
    1,
    'La casa queda en silencio.',
    'Excelente.',
    'easy'
  ),
  q(
    'julieta-016',
    'El gran escondite',
    'Como se sienten Papa y Mama al ver que no hay ruido y Julieta no esta?',
    ['Tranquilos', 'Alarmados y preocupados', 'Felices'],
    1,
    'Se alarman y preguntan donde estara.',
    'Muy bien.',
    'easy'
  ),
  q(
    'julieta-017',
    'El gran escondite',
    'Que dice la hermana Flor cuando Julieta desaparece?',
    ['No me importa', 'Hay que buscarla en seguida', 'Me voy a dormir'],
    1,
    'Flor se arrepiente y pide buscarla en seguida.',
    'Excelente mision.',
    'easy'
  ),
  q(
    'julieta-018',
    'El gran escondite',
    'Por que partes de la casa buscan a Julieta?',
    ['Solo en su cama', 'Desde la bodega hasta el buzon', 'Solo en la cocina'],
    1,
    'La buscan por muchos lugares de la casa.',
    'Super trabajo.',
    'easy'
  ),
  q(
    'julieta-019',
    'El gran escondite',
    'Cuando abren la despensa, a quien encuentran?',
    ['A Flor', 'A Julieta', 'Al vecino'],
    1,
    'Encuentran a Julieta escondida en la despensa.',
    'Muy bien.',
    'easy'
  ),
  q(
    'julieta-020',
    'El gran escondite',
    'Que dice Julieta cuando la encuentran al final del cuento?',
    ['Ya he vuelto', 'No vuelvo nunca', 'Adios para siempre'],
    0,
    'Al final dice: "Ya he vuelto".',
    'Excelente mision final.',
    'medium'
  )
];
