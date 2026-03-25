import { useState } from 'react';

function Flashcard({ card, onReveal }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    if (!isFlipped && onReveal) {
      onReveal(card.id);
    }
  };

  return (
    <article className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
      <p className="chip">{card.topic}</p>
      <h3>{card.concept || card.topic}</h3>
      <p className="flashcard-text">{isFlipped ? card.explanation || card.back : card.front}</p>
      {isFlipped && (
        <p className="flashcard-example">
          <strong>Ejemplo:</strong> {card.example || card.back}
        </p>
      )}
      <button type="button" className="btn btn-secondary" onClick={handleFlip} aria-label="Mostrar u ocultar respuesta de la tarjeta">
        {isFlipped ? 'Volver a pregunta' : 'Ver respuesta'}
      </button>
    </article>
  );
}

export default Flashcard;
