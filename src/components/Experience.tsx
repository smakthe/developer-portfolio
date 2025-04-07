import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Professional Experience & Skills
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a computer science professional with 7 years of experience in building robust, scalable and fault-tollerant SaaS based applications with high throughput and low latency by designing efficient system and database architecture adhering to design principles and implementing necessary design patterns ensuring both performance and reliability. I have worked across multiple product-based as well as service-based organizations from different domains including apparel, home automation, finance, interior design etc. My primary tech stack has been Ruby on Rails but I also have experience with LAMP and MERN stack. I have worked with multiple SQL databases like MySQL and PostgreSQL with noSQL databases like MongoDB and Redis. I also have experience with cloud infrustucture like AWS S3, EC2, Lambda, DynamoDB etc. My CI/CD and devops skills include shell scripts, Github actions, nginx, Docker, Kubernetes, Airflow and Ansible.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}