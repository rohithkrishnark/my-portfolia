import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './pages/Container';
import About from './pages/About';
import Skill from './pages/Skill';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container/>} />

      </Routes>
    </Router>
  );
}

export default App;
