# Guerreras del Aprendizaje

App web educativa infantil (1 Basico) inspirada en una narrativa de heroinas pop magicas. Incluye 6 materias (con seccion especial Julieta Estate Quieta), modos Aprender/Practicar/Repasar, progreso persistente en `localStorage` y despliegue estatico compatible con GitHub Pages.

## Objetivo

Entregar una experiencia de estudio clara, segura y entretenida para ninas y ninos de 6 anos:

- Lenguaje simple y corto
- Actividades breves
- Feedback positivo inmediato
- Progreso visible y guardado
- Diseno infantil premium y accesible

## Stack

- React 18
- React Router (`HashRouter`)
- Vite
- HTML + CSS + JavaScript (sin TypeScript)
- Sin backend, sin APIs externas

## Instalacion

```bash
npm install
```

## Ejecucion local

```bash
npm run dev
```

## Build de produccion

```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages

Esta app ya esta preparada para SPA estatica con rutas hash (`#/...`) y `base: './'` en Vite.

### Opcion A: con script `gh-pages`

1. Crea un repositorio en GitHub y sube este proyecto.
2. Asegura que la rama principal tenga este codigo.
3. Ejecuta:

```bash
npm run deploy
```

4. En GitHub: `Settings -> Pages`.
5. En `Source`, selecciona la rama `gh-pages` (carpeta root).
6. Guarda y espera la URL publicada.

### Opcion B: GitHub Actions o carga manual de `dist/`

1. Ejecuta `npm run build`.
2. Publica el contenido de `dist/` en tu origen de Pages.
3. Verifica que la URL abra con hash routing, por ejemplo: `#/materias`.

## Estructura del proyecto

```text
src/
  assets/
  components/
    Header.jsx
    Footer.jsx
    SubjectCard.jsx
    ProgressBar.jsx
    QuestionCard.jsx
    Flashcard.jsx
    RewardBadge.jsx
    LearningCard.jsx
    ResultsSummary.jsx
    Layout.jsx
  context/
    ProgressContext.jsx
  pages/
    Home.jsx
    Subjects.jsx
    SubjectDetail.jsx
    LearnMode.jsx
    PracticeMode.jsx
    ReviewMode.jsx
    Results.jsx
    NotFound.jsx
  data/
    subjects.js
    lessons.js
    rewards.js
    questions/
      mathQuestions.js
      scienceQuestions.js
      languageQuestions.js
      historyQuestions.js
      englishQuestions.js
      julietaQuestions.js
      index.js
  utils/
    constants.js
    helpers.js
    storage.js
  styles/
    variables.css
    global.css
    components.css
    pages.css
  App.jsx
  main.jsx
```

## Cobertura pedagogica

Materias incluidas:

1. Matematica
2. Lenguaje
3. Ciencias
4. Historia
5. Ingles
6. Julieta Estate Quieta

Banco de preguntas:

- ~30 preguntas por materia
- 20 preguntas en Julieta Estate Quieta
- 170 preguntas totales aproximadas
- Estructura por pregunta con:
  - `id`
  - `subject`
  - `topic`
  - `question`
  - `options`
  - `correctAnswer`
  - `explanation`
  - `praiseMessage`
  - `difficulty`

Modos de aprendizaje:

- **Aprender**: capsulas breves por subtema
- **Practicar**: mini mision con preguntas y feedback inmediato
- **Repasar**: flashcards y filtro por subtema
- **Resultados**: aciertos, porcentaje, sugerencia de repaso y logros simbolicos

## Progreso y localStorage

Se guarda automaticamente:

- Progreso por materia
- Mejor puntaje de practica
- Numero de practicas
- Ultima sesion (aciertos y temas por reforzar)
- Ultima seccion visitada por materia
- Estrellas globales

Clave de almacenamiento:

- `guerreras-aprendizaje-v1`

La app incluye opcion para reiniciar progreso desde la pantalla de materias.

## Como editar preguntas y contenidos

### Preguntas

Edita archivos en:

- `src/data/questions/mathQuestions.js`
- `src/data/questions/scienceQuestions.js`
- `src/data/questions/languageQuestions.js`
- `src/data/questions/historyQuestions.js`
- `src/data/questions/englishQuestions.js`
- `src/data/questions/julietaQuestions.js`

Formato recomendado por pregunta:

```js
{
  id: 'math-001',
  subject: 'matematica',
  topic: 'Conteo',
  question: 'Cuenta: ⭐⭐⭐',
  options: ['2', '3', '4'],
  correctAnswer: 1,
  explanation: 'Hay tres estrellas.',
  praiseMessage: 'Muy bien.',
  difficulty: 'easy'
}
```

### Capsulas y repaso

- Capsulas de aprendizaje: `src/data/lessons.js` (`lessonsBySubject`)
- Flashcards de repaso: `src/data/lessons.js` (`reviewCardsBySubject`)

### Materias y narrativa

- `src/data/subjects.js`

## Como cambiar imagenes

1. Copia tu imagen dentro de `src/assets/`.
2. Importa la imagen en `src/data/subjects.js`.
3. En la materia que quieras, cambia la propiedad `image` por la nueva variable importada.

Ejemplo:

```js
import hero5 from '../assets/hero-5.jpg';

{
  id: 'ingles',
  name: 'Ingles',
  image: hero5
}
```

### Recursos multimedia de Julieta

Los archivos de la materia Julieta se sirven de forma estatica desde `public/media/`:

- `public/media/julieta-libro.pdf`
- `public/media/julieta-video.mp4`
- `public/media/julieta-audio.m4a`

Si quieres reemplazarlos, conserva esos mismos nombres para no romper los enlaces de la app.

## Como personalizar materias

Para editar una materia completa:

- Identidad visual y texto base: `src/data/subjects.js`
- Capsulas de aprendizaje: `src/data/lessons.js` (`lessonsBySubject`)
- Flashcards de repaso: `src/data/lessons.js` (`reviewCardsBySubject`)
- Banco de preguntas: `src/data/questions/*.js`

Sugerencia de flujo:

1. Ajusta nombre, descripcion e imagen en `subjects.js`.
2. Ajusta capsulas en `lessons.js`.
3. Ajusta preguntas y feedback por subtema en `questions/`.
4. Ejecuta `npm run build` para validar antes de desplegar.

## Accesibilidad aplicada

- Estructura semantica y etiquetas claras
- Botones grandes
- Contraste alto
- Foco visible (`:focus-visible`)
- Navegacion simple
- Textos cortos por bloque

## Notas finales

- Proyecto 100% estatico, sin backend.
- Compatible con GitHub Pages.
- Pensado para notebook y tablet.
- Diseno visual infantil, alegre y no agresivo.
