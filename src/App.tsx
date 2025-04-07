import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Experience />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;