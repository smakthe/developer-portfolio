import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { ThemeType } from '../App';

type CardVariant = 'large' | 'medium' | 'dark' | 'accent';

const projects: {
  title: string;
  description: string;
  image: string;
  url: string;
  variant: CardVariant;
}[] = [
  
  {
    title: "Ecomart",
    description: "A high-performance e-commerce platform featuring a responsive React and TypeScript frontend powered by a secure, JWT-authenticated Ruby on Rails REST API.",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/e-commerce.png?auto=format&fit=crop&q=80&w=800",
    url: "https://ecomart-online.netlify.app/",
    variant: 'large',
  },
  {
    title: "Job Board",
    description: "A comprehensive web platform built with Ruby on Rails that connects job seekers with recruiters featuring job listings, applications, and dashboards for both recruiters and job seekers",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/job-board.png?auto=format&fit=crop&q=80&w=800",
    url: "https://job-board-vnd1.onrender.com/",
    variant: 'medium',
  },
  {
    title: "Web Developer's Dictionary",
    description: "Designed for web developers, the Webdev Dictionary is your go-to app for exploring keywords related to web development and their definitions",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/wdictionary.png?auto=format&fit=crop&q=80&w=800",
    url: "https://wdictionary.vercel.app/",
    variant: 'medium',
  },
  {
    title: "School Manager",
    description: "A comprehensive and role-based school administration platform featuring a React frontend with tailored user dashboards, powered by a secure Ruby on Rails API and Elasticsearch.",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/school-manager.png?auto=format&fit=crop&q=80&w=800",
    url: "https://sm-online.netlify.app/",
    variant: 'large',
  },
  {
    title: "DFA Simulator",
    description: "A simulator for creating finite state machines and playing around with them",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/dfa-sim.png?auto=format&fit=crop&q=80&w=800",
    url: "https://dfa-sim.netlify.app/",
    variant: 'medium',
  },
  {
    title: "AI or Not Game",
    description: "An engaging game testing AI image recognition skills by putting two images side-by-side and letting you guess the image which is NOT the AI generated one",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/ai-or-not.png?auto=format&fit=crop&q=80&w=800",
    url: "https://ai-or-not-game.vercel.app/",
    variant: 'medium',
  },
  {
    title: "Tic Tac Toe Game",
    description: "A tic-tac-toe game to play with friends or challenge yourself vs AI",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/tic-tac-toe-vs-ai.png?auto=format&fit=crop&q=80&w=800",
    url: "https://tic-tac-toe-vs-ai-game.vercel.app/",
    variant: 'medium',
  },
  {
    title: "Snake Game",
    description: "A feature-rich snake game with classic, fast and obstacle modes to challenge yourself",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/snake-game.png?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/smakthe/snake-game/",
    variant: 'dark',
  },
  {
    title: "Cerver",
    description: "Cerver is a backend-only API written in C for scaffolding CRUD resources including a basic three-tier database and a multi-threaded HTTP server",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/cerver.png?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/smakthe/cerver/",
    variant: 'dark',
  },
  {
    title: "কলম",
    description: "কলম (Kolom) is a toy scripting language using Ruby that uses Bengali keywords instead of English letting you write Ruby-like programs in Bengali",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/kolom.png?auto=format&fit=crop&q=80&w=800",
    url: "https://rubygems.org/gems/kolom/",
    variant: 'accent',
  },
];

// Minimal — indices that render as full-width featured cards
const isFullWidth = (index: number) => [0, 3].includes(index);

// Bento — grid-span classes per variant
const getBentoSpanClass = (variant: CardVariant) =>
  variant === 'large' ? 'sm:col-span-2 md:col-span-2' : 'col-span-1';

