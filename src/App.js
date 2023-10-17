import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation';
import './App.css';
import Rockets from './pages/rockets';
import Dragons from './pages/dragons';
import Missions from './pages/missions';
import MyProfile from './pages/myProfile';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/space-traveling-react-redux" element={<Rockets />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
