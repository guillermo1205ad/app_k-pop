import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Flashcard from '../components/Flashcard';
import ProgressBar from '../components/ProgressBar';
import SubjectMissionNav from '../components/SubjectMissionNav';
import { useProgress } from '../context/ProgressContext';
import { reviewFlashcardsBySubject } from '../data/lessons';
import { subjectMap } from '../data/subjects';

function ReviewMode() {
  const { subjectId } = useParams();
  const subject = subjectMap[subjectId];
  const cards = reviewFlashcardsBySubject[subjectId] || [];
  const { completeReviewMode, setLastVisitedSection } = useProgress();

  const topics = useMemo(() => ['Todos', ...new Set(cards.map((card) => card.topic))], [cards]);

  const [topicFilter, setTopicFilter] = useState('Todos');
  const [current, setCurrent] = useState(0);
  const [seen, setSeen] = useState([]);

  const filteredCards = useMemo(() => {
    if (topicFilter === 'Todos') return cards;
    return cards.filter((card) => card.topic === topicFilter);
  }, [cards, topicFilter]);

  useEffect(() => {
    setCurrent(0);
  }, [topicFilter]);

  useEffect(() => {
    setLastVisitedSection(subjectId, 'repasar');
  }, [setLastVisitedSection, subjectId]);

  useEffect(() => {
    if (seen.length >= cards.length && cards.length > 0) {
      completeReviewMode(subjectId);
    }
  }, [cards.length, completeReviewMode, seen.length, subjectId]);

  if (!subject || !cards.length) {
    return (
      <div className="page">
        <h1>No hay tarjetas de repaso para esta materia.</h1>
        <Link to="/materias" className="btn btn-primary">
          Volver a materias
        </Link>
      </div>
    );
  }

  const currentCard = filteredCards[current];

  const handleReveal = (cardId) => {
    setSeen((prev) => (prev.includes(cardId) ? prev : [...prev, cardId]));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const reviewProgress = (seen.length / cards.length) * 100;

  return (
    <div className="page mode-page">
      <section className="page-head">
        <h1>{subject.name} · Modo Repasar</h1>
        <p>Tarjetas rapidas para recordar ideas clave.</p>
      </section>

      <SubjectMissionNav subjectId={subjectId} activeKey="repasar" />

      <div className="review-toolbar">
        <label htmlFor="topic-filter">Subtema</label>
        <select
          id="topic-filter"
          value={topicFilter}
          onChange={(event) => setTopicFilter(event.target.value)}
          aria-label="Filtrar tarjetas por subtema"
        >
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <ProgressBar value={reviewProgress} label="Tarjetas vistas" color={subject.color} />

      {currentCard && <Flashcard card={currentCard} onReveal={handleReveal} />}

      <section className="mode-actions">
        <button type="button" className="btn btn-secondary" onClick={handlePrevious}>
          Anterior
        </button>
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Siguiente tarjeta
        </button>
      </section>

      <Link to={`/materias/${subjectId}`} className="btn btn-ghost">
        Volver a la materia
      </Link>
    </div>
  );
}

export default ReviewMode;
