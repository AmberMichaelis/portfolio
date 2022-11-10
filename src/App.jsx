/** @format */

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Blog from './routes/Blog';
import Resume from './routes/Resume';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
