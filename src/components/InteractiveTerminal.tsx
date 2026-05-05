import { useState, useRef, useEffect, ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  { title: "Web Developer's Dictionary", description: "Your go-to app for exploring keywords related to web development and their definitions", url: "https://wdictionary.vercel.app/" },
  { title: "AI or Not Game", description: "An engaging game testing AI image recognition skills vs human intuition.", url: "https://ai-or-not-game.vercel.app/" },
  { title: "Tic Tac Toe Game", description: "A tic-tac-toe game to play with friends or challange yourself vs AI", url: "https://tic-tac-toe-vs-ai-game.vercel.app/" },
  { title: "Snake Game", description: "A feature-rich snake game with classic, fast and obstacle modes", url: "https://github.com/smakthe/snake-game/" },
  { title: "DFA Simulator", description: "A simulator for creating finite state machines and playing around with them", url: "https://dfa-sim.netlify.app/" },
  { title: "Job Board", description: "Comprehensive web platform built with Ruby on Rails that connects job seekers with recruiters.", url: "https://job-board-vnd1.onrender.com/" },
  { title: "Cerver", description: "Backend-only API written in C for scaffolding CRUD resources including a multi-threaded HTTP server", url: "https://github.com/smakthe/cerver/" },
  { title: "কলম", description: "কলম (Kolom) is a toy scripting language using Ruby metaprogramming with Bengali keywords", url: "https://rubygems.org/gems/kolom/" }
];

const skillCategories = [
  { title: "Languages", skills: ["Ruby", "JavaScript", "TypeScript", "Python", "C", "C++", "Java", "PHP", "Go", "Rust"] },
  { title: "Databases", skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "DynamoDB"] },
  { title: "Frameworks", skills: ["Ruby on Rails", "MERN Stack", "Next.js", "Svelte", "Qwik.js"] },
  { title: "Cloud & DevOps", skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Airflow", "Ansible"] }
];

// --- Command Output Components ---
const WelcomeOutput = () => (
  <div className="mt-2 mb-6">
    <p className="opacity-90">Welcome to Somak Chakraborty's portfolio.</p>
    <p className="opacity-90">Type <span className="text-green-400 font-bold">'help'</span> to see available commands.</p>
  </div>
);

const HelpOutput = () => (
  <div className="mt-2 mb-6">
    <p className="mb-2 text-green-400">Available commands:</p>
    <ul className="space-y-1 opacity-90 pl-2">
      <li><span className="font-bold text-green-300 w-28 inline-block">whoami</span> - Display profile summary</li>
      <li><span className="font-bold text-green-300 w-28 inline-block">experience</span> - List professional experience & tech stack</li>
      <li><span className="font-bold text-green-300 w-28 inline-block">projects</span> - View featured portfolio projects</li>
      <li><span className="font-bold text-green-300 w-28 inline-block">resume</span> - Fetch resume download link</li>
      <li><span className="font-bold text-green-300 w-28 inline-block">clear</span> - Clear terminal output</li>
      <li><span className="font-bold text-green-300 w-28 inline-block">help</span> - Show this message</li>
    </ul>
  </div>
);

const LsOutput = () => (
  <div className="mt-2 mb-6 opacity-90">
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      <span className="text-green-300 font-bold">mashu.sh</span>
    </div>
  </div>
);

const WhoamiOutput = () => (
  <div className="mt-2 mb-6 max-w-4xl border-l-2 border-green-500/50 pl-4">
    <h1 className="text-3xl font-bold mb-2 text-green-400">Somak Chakraborty</h1>
    <p className="opacity-90 mb-4 leading-relaxed">
      Senior Software Engineer holding an M.Sc. in Computer Science.<br/>
      With over 7.5 years of professional experience, I specialize in building robust, fault-tolerant SaaS applications ensuring high throughput and low latency. I bridge the gap between elegant system architecture and high-performance frontend interfaces.
    </p>
    <p className="text-green-400 mb-2">Core Focus Areas:</p>
    <ul className="opacity-80 space-y-1 pl-2">
      <li>[+] System Architecture & Cloud Infrastructure</li>
      <li>[+] Advanced Ruby Metaprogramming & Optimization</li>
      <li>[+] Modern MERN Stack & Frontend Ecosystems</li>
      <li>[+] Generative AI & Prompt Engineering</li>
    </ul>
  </div>
);

const ExperienceOutput = () => (
  <div className="mt-2 mb-6">
    <p className="mb-6 opacity-90 leading-relaxed max-w-4xl border-l-2 border-green-500/50 pl-4">
      I'm a computer science professional with 7 years of experience in building robust, scalable and fault-tollerant SaaS based applications with high throughput and low latency. My primary tech stack has been Ruby on Rails but I also have experience with LAMP and MERN stack.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4">
      {skillCategories.map(c => (
        <div key={c.title}>
          <span className="font-bold text-green-400">{c.title}</span>
          <p className="opacity-80 mt-1">{c.skills.join(', ')}</p>
        </div>
      ))}
    </div>
  </div>
);

