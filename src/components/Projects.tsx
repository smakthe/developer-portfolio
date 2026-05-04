import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { ThemeType } from '../App';

const projects = [
  {
    title: "Web Developer's Dictionary",
    description: "Designed for web developers, the Webdev Dictionary is your go-to app for exploring keywords related to web development and their definitions",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/wdictionary.png?auto=format&fit=crop&q=80&w=800",
    url: "https://wdictionary.vercel.app/"
  },
  {
    title: "AI or Not Game",
    description: "An engaging game testing AI image recognition skills by putting two images side-by-side and letting you guess the image which is NOT the AI generated one",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/ai-or-not.png?auto=format&fit=crop&q=80&w=800",
    url: "https://ai-or-not-game.vercel.app/"
  },
  {
    title: "Tic Tac Toe Game",
    description: "A tic-tac-toe game to play with friends or challange yourself vs AI",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/tic-tac-toe-vs-ai.png?auto=format&fit=crop&q=80&w=800",
    url: "https://tic-tac-toe-vs-ai-game.vercel.app/"
  },
  {
    title: "Snake Game",
    description: "A feature-rich snake game with classic, fast and obstacle modes to challange yourself",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/snake-game.png?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/smakthe/snake-game/"
  },
  {
    title: "DFA Simulator",
    description: "A simulator for creating finite state machines and playing around with them",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/dfa-sim.png?auto=format&fit=crop&q=80&w=800",
    url: "https://dfa-sim.netlify.app/"
  },
  {
    title: "Job Board",
    description: "A comprehensive web platform built with Ruby on Rails that connects job seekers with recruiters featuring job listings, job applications and dashboards for both recruiters and job seekers",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/job-board.png?auto=format&fit=crop&q=80&w=800",
    url: "https://job-board-vnd1.onrender.com/"
  },
  {
    title: "Cerver",
    description: "Cerver is a backend-only API written in C for scaffolding CRUD resources including a basic three-tier database and a multi-threaded HTTP server",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/cerver.png?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/smakthe/cerver/"
  },
  {
    title: "কলম",
    description: "কলম (Kolom) is a toy scripting language using Ruby that uses Bengali keywords instead of English letting you write Ruby-like programs in Bengali",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/kolom.png?auto=format&fit=crop&q=80&w=800",
    url: "https://rubygems.org/gems/kolom/"
  }
];

export default function Projects({ theme }: { theme: ThemeType }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (theme === 'terminal') {
    return (
      <section className="py-20 px-4 md:px-20" id="projects" ref={ref}>
        <div className="max-w-4xl mx-auto border-t border-green-500/30 pt-10">
          <p className="mb-8 opacity-80">{`somak@bengaluru:~/projects$ ls -la`}</p>
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="mb-8 pl-4 border-l-2 border-green-500/50"
            >
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <span className="font-bold text-lg">{project.title}</span>
                <span className="text-green-800 hidden md:inline">|</span>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:bg-green-500 hover:text-black transition-colors px-2 py-0.5 text-sm flex items-center gap-1 border border-green-500/50">
                  [VIEW] <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="opacity-70">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  const getBentoSpan = (index: number) => {
    if (index === 0) return 'md:col-span-2 md:row-span-2';
    if (index === 5) return 'md:col-span-2 md:row-span-1';
    return 'md:col-span-1 md:row-span-1';
  };

  return (
    <section className={`py-24 ${theme === 'minimal' ? 'bg-white' : 'bg-gray-50'}`} id="projects">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className={
            theme === 'minimal' 
              ? 'text-5xl md:text-7xl font-bold text-black tracking-tighter mb-20 border-b border-gray-200 pb-8 text-left' 
              : 'text-3xl md:text-4xl font-bold mb-16 tracking-tight text-slate-900 text-center'
          }
        >
          Featured Projects
        </motion.h2>

        {theme === 'minimal' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-8">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                  />
                </div>
                <div className="flex justify-between items-start border-t border-black pt-6">
                  <div>
                    <h3 className="text-2xl font-bold text-black tracking-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-black hover:text-gray-500 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-3 ml-4 flex-shrink-0"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 auto-rows-[300px] grid-flow-dense">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden flex flex-col bg-white rounded-3xl shadow-sm border border-slate-200 ${getBentoSpan(index)}`}
              >
                <div className={`relative ${index === 0 ? 'h-3/5' : 'h-48'} overflow-hidden bg-gray-100`}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {project.title}
                    </h3>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="transition-colors text-slate-400 hover:text-blue-600">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm mt-2 text-slate-600">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}