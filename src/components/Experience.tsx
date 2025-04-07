import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="bg-gray-800 rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-400 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold text-white">Senior Full-Stack Developer</h3>
                <p className="text-gray-400">7.5 Years in SaaS Companies</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                Developed and maintained robust Rails applications following S.O.L.I.D principles
                and implementing optimization techniques for enhanced performance.
              </p>
              <p>
                Extensive experience with AWS services including S3, EC2, Lambda, DynamoDB, SNS,
                SQS, and Cognito for scalable web applications.
              </p>
              <p>
                Implemented CI/CD pipelines using CircleCI and GitHub Actions for automated
                testing and deployment of microservices.
              </p>
              <p>
                Utilized Docker and Kubernetes for containerization and orchestration,
                significantly improving application scalability and reliability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}