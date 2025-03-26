'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with features like user authentication, product management, shopping cart, and payment integration using Stripe.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    image: '/ecommerce.png',
    github: 'https://github.com/yuvrajsinh/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
  },
  {
    title: 'Task Management App',
    description: 'A real-time task management application with features like drag-and-drop, team collaboration, and task prioritization.',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    image: '/taskmanager.png',
    github: 'https://github.com/yuvrajsinh/taskmanager',
    demo: 'https://taskmanager-demo.vercel.app',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, animations, and a clean design.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    image: '/portfolio.png',
    github: 'https://github.com/yuvrajsinh/portfolio',
    demo: 'https://yuvraj-portfolio.vercel.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 animate-pulse"></div>
                {/* Add actual project images later */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FiGithub className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 