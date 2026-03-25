import { fixSpanishText } from '../utils/helpers';

function LearningCard({ lesson }) {
  return (
    <article className="learning-card" aria-label={`Cápsula ${fixSpanishText(lesson.title)}`}>
      <p className="chip">{fixSpanishText(lesson.topic)}</p>
      <h3>{fixSpanishText(lesson.title)}</h3>
      <p>{fixSpanishText(lesson.text)}</p>
      <p className="learning-example">
        <strong>Ejemplo:</strong> {fixSpanishText(lesson.example)}
      </p>
      <p className="learning-tip">
        <strong>Tip:</strong> {fixSpanishText(lesson.tip)}
      </p>
    </article>
  );
}

export default LearningCard;
