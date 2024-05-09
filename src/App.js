// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import About from './routes/About';
import Portfolio from './routes/Portfolio';
import Contact from './routes/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className='mt-0'>
        <Home />
        <Portfolio />
        <About />
        <Contact />
      </div>
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
