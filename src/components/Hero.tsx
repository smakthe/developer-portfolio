import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Server } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Somak Chakraborty
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Building a Digital Future
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Code2 className="w-12 h-12 text-blue-400 mb-2" />
              <span className="text-gray-300">Full-Stack</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Server className="w-12 h-12 text-purple-400 mb-2" />
              <span className="text-gray-300">DevOps</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Database className="w-12 h-12 text-green-400 mb-2" />
              <span className="text-gray-300">Database</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Cloud className="w-12 h-12 text-orange-400 mb-2" />
              <span className="text-gray-300">Cloud</span>
            </motion.div>
          </div>

          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow cursor-pointer"
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}