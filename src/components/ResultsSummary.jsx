function ResultsSummary({ score, session, weakTopics }) {
  const message =
    score >= 80
      ? 'Excelente mision.'
      : score >= 50
        ? 'Muy bien, sigue practicando.'
        : 'Buen intento, vamos otra vez.';

  return (
    <>
      <section className="result-stats">
        <article>
          <h3>Respuestas correctas</h3>
          <p>
            {session.correct} de {session.total}
          </p>
        </article>
        <article>
          <h3>Puntaje amable</h3>
          <p>{score}%</p>
        </article>
        <article>
          <h3>Mensaje final</h3>
          <p>{message}</p>
        </article>
      </section>

      <section className="review-suggestion">
        <h2>Temas para repasar</h2>
        {weakTopics.length ? (
          <ul>
            {weakTopics.slice(0, 3).map((item) => (
              <li key={item.topic}>
                {item.topic} ({item.total})
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay temas pendientes. Gran trabajo.</p>
        )}
      </section>
    </>
  );
}

export default ResultsSummary;
