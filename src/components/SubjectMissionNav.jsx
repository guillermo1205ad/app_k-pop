import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';

const NAV_ITEMS = [
  { key: 'detalle', label: 'Resumen', icon: '🎤' },
  { key: 'aprender', label: 'Aprender', icon: '✨' },
  { key: 'practicar', label: 'Practicar', icon: '🎯' },
  { key: 'repasar', label: 'Repasar', icon: '🃏' },
  { key: 'resultado', label: 'Resultado', icon: '🏆' }
];

function getPath(subjectId, key) {
  if (key === 'detalle') return `/materias/${subjectId}`;
  if (key === 'aprender') return `/materias/${subjectId}/aprender`;
  if (key === 'practicar') return `/materias/${subjectId}/practicar`;
  if (key === 'repasar') return `/materias/${subjectId}/repasar`;
  return `/materias/${subjectId}/resultado`;
}

function SubjectMissionNav({ subjectId, activeKey }) {
  const { progress } = useProgress();
  const subjectProgress = progress.subjects[subjectId] || {};

  const doneByKey = {
    detalle: true,
    aprender: !!subjectProgress.learnCompleted,
    practicar: (subjectProgress.totalPractices || 0) > 0,
    repasar: !!subjectProgress.reviewCompleted,
    resultado: !!subjectProgress.lastSession
  };

  return (
    <nav className="subject-mission-nav" aria-label="Navegación de la misión">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.key}
          to={getPath(subjectId, item.key)}
          className={`mission-tab ${activeKey === item.key ? 'is-active' : ''}`}
          aria-current={activeKey === item.key ? 'page' : undefined}
        >
          <span className="mission-tab-icon" aria-hidden="true">
            {item.icon}
          </span>
          <span className="mission-tab-label">{item.label}</span>
          <span className={`mission-tab-status ${doneByKey[item.key] ? 'is-done' : 'is-pending'}`}>
            {doneByKey[item.key] ? 'Listo' : 'Pendiente'}
          </span>
        </Link>
      ))}
    </nav>
  );
}

export default SubjectMissionNav;
