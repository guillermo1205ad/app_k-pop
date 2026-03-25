import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LearnMode from './pages/LearnMode';
import NotFound from './pages/NotFound';
import PracticeMode from './pages/PracticeMode';
import Results from './pages/Results';
import ReviewMode from './pages/ReviewMode';
import SubjectDetail from './pages/SubjectDetail';
import Subjects from './pages/Subjects';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materias" element={<Subjects />} />
        <Route path="/materias/:subjectId" element={<SubjectDetail />} />
        <Route path="/materias/:subjectId/aprender" element={<LearnMode />} />
        <Route path="/materias/:subjectId/practicar" element={<PracticeMode />} />
        <Route path="/materias/:subjectId/repasar" element={<ReviewMode />} />
        <Route path="/materias/:subjectId/resultado" element={<Results />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
