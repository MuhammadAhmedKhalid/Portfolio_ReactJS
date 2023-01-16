import React from 'react';
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import Project from './routes/Project';
import About from './routes/About';
import Contact from './routes/Contact';
import FinalScreen from './routes/FinalScreen';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/finalScreen' element={<FinalScreen />} />
      </Routes>
    </div>
  );
}

export default App;
