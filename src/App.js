import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="homework1/" element={<Home />} />
        <Route path="homework1/about" element={<About />} />
        <Route path="homework1/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
