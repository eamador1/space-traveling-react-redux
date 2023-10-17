import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation';
import './App.css';
import Rockets from './pages/rockets';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/space-traveling-react-redux" element={<Rockets />} />
      </Routes>
    </Router>
  );
}

export default App;
