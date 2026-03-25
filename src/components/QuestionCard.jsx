import { fixSpanishText } from '../utils/helpers';

function QuestionCard({
  question,
  selectedOption,
  isCorrect,
  feedback,
  onSelect,
  onNext,
  isLast,
  disabled
}) {
  return (
    <article className="question-card">
      <p className="chip">{fixSpanishText(question.topic)}</p>
      {question.supportText && (
        <section className="question-support" aria-label="Texto de apoyo">
          <p>{fixSpanishText(question.supportText)}</p>
        </section>
      )}
      <h3>{fixSpanishText(question.question)}</h3>
      <div className="option-grid" role="group" aria-label="Opciones de respuesta">
        {question.options.map((option, index) => {
          const isChosen = selectedOption === index;
          const isAnswer = index === question.correctAnswer;
          const stateClass = disabled
            ? isAnswer
              ? 'is-correct'
              : isChosen
                ? 'is-wrong'
                : ''
            : '';

          return (
            <button
              key={`${question.id}-${option}`}
              type="button"
              className={`option-btn ${isChosen ? 'is-selected' : ''} ${stateClass}`}
              onClick={() => onSelect(index)}
              disabled={disabled}
              aria-pressed={isChosen}
            >
              {fixSpanishText(option)}
            </button>
          );
        })}
      </div>

      {disabled && (
        <section className={`feedback-panel ${isCorrect ? 'is-ok' : 'is-bad'}`} aria-live="polite">
          <p className="feedback-main">{fixSpanishText(feedback)}</p>
          <p className="feedback-help">{fixSpanishText(question.explanation)}</p>
        </section>
      )}

      {disabled && (
        <button type="button" className="btn btn-primary" onClick={onNext}>
          {isLast ? 'Ver resultado' : 'Siguiente pregunta'}
        </button>
      )}
    </article>
  );
}

export default QuestionCard;