export default function Projects({ theme }: { theme: ThemeType }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // ─── Terminal theme — untouched ───────────────────────────────────────────
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

  // ─── Minimalist theme ─────────────────────────────────────────────────────
  if (theme === 'minimal') {
    return (
      <section className="py-24 bg-white" id="projects">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

          {/* Section heading */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="border-b border-gray-200 pb-8 mb-20"
          >
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black tracking-tighter leading-none">
              Featured Projects
            </h2>
          </motion.div>

          {/* Staggered asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {projects.map((project, index) => {
              const full = isFullWidth(index);
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`group flex flex-col ${full ? 'md:col-span-2' : 'md:col-span-1'}`}
                >
                  {full ? (
                    /* Full-width featured card: horizontal layout on md+ */
                    <div className="flex flex-col md:flex-row gap-0 md:gap-10 items-start">
                      <div className="w-full md:w-[60%] aspect-[16/10] overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex flex-col justify-between w-full md:w-[40%] pt-6 md:pt-0 border-t border-black md:border-t-0 md:border-l md:border-black md:pl-10">
                        <div>
                          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-4">
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight leading-snug mb-4">
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover="hover"
                          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black uppercase tracking-widest"
                        >
                          <span>View Project</span>
                          <motion.span
                            variants={{ hover: { x: 4, y: -4 } }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.span>
                        </motion.a>
                      </div>
                    </div>
                  ) : (
                    /* Half-width card: vertical layout */
                    <>
                      <div className="aspect-[3/2] overflow-hidden bg-gray-100 mb-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="border-t border-black pt-5 flex flex-col flex-1">
                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-3">
                          {String(index + 1).padStart(2, '0')}
                        </p>
                        <div className="flex items-start justify-between gap-4 flex-1">
                          <div>
                            <h3 className="text-xl font-bold text-black tracking-tight mb-3">
                              {project.title}
                            </h3>
                            <p className="text-sm text-gray-400 font-light leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          <motion.a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 3, y: -3 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            className="flex-shrink-0 mt-1 text-black hover:text-gray-400 transition-colors"
                            aria-label={`View ${project.title}`}
                          >
                            <ArrowUpRight className="w-5 h-5" />
                          </motion.a>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // ─── Bento Box theme ──────────────────────────────────────────────────────
  return (
    <section className="py-24 bg-slate-100" id="projects">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

        {/* Section heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Featured Projects
          </h2>
        </motion.div>

        {/* Bento grid — auto-rows-auto prevents fixed-height overflow on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-auto">
          {projects.map((project, index) => {
            const isDark = project.variant === 'dark';
            const isAccent = project.variant === 'accent';
            const isLarge = project.variant === 'large';

            /* Accent card — typographic, no image */
            if (isAccent) {
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="group col-span-1 relative flex flex-col justify-between
                             bg-blue-600 rounded-3xl ring-1 ring-blue-700/30
                             p-7 min-h-[260px] overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-500/40 pointer-events-none" />
                  <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-blue-700/30 pointer-events-none" />
                  <div className="relative z-10">
                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-200 mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="text-3xl font-bold text-white leading-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-100/80 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 mt-6 self-start inline-flex items-center gap-2
                               text-xs font-bold tracking-widest uppercase text-white
                               border border-white/30 hover:bg-white hover:text-blue-600
                               transition-colors px-4 py-2 rounded-full"
                  >
                    View <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              );
            }

            /* Standard, dark, and large cards */
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className={`
                  group relative flex flex-col overflow-hidden rounded-3xl
                  ring-1 min-h-[260px]
                  ${getBentoSpanClass(project.variant)}
                  ${isLarge ? 'sm:min-h-[340px]' : ''}
                  ${isDark
                    ? 'bg-slate-900 ring-slate-800'
                    : 'bg-white ring-slate-900/5 hover:ring-slate-900/10'
                  }
                  transition-shadow duration-300 hover:shadow-xl
                `}
              >
                {/* Light/large cards: image at top with rounded-t-3xl clip */}
                {!isDark && (
                  <div className={`overflow-hidden rounded-t-3xl flex-shrink-0 bg-slate-200 ${isLarge ? 'h-52 sm:h-64' : 'h-44'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                )}

                {/* Dark cards: image as dim background overlay */}
                {isDark && (
                  <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-10 pointer-events-none">
                    <img src={project.image} alt="" className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Card body */}
                <div className="relative flex flex-col flex-1 p-6 justify-between">
                  <div>
                    <p className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className={`font-bold leading-snug ${isLarge ? 'text-xl sm:text-2xl' : 'text-lg'} ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {project.title}
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title}`}
                        className={`flex-shrink-0 mt-0.5 transition-colors
                          ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-300 hover:text-blue-600'}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                    <p className={`text-sm leading-relaxed ${isLarge ? 'line-clamp-3' : 'line-clamp-2'} ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Dark card CTA button */}
                  {isDark && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 self-start inline-flex items-center gap-2
                                 text-xs font-bold tracking-widest uppercase
                                 text-slate-400 hover:text-white border border-slate-700
                                 hover:border-slate-500 transition-colors px-4 py-2 rounded-full"
                    >
                      View Project <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
