function LearningCard({ lesson }) {
  return (
    <article className="learning-card" aria-label={`Capsula ${lesson.title}`}>
      <p className="chip">{lesson.topic}</p>
      <h3>{lesson.title}</h3>
      <p>{lesson.text}</p>
      <p className="learning-example">
        <strong>Ejemplo:</strong> {lesson.example}
      </p>
      <p className="learning-tip">
        <strong>Tip:</strong> {lesson.tip}
      </p>
    </article>
  );
}

export default LearningCard;
