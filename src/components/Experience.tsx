import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { Briefcase } from 'lucide-react';

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
          Professional Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a computer science professional with 7 years of experience in building robust, scalable and fault-tollerant SaaS based applications with high throughput and low latency by designing efficient system and database architecture adhering to design principles and implementing necessary design patterns ensuring both performance and reliability. I have worked across multiple product-based as well as service-based organizations from different domains including apparel, home automation, finance, interior design etc. My primary tech stack has been Ruby on Rails but I also have experience with LAMP and MERN stack. I have worked with multiple SQL databases like MySQL and PostgreSQL with noSQL databases like MongoDB and Redis. I also have experience with cloud infrustucture like AWS S3, EC2, Lambda, DynamoDB etc. My CI/CD and devops skills include shell scripts, Github actions, nginx, Docker, Kubernetes, Airflow and Ansible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}