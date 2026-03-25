import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page">
      <h1>Ruta no encontrada</h1>
      <p>Esta mision no existe. Volvamos al menu principal.</p>
      <Link to="/" className="btn btn-primary">
        Ir al inicio
      </Link>
    </div>
  );
}

export default NotFound;
