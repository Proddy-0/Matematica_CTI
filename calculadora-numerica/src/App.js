// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Rounder from './components/Rounder';
import ScientificNotation from './components/ScientificNotation';
import Exponentiation from './components/Exponentiation';
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
          </ul>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Rounder />} />
            <Route path="/notacao" element={<ScientificNotation />} />
            <Route path="/potenciacao" element={<Exponentiation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
