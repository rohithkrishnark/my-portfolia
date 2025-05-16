import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './pages/Container';

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
