import { createContext, useContext, useMemo, useState } from 'react';
import { subjects } from '../data/subjects';
import { clearProgress, loadProgress, saveProgress } from '../utils/storage';
import { clamp } from '../utils/helpers';

const ProgressContext = createContext(null);

function calcSubjectPercent(subjectProgress) {
  const learnPart = subjectProgress.learnCompleted ? 100 : 0;
  const reviewPart = subjectProgress.reviewCompleted ? 100 : 0;
  const practicePart = clamp(subjectProgress.bestScore || 0, 0, 100);
  return Math.round((learnPart + reviewPart + practicePart) / 3);
}

function computeGlobalStars(progressState) {
  const total = Object.values(progressState.subjects || {}).reduce(
    (acc, item) => acc + (item.stars || 0),
    0
  );
  return total;
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => loadProgress(subjects));

  const setAndPersist = (updater) => {
    setProgress((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      const payload = {
        ...next,
        globalStars: computeGlobalStars(next)
      };
      saveProgress(payload);
      return payload;
    });
  };

  const updateSubject = (subjectId, updateFn) => {
    setAndPersist((prev) => {
      const current = prev.subjects[subjectId];
      if (!current) {
        return prev;
      }

      const updated = updateFn(current);
      const withPercent = {
        ...updated,
        percent: calcSubjectPercent(updated)
      };

      return {
        ...prev,
        subjects: {
          ...prev.subjects,
          [subjectId]: withPercent
        }
      };
    });
  };

  const completeLearnMode = (subjectId) => {
    updateSubject(subjectId, (current) => ({
      ...current,
      learnCompleted: true
    }));
  };

  const completeReviewMode = (subjectId) => {
    updateSubject(subjectId, (current) => ({
      ...current,
      reviewCompleted: true
    }));
  };

  const recordPracticeSession = (subjectId, payload) => {
    updateSubject(subjectId, (current) => {
      const scorePercent = Math.round((payload.correct / payload.total) * 100);
      const nextBest = Math.max(current.bestScore || 0, scorePercent);
      const stars = Math.max(current.stars || 0, Math.ceil(scorePercent / 20));

      return {
        ...current,
        stars,
        bestScore: nextBest,
        totalPractices: (current.totalPractices || 0) + 1,
        totalCorrect: (current.totalCorrect || 0) + payload.correct,
        totalAnswered: (current.totalAnswered || 0) + payload.total,
        lastSession: {
          ...payload,
          scorePercent,
          playedAt: new Date().toISOString()
        }
      };
    });
  };

  const setLastVisitedSection = (subjectId, sectionName) => {
    updateSubject(subjectId, (current) => ({
      ...current,
      lastVisitedSection: sectionName
    }));
  };

  const setStudentName = (name) => {
    const cleanName = (name || '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 24);

    setAndPersist((prev) => ({
      ...prev,
      studentProfile: {
        ...(prev.studentProfile || {}),
        name: cleanName
      }
    }));
  };

  const resetProgress = () => {
    const currentName = progress.studentProfile?.name || '';
    const clean = clearProgress(subjects);
    const payload = {
      ...clean,
      studentProfile: {
        name: currentName
      }
    };
    saveProgress(payload);
    setProgress(payload);
  };

  const value = useMemo(
    () => ({
      progress,
      updateSubject,
      completeLearnMode,
      completeReviewMode,
      recordPracticeSession,
      setLastVisitedSection,
      setStudentName,
      resetProgress
    }),
    [progress]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used inside ProgressProvider');
  }
  return context;
}
