/** @format */

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Projects from './routes/Projects';
import Resume from './routes/Resume';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
