import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import InteractiveTerminal from './components/InteractiveTerminal';

export type ThemeType = 'minimal' | 'bento' | 'terminal';

function App() {
  const [theme, setTheme] = useState<ThemeType>('minimal');

  const themes: { id: ThemeType; label: string }[] = [
    { id: 'minimal', label: 'Minimalist' },
    { id: 'bento', label: 'Bento Box' },
    { id: 'terminal', label: 'Terminal' },
  ];

  const rootStyles = {
    minimal: 'bg-white text-gray-900',
    bento: 'bg-slate-100 text-slate-900',
    terminal: 'bg-black text-green-500 font-mono selection:bg-green-900 selection:text-black',
  }[theme];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${rootStyles}`}>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-gray-900/80 backdrop-blur-md p-1.5 rounded-full border border-gray-700/50 shadow-2xl">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors ${
                theme === t.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {theme === t.id && (
                <motion.div
                  layoutId="active-theme-pill"
                  className="absolute inset-0 bg-blue-600 rounded-full z-[-1]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      {theme === 'terminal' ? (
        <InteractiveTerminal />
      ) : (
        <>
          <Hero theme={theme} />
          <Experience theme={theme} />
          <Projects theme={theme} />
          <Resume theme={theme} />
        </>
      )}
    </div>
  );
}

export default App;