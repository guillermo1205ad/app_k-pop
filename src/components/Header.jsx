import { Link, useLocation } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';

function Header() {
  const { progress } = useProgress();
  const location = useLocation();

  return (
    <header className="app-header">
      <div className="app-header-inner">
        <Link to="/" className="brand" aria-label="Ir al inicio">
          <span className="brand-icon" aria-hidden="true">
            ✨
          </span>
          <div>
            <strong>Guerreras del Aprendizaje</strong>
            <small>Misiones de estudio para 1° Básico</small>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Navegación principal">
          <Link className={location.pathname === '/' ? 'is-active' : ''} to="/">
            Inicio
          </Link>
          <Link className={location.pathname.startsWith('/materias') ? 'is-active' : ''} to="/materias">
            Materias
          </Link>
        </nav>

        <div className="global-stars" aria-label={`Estrellas globales: ${progress.globalStars}`}>
          <span aria-hidden="true">🌟</span>
          <strong>{progress.globalStars}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;
