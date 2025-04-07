import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;