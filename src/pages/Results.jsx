import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import RewardBadge from '../components/RewardBadge';
import ResultsSummary from '../components/ResultsSummary';
import SubjectMissionNav from '../components/SubjectMissionNav';
import { useProgress } from '../context/ProgressContext';
import { rewards } from '../data/rewards';
import { subjectMap } from '../data/subjects';
import { fixSpanishText, summarizeWeakTopics } from '../utils/helpers';

function Results() {
  const { subjectId } = useParams();
  const location = useLocation();
  const { progress, setLastVisitedSection } = useProgress();
  const subject = subjectMap[subjectId];

  const stateSession = location.state;
  const fallback = progress.subjects[subjectId]?.lastSession;

  const session = stateSession || fallback;

  useEffect(() => {
    setLastVisitedSection(subjectId, 'resultado');
  }, [setLastVisitedSection, subjectId]);

  if (!subject || !session) {
    return (
      <div className="page">
        <h1>Aún no hay una práctica reciente para mostrar.</h1>
        <Link to={subjectId ? `/materias/${subjectId}` : '/materias'} className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }

  const score = Math.round((session.correct / session.total) * 100);
  const weakTopics = summarizeWeakTopics(session.wrongAnswers || []);

  return (
    <div className="page results-page">
      <section className="page-head">
        <h1>Resumen final · {fixSpanishText(subject.name)}</h1>
        <p>Tu esfuerzo recuperó nuevas estrellas del conocimiento.</p>
      </section>

      <SubjectMissionNav subjectId={subjectId} activeKey="resultado" />

      <ResultsSummary score={score} session={session} weakTopics={weakTopics} />

      <section className="rewards-grid" aria-label="Logros simbolicos">
        <RewardBadge badge={rewards.bronze} unlocked={score >= 30} />
        <RewardBadge badge={rewards.silver} unlocked={score >= 60} />
        <RewardBadge badge={rewards.gold} unlocked={score >= 85} />
      </section>

      <section className="mode-actions">
        <Link to={`/materias/${subjectId}/practicar`} className="btn btn-primary">
          Practicar otra vez
        </Link>
        <Link to={`/materias/${subjectId}/repasar`} className="btn btn-secondary">
          Ir a repasar
        </Link>
        <Link to="/materias" className="btn btn-ghost">
          Volver a materias
        </Link>
      </section>
    </div>
  );
}

export default Results;
