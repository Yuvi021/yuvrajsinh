"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio & Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I am a passionate Software Engineer with 3 years of expertise in
              modern web development. I specialize in React.js, Next.js,
              TypeScript, and Material-UI, creating user-centric designs and
              seamless user experiences. I excel in collaborating with teams,
              managing projects, and driving technical solutions to meet
              organizational objectives.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey includes hands-on experience with cutting-edge
              JavaScript frameworks and libraries, and a strong focus on
              building responsive, user-friendly applications using modern
              technologies and best practices.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">
                    Bachelor of Technology in Computer Science
                  </span>
                  <br />
                  Parul University, Vadodara, India
                  <br />
                  <span className="text-sm">2016 - 2020</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Experience & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Experience Section */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Software Engineer - Bitontree Solution
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    March 2022 - Present | Ahmedabad, India
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Worked on modern web applications using React, Next.js,
                    TypeScript, and AWS. Collaborated with teams to create
                    user-centric interfaces and scalable solutions while
                    adhering to industry best practices.
                  </p>
                </div>
              </div>
            </div>

            

            {/* Certifications Section */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Certifications
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Web Development Certificate (Udemy)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
