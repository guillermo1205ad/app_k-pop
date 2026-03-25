import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LearningCard from '../components/LearningCard';
import ProgressBar from '../components/ProgressBar';
import SubjectMissionNav from '../components/SubjectMissionNav';
import { lessonsBySubject } from '../data/lessons';
import { subjectMap } from '../data/subjects';
import { useProgress } from '../context/ProgressContext';

function LearnMode() {
  const { subjectId } = useParams();
  const subject = subjectMap[subjectId];
  const lessons = lessonsBySubject[subjectId] || [];
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const { completeLearnMode, setLastVisitedSection } = useProgress();

  const isLast = current === lessons.length - 1;
  const progressValue = useMemo(() => {
    if (!lessons.length) return 0;
    return ((current + 1) / lessons.length) * 100;
  }, [current, lessons.length]);

  useEffect(() => {
    setLastVisitedSection(subjectId, 'aprender');
  }, [setLastVisitedSection, subjectId]);

  if (!subject || !lessons.length) {
    return (
      <div className="page">
        <h1>No hay contenido de aprendizaje para esta mision.</h1>
        <Link to="/materias" className="btn btn-primary">
          Volver a materias
        </Link>
      </div>
    );
  }

  const handleNext = () => {
    if (isLast) {
      completeLearnMode(subjectId);
      navigate(`/materias/${subjectId}`);
      return;
    }
    setCurrent((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrent((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="page mode-page">
      <section className="page-head">
        <h1>{subject.name} · Modo Aprender</h1>
        <p>Una idea por tarjeta. Lee, observa el ejemplo y sigue con calma.</p>
      </section>

      <SubjectMissionNav subjectId={subjectId} activeKey="aprender" />

      <ProgressBar value={progressValue} label="Capsulas revisadas" color={subject.color} />
      <LearningCard lesson={lessons[current]} />

      <section className="mode-actions">
        <button type="button" className="btn btn-secondary" onClick={handlePrevious} disabled={current === 0}>
          Anterior
        </button>
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          {isLast ? 'Finalizar aprendizaje' : 'Siguiente'}
        </button>
      </section>

      <Link to={`/materias/${subjectId}`} className="btn btn-ghost">
        Volver a la materia
      </Link>
    </div>
  );
}

export default LearnMode;
