import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Server, Terminal as TermIcon, ArrowRight } from 'lucide-react';
import { ThemeType } from '../App';

export default function Hero({ theme }: { theme: ThemeType }) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const skillsList = [
    { icon: Code2, label: 'Full-Stack', desc: 'Core Dev' },
    { icon: Server, label: 'DevOps', desc: 'Infrastructure' },
    { icon: Database, label: 'Database', desc: 'Architecture' },
    { icon: Cloud, label: 'Cloud', desc: 'Deployment' }
  ];

  if (theme === 'terminal') {
    return (
      <section className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-20">
        <div className="max-w-4xl w-full border border-green-500/30 p-8 bg-black/50 shadow-[0_0_15px_rgba(34,197,94,0.1)] mx-auto mt-16">
          <p className="mb-2 opacity-80">{`somak@bengaluru:~$ whoami`}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Somak Chakraborty
          </h1>
          <p className="mb-2 opacity-80">{`somak@bengaluru:~$ cat profile.txt`}</p>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Senior Software Engineer holding an M.Sc. in Computer Science. 
            Architecting robust, fault-tolerant backend systems and high-performance frontend interfaces for 7.5+ years.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 opacity-90">
            <p>{`> [Stack]: Ruby on Rails, MERN, Gen AI`}</p>
            <p>{`> [Cloud]: AWS (EC2, EKS), Docker, K8s`}</p>
            <p>{`> [Database]: PostgreSQL, MongoDB, Redis`}</p>
            <p>{`> [Focus]: Metaprogramming, System Architecture`}</p>
          </div>
          <button onClick={scrollToProjects} className="hover:bg-green-500 hover:text-black transition-colors px-6 py-2 border border-green-500 flex items-center gap-2">
            <TermIcon size={18} /> {`./view_projects.sh`}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20 mt-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {theme === 'minimal' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-start justify-between border-y border-gray-200 py-24 text-left"
          >
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-8xl font-bold text-black tracking-tighter mb-6 leading-none">
                Somak<br />Chakraborty
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-light mb-12">
                Building a Digital Future
              </p>
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ gap: "1rem" }}
                className="bg-black text-white hover:bg-gray-800 px-10 py-4 font-medium transition-all text-lg inline-flex items-center gap-3"
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="mt-16 lg:mt-0 grid grid-cols-2 gap-x-12 gap-y-12 w-full lg:w-auto lg:border-l border-gray-200 lg:pl-16">
              {skillsList.map((skill, i) => (
                <motion.div key={i} whileHover={{ x: 5 }} className="flex flex-col">
                  <skill.icon className="w-7 h-7 mb-4 text-black" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-black mb-1">{skill.label}</span>
                  <span className="text-sm text-gray-500">{skill.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="lg:col-span-2 lg:row-span-2 flex flex-col justify-center text-left p-10 md:p-14 bg-white rounded-[2.5rem] shadow-sm border border-slate-200">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
                Somak<br />Chakraborty
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-slate-600 font-light">
                Building a Digital Future
              </p>
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="self-start px-8 py-4 font-medium transition-all bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-600/30 hover:bg-blue-700 inline-flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {skillsList.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-start justify-between p-8 bg-white rounded-[2.5rem] shadow-sm border border-slate-200 lg:col-span-1 lg:row-span-1 min-h-[200px]"
              >
                <div className="p-4 bg-blue-50 rounded-2xl mb-6">
                  <skill.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <span className="block text-lg font-bold text-slate-900 mb-1">{skill.label}</span>
                  <span className="text-sm text-slate-500 font-medium">{skill.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}