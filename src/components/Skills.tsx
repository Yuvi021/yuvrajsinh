'use client';

import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaAws, 
  FaDocker, 
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from 'react-icons/fa';

const skills = [
  { name: 'React', icon: FaReact, level: 90 },
  { name: 'Node.js', icon: FaNodeJs, level: 85 },
  { name: 'JavaScript', icon: FaJs, level: 90 },
  { name: 'HTML5', icon: FaHtml5, level: 95 },
  { name: 'CSS3', icon: FaCss3Alt, level: 90 },
  { name: 'MongoDB', icon: FaDatabase, level: 85 },
  { name: 'AWS', icon: FaAws, level: 80 },
  { name: 'Docker', icon: FaDocker, level: 75 },
  { name: 'Git', icon: FaGitAlt, level: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <skill.icon className="text-3xl text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {skill.level}% proficiency
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'TypeScript',
              'Next.js',
              'Express.js',
              'RESTful APIs',
              'GraphQL',
              'Redux',
              'Tailwind CSS',
              'Jest',
              'CI/CD',
              'Agile/Scrum'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 