import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, ExternalLink } from 'lucide-react';

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900" id="resume">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-4">Like what you see?</h2>
            <p className="text-gray-300 mb-8">
              Check out my resume to learn more about my experience, skills, and achievements
            </p>
            <FileText className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <motion.a
              href="https://somak-resume.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
            >
              View Resume <ExternalLink className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}