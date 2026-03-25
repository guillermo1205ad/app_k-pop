import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';
import SubjectMissionNav from '../components/SubjectMissionNav';
import { subjectMap } from '../data/subjects';
import { useProgress } from '../context/ProgressContext';
import { fixSpanishText } from '../utils/helpers';

function SubjectDetail() {
  const { subjectId } = useParams();
  const subject = subjectMap[subjectId];
  const { progress, setLastVisitedSection } = useProgress();

  useEffect(() => {
    if (subject) {
      setLastVisitedSection(subjectId, 'detalle');
    }
  }, [setLastVisitedSection, subject, subjectId]);

  if (!subject) {
    return (
      <div className="page">
        <h1>Misión no encontrada</h1>
        <Link to="/materias" className="btn btn-primary">
          Volver a materias
        </Link>
      </div>
    );
  }

  const subjectProgress = progress.subjects[subjectId];
  const lastSectionLabels = {
    inicio: 'Inicio',
    detalle: 'Detalle',
    aprender: 'Aprender',
    practicar: 'Practicar',
    repasar: 'Repasar',
    resultado: 'Resultado'
  };

  return (
    <div className="page subject-detail-page">
      <section className="subject-banner" style={{ '--subject-color': subject.color, '--subject-soft': subject.softColor }}>
        <img src={subject.image} alt="" aria-hidden="true" />
        <div>
          <p className="chip">{subject.icon} Materia</p>
          <h1>{fixSpanishText(subject.name)}</h1>
          <p>{fixSpanishText(subject.mission)}</p>
        </div>
      </section>

      <section className="subject-status">
        <ProgressBar value={subjectProgress.percent} label="Progreso total" color={subject.color} />
        <div className="stat-grid">
          <article>
            <h3>Prácticas completadas</h3>
            <p>{subjectProgress.totalPractices}</p>
          </article>
          <article>
            <h3>Mejor puntaje</h3>
            <p>{subjectProgress.bestScore}%</p>
          </article>
          <article>
            <h3>Estrellas</h3>
            <p>{subjectProgress.stars}</p>
          </article>
          <article>
            <h3>Última sección</h3>
            <p>{fixSpanishText(lastSectionLabels[subjectProgress.lastVisitedSection] || 'Inicio')}</p>
          </article>
        </div>
      </section>

      <SubjectMissionNav subjectId={subjectId} activeKey="detalle" />

      <section className="subject-route-grid" aria-label="Ruta sugerida de estudio">
        <article>
          <p className="chip">Paso 1</p>
          <h3>Aprender</h3>
          <p>Mira cápsulas breves por subtema para entender con calma.</p>
          <Link to={`/materias/${subjectId}/aprender`} className="btn btn-primary">
            Ir a aprender
          </Link>
        </article>
        <article>
          <p className="chip">Paso 2</p>
          <h3>Practicar</h3>
          <p>Responde 10 preguntas con ayuda y feedback inmediato.</p>
          <Link to={`/materias/${subjectId}/practicar`} className="btn btn-primary">
            Ir a practicar
          </Link>
        </article>
        <article>
          <p className="chip">Paso 3</p>
          <h3>Repasar</h3>
          <p>Usa tarjetas rápidas para recordar lo más importante.</p>
          <Link to={`/materias/${subjectId}/repasar`} className="btn btn-secondary">
            Ir a repasar
          </Link>
        </article>
      </section>

      {subject.parentGuide && (
        <section className="family-guide" aria-label="Guía de apoyo para familias">
          <h2>{fixSpanishText(subject.parentGuide.title)}</h2>
          <p>{fixSpanishText(subject.parentGuide.intro)}</p>
          <ul>
            {subject.parentGuide.tips.map((tip) => (
              <li key={tip}>{fixSpanishText(tip)}</li>
            ))}
          </ul>
        </section>
      )}

      {subject.resources && (
        <section className="resource-panel" aria-label="Recursos de la misión">
          <h2>Biblioteca Julieta</h2>
          <p>Escucha, mira y lee la historia antes de practicar para responder con más seguridad.</p>
          <div className="resource-grid">
            <article>
              <p className="chip">PDF</p>
              <h3>Libro: El síndrome de la hermana mediana</h3>
              {subject.resources.cover && (
                <img
                  src={subject.resources.cover}
                  alt="Portada del libro Julieta"
                  className="resource-cover"
                  loading="lazy"
                />
              )}
              <p>Versión para lectura guiada con apoyo de familia o docente.</p>
              <a href={subject.resources.pdf} className="btn btn-secondary" target="_blank" rel="noreferrer">
                Abrir libro
              </a>
            </article>
            <article>
              <p className="chip">Video</p>
              <h3>Cuento animado: Julieta estate quieta</h3>
              <video controls preload="metadata" aria-label="Vídeo del cuento Julieta estate quieta">
                <source src={subject.resources.video} type="video/mp4" />
                Tu navegador no pudo cargar el video.
              </video>
            </article>
            <article>
              <p className="chip">Audio</p>
              <h3>Audio cuento: Por qué Julieta no se está quieta</h3>
              <audio controls preload="none" aria-label="Audio del cuento Julieta">
                <source src={subject.resources.audio} type="audio/mp4" />
                Tu navegador no pudo cargar el audio.
              </audio>
            </article>
          </div>
        </section>
      )}

      <section className="goals-panel">
        <h2>Subtemas de la misión</h2>
        <ul>
          {subject.learningGoals.map((goal) => (
            <li key={goal}>{fixSpanishText(goal)}</li>
          ))}
        </ul>
      </section>

      <Link to="/materias" className="btn btn-ghost">
        Volver a materias
      </Link>
    </div>
  );
}

export default SubjectDetail;
