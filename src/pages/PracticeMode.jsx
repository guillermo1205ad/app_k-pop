import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import SubjectMissionNav from '../components/SubjectMissionNav';
import { useProgress } from '../context/ProgressContext';
import { getQuestionsBySubject } from '../data/questions';
import { subjectMap } from '../data/subjects';
import { buildFeedback, buildPracticeSession, fixSpanishText } from '../utils/helpers';
import { PRACTICE_QUESTION_COUNT } from '../utils/constants';

function PracticeMode() {
  const { subjectId } = useParams();
  const subject = subjectMap[subjectId];
  const navigate = useNavigate();
  const { recordPracticeSession, setLastVisitedSection } = useProgress();

  const sessionQuestions = useMemo(() => {
    const bank = getQuestionsBySubject(subjectId);
    return buildPracticeSession(bank, PRACTICE_QUESTION_COUNT);
  }, [subjectId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [locked, setLocked] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setLastVisitedSection(subjectId, 'practicar');
  }, [setLastVisitedSection, subjectId]);

  if (!subject || !sessionQuestions.length) {
    return (
      <div className="page">
        <h1>No hay preguntas disponibles para esta materia.</h1>
        <Link to="/materias" className="btn btn-primary">
          Volver a materias
        </Link>
      </div>
    );
  }

  const currentQuestion = sessionQuestions[currentIndex];
  const total = sessionQuestions.length;

  const handleSelect = (index) => {
    if (locked) return;

    const isCorrect = index === currentQuestion.correctAnswer;
    const message = buildFeedback(isCorrect, isCorrect ? currentQuestion.praiseMessage : '');

    setSelectedOption(index);
    setLocked(true);
    setFeedback(message);
    setAnswers((prev) => [
      ...prev,
      {
        id: currentQuestion.id,
        topic: currentQuestion.topic,
        selected: index,
        correct: isCorrect
      }
    ]);
  };

  const handleNext = () => {
    const isLast = currentIndex === total - 1;
    if (isLast) {
      const correctCount = answers.filter((item) => item.correct).length;
      const wrongAnswers = answers
        .filter((item) => !item.correct)
        .map((item) => ({ topic: item.topic, id: item.id }));

      const payload = {
        correct: correctCount,
        total,
        wrongAnswers
      };

      recordPracticeSession(subjectId, payload);
      navigate(`/materias/${subjectId}/resultado`, {
        state: {
          subjectId,
          ...payload
        }
      });
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedOption(null);
    setLocked(false);
    setFeedback('');
  };

  const questionProgress = (answers.length / total) * 100;
  const isLast = currentIndex === total - 1;

  return (
    <div className="page mode-page">
      <section className="page-head">
        <h1>{fixSpanishText(subject.name)} · Modo Practicar</h1>
        <p>Mini misión de {total} preguntas. Responde una por una.</p>
      </section>

      <SubjectMissionNav subjectId={subjectId} activeKey="practicar" />

      {subject.parentGuide && (
        <section className="family-guide family-guide-compact" aria-label="Ayuda breve para familias">
          <h2>Ayuda breve para familias</h2>
          <ul>
            {subject.parentGuide.tips.slice(0, 3).map((tip) => (
              <li key={tip}>{fixSpanishText(tip)}</li>
            ))}
          </ul>
        </section>
      )}

      <ProgressBar
        value={questionProgress}
        label={`Pregunta ${currentIndex + 1} de ${total} · Respondidas ${answers.length}`}
        color={subject.color}
      />

      <QuestionCard
        question={currentQuestion}
        selectedOption={selectedOption}
        isCorrect={selectedOption === currentQuestion.correctAnswer}
        feedback={feedback}
        onSelect={handleSelect}
        onNext={handleNext}
        isLast={isLast}
        disabled={locked}
      />

      <Link to={`/materias/${subjectId}`} className="btn btn-ghost">
        Volver a la materia
      </Link>
    </div>
  );
}

export default PracticeMode;
