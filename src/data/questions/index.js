import { mathQuestions } from './mathQuestions';
import { scienceQuestions } from './scienceQuestions';
import { languageQuestions } from './languageQuestions';
import { historyQuestions } from './historyQuestions';
import { englishQuestions } from './englishQuestions';
import { julietaQuestions } from './julietaQuestions';

export const questionsBySubject = {
  matematica: mathQuestions,
  ciencias: scienceQuestions,
  lenguaje: languageQuestions,
  historia: historyQuestions,
  ingles: englishQuestions,
  julieta: julietaQuestions
};

export const allQuestions = [
  ...mathQuestions,
  ...scienceQuestions,
  ...languageQuestions,
  ...historyQuestions,
  ...englishQuestions,
  ...julietaQuestions
];

export function getQuestionsBySubject(subjectId) {
  return questionsBySubject[subjectId] || [];
}

export const questionBankStats = Object.entries(questionsBySubject).reduce((acc, [subjectId, questions]) => {
  acc[subjectId] = questions.length;
  return acc;
}, {});
