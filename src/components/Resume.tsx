import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, ExternalLink, ArrowRight } from "lucide-react";
import { ThemeType } from "../App";

export default function Resume({ theme }: { theme: ThemeType }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (theme === "terminal") {
    return (
      <section className="py-20 px-4 md:px-20 mb-20" id="resume" ref={ref}>
        <div className="max-w-4xl mx-auto border-t border-green-500/30 pt-10">
          <p className="mb-8 opacity-80">{`somak@bengaluru:~$ curl -L "https://somak-resume.vercel.app/"`}</p>
          <div className="border border-green-500/50 p-6 text-center">
            <p className="mb-4">
              Like what you see? Review my full credentials.
            </p>
            <a
              href="https://somak-resume.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:bg-green-500 hover:text-black transition-colors px-4 py-2 border border-green-500 gap-2"
            >
              [FETCH RESUME] <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`py-20 ${theme === "minimal" ? "bg-white" : "bg-slate-100"}`}
      id="resume"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
        >
          {theme === "minimal" ? (
            <div className="border-y border-gray-200 py-24 mt-10 flex flex-col md:flex-row justify-between items-center text-left">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-bold text-black tracking-tighter mb-6">
                  Like what you see?
                </h2>
                <p className="text-xl text-gray-500 font-light leading-relaxed">
                  Check out my resume to learn more about my experience, skills,
                  and achievements.
                </p>
              </div>
              <motion.a
                href="https://somak-resume.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 md:mt-0 flex items-center justify-center gap-3 bg-black text-white px-10 py-5 text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                View Resume <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          ) : (
            <div className="w-full bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
              <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center justify-center w-24 h-24 bg-blue-50 rounded-[1.5rem] shrink-0">
                  <FileText className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 tracking-tight">
                    Like what you see?
                  </h2>
                  <p className="text-lg text-slate-600 max-w-xl">
                    Check out my resume to learn more about my experience,
                    skills, and achievements.
                  </p>
                </div>
              </div>
              <motion.a
                href="https://somak-resume.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="shrink-0 w-full md:w-auto inline-flex justify-center items-center px-10 py-5 font-semibold transition-shadow bg-blue-600 text-white rounded-2xl shadow-lg hover:shadow-xl hover:bg-blue-700 text-lg"
              >
                View Resume <ExternalLink className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
