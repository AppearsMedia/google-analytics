import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import StartPage from './pages/StartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