const ProjectsOutput = () => (
  <div className="mt-2 mb-6">
    <p className="mb-4 text-green-400">Fetching projects...</p>
    {projects.map((p, i) => (
      <div key={i} className="mb-4 pl-4 border-l-2 border-green-500/50">
        <div className="flex flex-wrap items-center gap-3 mb-1">
          <span className="font-bold text-lg text-white">{p.title}</span>
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:bg-green-500 hover:text-black border border-green-500/50 px-2 text-xs flex items-center gap-1 py-0.5 transition-colors">
            [VIEW] <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <p className="opacity-70 text-sm max-w-2xl">{p.description}</p>
      </div>
    ))}
  </div>
);

const ResumeOutput = () => (
  <div className="mt-2 mb-6 border border-green-500/50 p-4 inline-block bg-green-500/5">
    <p className="mb-4 text-green-400">Like what you see?</p>
    <p className="mb-4 text-green-400">Check out my resume to learn more</p>
    <a href="https://somak-resume.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:bg-green-500 hover:text-black px-6 py-2 border border-green-500 inline-flex items-center gap-2 transition-colors">
      [VIEW RESUME] <ExternalLink className="w-4 h-4" />
    </a>
  </div>
);

const MashuOutput = () => (
  <pre className="mt-2 mb-6 text-yellow-400 font-mono leading-tight">
{`
 /\\_/\\
( o.o )
 > ^ <
Meow! I'm Mashu the Persian cat!
`}
  </pre>
);

const SudoOutput = () => (
  <div className="mt-2 mb-6 text-red-500 font-bold">
    You are not in the sudoers file. This incident will be reported.
  </div>
);

// --- Main Component ---
type HistoryItem = { id: number; command?: string; output: ReactNode };

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  
  // State for rendering output
  const [history, setHistory] = useState<HistoryItem[]>([
    { id: Date.now(), output: <WelcomeOutput /> }
  ]);
  
  // State for arrow key navigation
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Keep input focused when clicking anywhere on the terminal background
  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    // Add command to navigation history
    setCmdHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1); // Reset index after executing

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output: ReactNode;
    switch (cmd) {
      case 'help': output = <HelpOutput />; break;
      case 'ls':
      case 'ls -l':
      case 'ls -la': output = <LsOutput />; break;
      case 'whoami': output = <WhoamiOutput />; break;
      case 'experience': output = <ExperienceOutput />; break;
      case 'projects': output = <ProjectsOutput />; break;
      case 'resume': output = <ResumeOutput />; break;
      case 'sudo': output = <SudoOutput />; break;
      case './mashu.sh': output = <MashuOutput />; break;
      default: output = <div className="mt-2 mb-6 text-green-500 opacity-80">Command not found: {cmd}. Type 'help' for available commands.</div>;
    }

    setHistory(prev => [...prev, { id: Date.now(), command: cmdStr, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); // Prevent cursor jumping
      if (cmdHistory.length > 0) {
        // If we are not currently navigating history, start from the last command
        const newIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        // If we go past the newest command, clear the input
        if (newIndex >= cmdHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(cmdHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div 
      className="min-h-screen bg-black text-green-500 font-mono text-sm md:text-base pt-24 pb-24 px-4 md:px-20 selection:bg-green-900 selection:text-white flex flex-col"
      onClick={handleWrapperClick}
    >
      <div className="flex-1 max-w-5xl mx-auto w-full">
        {/* Render Command History */}
        {history.map((item) => (
          <div key={item.id}>
            {/* Only render the command line if there was an actual command issued (skips the welcome message) */}
            {item.command && (
              <div className="flex gap-2 opacity-80">
                <span className="text-green-400 whitespace-nowrap">somak@bengaluru:~$</span>
                <span>{item.command}</span>
              </div>
            )}
            {item.output}
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2">
          <span className="text-green-400 whitespace-nowrap">somak@bengaluru:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-green-500 caret-green-500"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
        </div>
        <div ref={endRef} />
      </div>

      {/* Mobile Quick Commands Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 border-t border-green-500/30 p-3 flex gap-2 overflow-x-auto z-50 hide-scrollbar backdrop-blur-md">
        {['help', 'whoami', 'experience', 'projects', 'resume', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={(e) => {
              e.stopPropagation();
              executeCommand(cmd);
            }}
            className="text-green-500 border border-green-500/50 hover:bg-green-500 hover:text-black px-4 py-1.5 whitespace-nowrap text-sm font-medium transition-colors"
          >
            [{cmd}]
          </button>
        ))}
      </div>
    </div>
  );
}