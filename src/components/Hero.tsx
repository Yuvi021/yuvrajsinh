'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiServer, FiDatabase } from 'react-icons/fi';
import Script from 'next/script';

const Hero = () => {
  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Yuvrajsinh Borasiya",
            jobTitle: "Full Stack Developer",
            url: "https://yuvrajsinhborasiya.netlify.app/",
            sameAs: [
              "https://github.com/Yuvi021",
              "https://www.linkedin.com/in/yuvrajsinh-b-2520b518b/",
            ],
            email: "yuvrajsinhwork@gmail.com",
            description:
              "Expert Full Stack Developer specializing in React, Node.js, and modern web technologies. Creating scalable and innovative web solutions.",
            knowsAbout: [
              "React.js",
              "Node.js",
              "JavaScript",
              "TypeScript",
              "MongoDB",
              "Express.js",
              "REST APIs",
              "Web Development",
              "Frontend Development",
              "Backend Development",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Freelance Developer",
            },
          }),
        }}
      />
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
        aria-label="Introduction"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2">
                <FiCode className="text-blue-600 dark:text-blue-400 text-2xl" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Yuvrajsinh Borasiya
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
            >
              Expert Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Transforming ideas into powerful web solutions. Specialized in
              building scalable applications with React, Node.js, and modern
              cloud technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center space-x-6 mb-8"
              aria-label="Social links"
            >
              <a
                href="https://github.com/Yuvi021"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yuvrajsinh-b-2520b518b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:yuvrajsinhwork@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Email Contact"
              >
                <FiMail size={24} />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <FiCode className="text-blue-600 dark:text-blue-400 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Frontend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  React, Next.js, TypeScript
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <FiServer className="text-blue-600 dark:text-blue-400 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Backend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Node.js, Express, REST APIs
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <FiDatabase className="text-blue-600 dark:text-blue-400 text-2xl mb-4" />
                <h3 className="text-lg font-semibold mb-2">Database & Cloud</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  MongoDB, AWS, Docker
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 