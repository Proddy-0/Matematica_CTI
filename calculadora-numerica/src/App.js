import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Rounder from './components/Rounder';
import ScientificNotation from './components/ScientificNotation';
import Exponentiation from './components/Exponentiation';
import Converter from './components/Converter';
import ScientificCalculator from './components/ScientificCalculator';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <nav className="navbar">
          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-button">Arredondamento</Link>
            </li>
            <li>
              <Link to="/notacao" className="nav-button">Notação Científica</Link>
            </li>
            <li>
              <Link to="/potenciacao" className="nav-button">Potenciação</Link>
            </li>
            <li>
              <Link to="/converter" className="nav-button">Conversor</Link>
            </li>
            <li>
              <Link to="/calculadora" className="nav-button">Calculadora Científica</Link>
            </li>
          </ul>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<Rounder />} />
          <Route path="/notacao" element={<ScientificNotation />} />
          <Route path="/potenciacao" element={<Exponentiation />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/calculadora" element={<ScientificCalculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;