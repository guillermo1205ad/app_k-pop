import { formatPercent } from '../utils/helpers';

function ProgressBar({ value = 0, label = 'Progreso', color = 'var(--accent-1)' }) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <section className="progress-shell" aria-label={`${label}: ${formatPercent(safeValue)}`}>
      <header className="progress-header">
        <span>{label}</span>
        <strong>{formatPercent(safeValue)}</strong>
      </header>
      <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={safeValue}>
        <span className="progress-value" style={{ width: `${safeValue}%`, background: color }} />
      </div>
    </section>
  );
}

export default ProgressBar;
