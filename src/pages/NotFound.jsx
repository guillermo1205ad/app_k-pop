import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page">
      <h1>Ruta no encontrada</h1>
      <p>Esta misión no existe. Volvamos al menú principal.</p>
      <Link to="/" className="btn btn-primary">
        Ir al inicio
      </Link>
    </div>
  );
}

export default NotFound;
