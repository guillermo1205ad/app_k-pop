import SubjectCard from '../components/SubjectCard';
import { subjects } from '../data/subjects';
import { useProgress } from '../context/ProgressContext';

function Subjects() {
  const { progress, resetProgress } = useProgress();

  const handleReset = () => {
    const shouldReset = window.confirm('¿Quieres reiniciar todo el progreso guardado?');
    if (shouldReset) {
      resetProgress();
    }
  };

  return (
    <div className="page subjects-page">
      <section className="page-head">
        <h1>Elige una materia</h1>
        <p>Cada materia es una misión especial para recuperar cristales del aprendizaje.</p>
      </section>

      <section className="subject-grid" aria-label="Lista de materias">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} progress={progress.subjects[subject.id]} />
        ))}
      </section>

      <section className="reset-panel">
        <h2>Gestión de progreso</h2>
        <p>Si quieres empezar desde cero, puedes reiniciar tu avance.</p>
        <button type="button" className="btn btn-ghost" onClick={handleReset}>
          Reiniciar progreso
        </button>
      </section>
    </div>
  );
}

export default Subjects;
