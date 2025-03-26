'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I am a passionate Full Stack Developer with a strong foundation in web development.
              My journey in software development began with a keen interest in creating innovative solutions
              and has evolved through hands-on experience with various technologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I specialize in building responsive, user-friendly applications using modern frameworks
              and best practices. My approach combines technical excellence with a focus on creating
              intuitive user experiences.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Bachelor of Technology in Computer Science</span>
                  <br />
                  <span className="text-sm">2019 - 2023</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Full Stack Developer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">2023 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Working on developing and maintaining web applications using modern technologies.
                    Focused on creating scalable solutions and implementing best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Certifications
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">AWS Certified Cloud Practitioner</li>
                <li className="text-gray-600 dark:text-gray-300">MongoDB Certified Developer</li>
                <li className="text-gray-600 dark:text-gray-300">React Certified Developer</li>
                <li className="text-gray-600 dark:text-gray-300">Node.js Certified Developer</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 