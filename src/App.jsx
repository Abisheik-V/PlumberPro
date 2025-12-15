import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Quote from './components/Quote.jsx';
import './App.css';
import './assets/style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        {/* Additional routes can be added here */}
      </Routes>
    </HashRouter>
  );
}

export default App;
