import { useState } from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.png';
import hero4 from '../assets/hero-4.jpg';
import { useProgress } from '../context/ProgressContext';

function Home() {
  const { progress, setStudentName } = useProgress();
  const [nameInput, setNameInput] = useState(progress.studentProfile?.name || '');

  const studentName = progress.studentProfile?.name?.trim();
  const greetingText = studentName ? `Hola, ${studentName}` : 'Hola, futura estrella del aprendizaje';

  const handleProfileSave = () => {
    setStudentName(nameInput);
  };

  return (
    <div className="page home-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="chip">{greetingText}</p>
          <h1>Guerreras del Aprendizaje</h1>
          <p>
            Un equipo pop magico te acompana a recuperar estrellas del conocimiento en Matematica,
            Lenguaje, Ciencias, Historia, Ingles y la mision de Julieta.
          </p>

          <section className="profile-box" aria-label="Perfil del estudiante">
            <label htmlFor="student-name">Perfil del estudiante</label>
            <div className="profile-box-row">
              <input
                id="student-name"
                type="text"
                maxLength={24}
                value={nameInput}
                placeholder="Escribe tu nombre"
                onChange={(event) => setNameInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    handleProfileSave();
                  }
                }}
                aria-label="Nombre del estudiante"
              />
              <button type="button" className="btn btn-secondary" onClick={handleProfileSave}>
                Guardar nombre
              </button>
            </div>
          </section>

          <div className="hero-actions">
            <Link to="/materias" className="btn btn-primary">
              Comenzar
            </Link>
          </div>
          <p className="motivational-note">
            Las Guerreras del K-pop creen en ti: cada paso que das enciende una nueva estrella de tu escenario magico.
          </p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <img src={hero1} alt="" className="hero-card hero-card-a" />
          <img src={hero2} alt="" className="hero-card hero-card-b" />
          <img src={hero4} alt="" className="hero-card hero-card-c" />
          <span className="hero-star">⭐</span>
          <span className="hero-star">✨</span>
          <span className="hero-star">🎵</span>
        </div>
      </section>

      <section id="materias-preview" className="mini-grid" aria-label="Vista rapida de materias">
        <article>
          <h2>Misiones cortas y claras</h2>
          <p>Una meta por pantalla, instrucciones simples y feedback positivo inmediato.</p>
        </article>
        <article>
          <h2>Aprender, practicar y repasar</h2>
          <p>Cada materia tiene recorrido completo para estudiar con calma y repetir cuando quieras.</p>
        </article>
        <article>
          <h2>Progreso guardado</h2>
          <p>Tu avance se guarda en este dispositivo para volver donde quedaste.</p>
        </article>
      </section>
    </div>
  );
}

export default Home;
