import { STORAGE_KEY } from './constants';

const safeLocalStorage = {
  getItem(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  },
  setItem(key, value) {
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch (error) {
      return false;
    }
  }
};

export function createDefaultProgress(subjects) {
  const subjectProgress = subjects.reduce((acc, subject) => {
    acc[subject.id] = {
      percent: 0,
      stars: 0,
      totalPractices: 0,
      totalCorrect: 0,
      totalAnswered: 0,
      bestScore: 0,
      learnCompleted: false,
      reviewCompleted: false,
      lastVisitedSection: 'inicio',
      lastSession: null,
      badges: []
    };
    return acc;
  }, {});

  return {
    subjects: subjectProgress,
    globalStars: 0,
    studentProfile: {
      name: ''
    },
    updatedAt: new Date().toISOString()
  };
}

export function loadProgress(subjects) {
  const raw = safeLocalStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return createDefaultProgress(subjects);
  }

  try {
    const parsed = JSON.parse(raw);
    const fallback = createDefaultProgress(subjects);

    return {
      ...fallback,
      ...parsed,
      subjects: {
        ...fallback.subjects,
        ...(parsed.subjects || {})
      }
    };
  } catch (error) {
    return createDefaultProgress(subjects);
  }
}

export function saveProgress(progress) {
  const payload = {
    ...progress,
    updatedAt: new Date().toISOString()
  };
  safeLocalStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function clearProgress(subjects) {
  const clean = createDefaultProgress(subjects);
  saveProgress(clean);
  return clean;
}
