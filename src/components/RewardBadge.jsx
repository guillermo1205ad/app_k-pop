function RewardBadge({ badge, unlocked = false }) {
  return (
    <article className={`reward-badge ${unlocked ? 'is-unlocked' : ''}`} aria-label={`${badge.title} ${unlocked ? 'desbloqueada' : 'bloqueada'}`}>
      <div className="reward-icon" aria-hidden="true">
        {badge.icon}
      </div>
      <h4>{badge.title}</h4>
      <p>{badge.label}</p>
    </article>
  );
}

export default RewardBadge;
