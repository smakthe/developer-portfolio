import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Web Developer's Dictionary",
    description: "Designed for web developers, the Webdev Dictionary is your go-to app for exploring keywords related to web development and their definitions",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/wdictionary.png?auto=format&fit=crop&q=80&w=800",
    url: "https://wdictionary.vercel.app/"
  },
  {
    title: "AI or Not Game",
    description: "An engaging game testing AI image recognition skills by putting two images side-by-side and letting you guess the image which is NOT the AI generated one!",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/ai-or-not.png?auto=format&fit=crop&q=80&w=800",
    url: "https://ai-or-not-game.vercel.app/"
  },
  {
    title: "Love Calculator",
    description: "A fun application to calculate compatibility",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/love-calculator.png?auto=format&fit=crop&q=80&w=800",
    url: "https://calculate-love.netlify.app/"
  },
  {
    title: "কলম",
    description: "কলম (Kolom) is a toy scripting language using Ruby that uses Bengali keywords instead of English letting you write Ruby-like programs in Bengali",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/kolom.png?auto=format&fit=crop&q=80&w=800",
    url: "https://rubygems.org/gems/kolom/"
  },
  {
    title: "Cerver",
    description: "Cerver is a backend-only API written in C for scaffolding CRUD resources including a basic three-tier database and a multi-threaded HTTP server",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/cerver.png?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/smakthe/cerver/"
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black" id="projects">
      <div className="container mx-auto px-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Visit Site <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
