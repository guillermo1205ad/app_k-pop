import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';

function SubjectCard({ subject, progress }) {
  return (
    <article className="subject-card" style={{ '--subject-color': subject.color, '--subject-soft': subject.softColor }}>
      <figure className="subject-media" aria-hidden="true">
        <img src={subject.image} alt="" loading="lazy" />
        <span className="subject-icon">{subject.icon}</span>
      </figure>
      <div className="subject-content">
        <h3>{subject.name}</h3>
        <p>{subject.description}</p>
        <ProgressBar value={progress?.percent || 0} label="Progreso guardado" color={subject.color} />
        <Link to={`/materias/${subject.id}`} className="btn btn-primary">
          Entrar a mision
        </Link>
      </div>
    </article>
  );
}

export default SubjectCard;
