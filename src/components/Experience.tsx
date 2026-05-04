import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeType } from '../App';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Ruby", "JavaScript", "TypeScript", "Python", "C", "C++", "Java", "PHP", "Go", "Rust"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "DynamoDB"]
  },
  {
    title: "Frameworks",
    skills: ["Ruby on Rails", "MERN Stack", "Next.js", "Svelte", "Qwik.js"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Airflow", "Ansible"]
  }
];

// Map your skill names to the exact slugs expected by the Simple Icons CDN,
// OR provide an object with specific monochrome and color URLs for custom icons
const iconSlugs: Record<string, string | { monochrome: string; color: string }> = {
  "Ruby": "ruby",
  "JavaScript": "javascript",
  "TypeScript": "typescript",
  "Python": "python",
  "C": "c",
  "C++": "cplusplus",
  "Java": {
    monochrome: "https://img.icons8.com/ios-filled/500/java-coffee-cup-logo--v1.png",
    color: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
  },
  "PHP": "php",
  "Go": "go",
  "Rust": "rust",
  "MySQL": "mysql",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "DynamoDB": "amazondynamodb",
  "Ruby on Rails": "rubyonrails",
  "MERN Stack": "react",
  "Next.js": "nextdotjs",
  "Svelte": "svelte",
  "Qwik.js": "qwik",
  "AWS": "amazonaws",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "GitHub Actions": "githubactions",
  "Airflow": "apacheairflow",
  "Ansible": "ansible"
};

export default function Experience({ theme }: { theme: ThemeType }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  if (theme === 'terminal') {
    return (
      <section className="py-20 px-4 md:px-20" id="experience" ref={ref}>
        <div className="max-w-4xl mx-auto border-t border-green-500/30 pt-10">
          <p className="mb-8 opacity-80">{`somak@bengaluru:~/experience$ cat summary.txt`}</p>
          <div className="mb-12 opacity-90 leading-relaxed border-l-2 border-green-500/50 pl-4">
            I'm a computer science professional with 7 years of experience in building robust, scalable and fault-tollerant SaaS based applications with high throughput and low latency by designing efficient system and database architecture adhering to design principles and implementing necessary design patterns ensuring both performance and reliability. I have worked across multiple product-based as well as service-based organizations from different domains including apparel, home automation, finance, interior design etc. My primary tech stack has been Ruby on Rails but I also have experience with LAMP and MERN stack. I have worked with multiple SQL databases like MySQL and PostgreSQL with noSQL databases like MongoDB and Redis. I also have experience with cloud infrustucture like AWS S3, EC2, Lambda, DynamoDB etc. My CI/CD and devops skills include shell scripts, Github actions, nginx, Docker, Kubernetes, Airflow and Ansible.
          </div>
          <p className="mb-8 opacity-80">{`somak@bengaluru:~/experience$ ls -R skills/`}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-bold text-lg mb-2">{`./${category.title.toLowerCase().replace(/ /g, '_')}:`}</h3>
                <p className="opacity-80 break-words">{category.skills.join(', ')}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Helper function to resolve the correct image source.
  const getIconSource = (skill: string, useColor: boolean = false) => {
    const mappedValue = iconSlugs[skill];
    
    // Determine the color suffix based on the theme request
    const colorSuffix = useColor ? '' : '/000000';

    if (!mappedValue) return `https://cdn.simpleicons.org/javascript${colorSuffix}`; // Fallback
    
    // If it's an object with custom URLs, serve the requested one
    if (typeof mappedValue === 'object') {
      return useColor ? mappedValue.color : mappedValue.monochrome;
    }
    
    // If it's a local file path or external URL string, use it directly
    if (mappedValue.startsWith('/') || mappedValue.startsWith('http')) {
      return mappedValue;
    }
    
    // Otherwise, build the Simple Icons CDN URL
    return `https://cdn.simpleicons.org/${mappedValue}${colorSuffix}`;
  };

  return (
    <section className={`py-20 ${theme === 'minimal' ? 'bg-white' : 'bg-slate-50'}`} id="experience">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className={`text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight ${
            theme === 'minimal' ? 'text-black' : 'text-slate-900'
          }`}
        >
          Professional Experience & Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-4 text-lg leading-relaxed ${theme === 'minimal' ? 'text-gray-700' : 'text-slate-600'}`}>
            <p>
              I'm a computer science professional with 7 years of experience in building robust, scalable and fault-tollerant SaaS based applications with high throughput and low latency by designing efficient system and database architecture adhering to design principles and implementing necessary design patterns ensuring both performance and reliability. I have worked across multiple product-based as well as service-based organizations from different domains including apparel, home automation, finance, interior design etc. My primary tech stack has been Ruby on Rails but I also have experience with LAMP and MERN stack. I have worked with multiple SQL databases like MySQL and PostgreSQL with noSQL databases like MongoDB and Redis. I also have experience with cloud infrustucture like AWS S3, EC2, Lambda, DynamoDB etc. My CI/CD and devops skills include shell scripts, Github actions, nginx, Docker, Kubernetes, Airflow and Ansible.
            </p>
          </div>
        </div>
        
        {theme === 'minimal' ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-24 mb-16 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-black border-b border-gray-200 pb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill} className="group relative flex items-center justify-center">
                      <img
                        src={getIconSource(skill, false)}
                        alt={skill}
                        className="w-7 h-7 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      {/* Floating tooltip */}
                      <span className="absolute -bottom-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-[10px] px-2 py-1 whitespace-nowrap z-10 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-16 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white rounded-3xl shadow-sm border border-slate-200"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-slate-50 text-slate-700 rounded-full border border-slate-200 flex items-center gap-2"
                    >
                      <img
                        src={getIconSource(skill, true)}
                        alt={skill}
                        className="w-4 h-4 object-contain"
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}