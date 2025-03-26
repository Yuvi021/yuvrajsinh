'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Hi, I'm Yuvraj
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Passionate about creating innovative web solutions and transforming ideas into reality.
            Specialized in building scalable applications with modern technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/yuvrajsinh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yuvrajsinh-b-2520b518b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:yuvrajsinh.b@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FiMail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 