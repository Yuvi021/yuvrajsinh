"use client";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "ERP Software",
    description:
      "A comprehensive ERP platform designed to streamline business processes by managing inventory, sales, and customer data efficiently. It features reusable Material-UI components, optimized data fetching using React Query, and AWS integration for high scalability and security.",
    technologies: [
      "React",
      "Next.js",
      "Material-UI",
      "Formik",
      "React Query",
      "AWS (S3, EC2, CloudFront, RDS)",
      "Prisma",
      "PostgreSQL",
      "Puppeteer",
    ],
    image: "/images/erp.jpg",
    github: "https://github.com/yuvrajsinh/erp",
    demo: "https://erp-demo.vercel.app",
  },
  {
    title: "Healthcare Application",
    description:
      "A HIPAA-compliant healthcare platform that facilitates real-time communication between patients and doctors using AWS Chime. It provides appointment booking, secure authentication, and video conferencing, ensuring seamless communication and care delivery.",
    technologies: [
      "React",
      "Redux",
      "Material-UI",
      "Socket.io",
      "AWS Chime",
      "Apollo GraphQL",
      "TypeScript",
    ],
    image: "/images/healthcare.jpg",
    github: "https://github.com/yuvrajsinh/healthcare-app",
    demo: "https://healthcare-demo.vercel.app",
  },
  {
    title: "Travel and Leisure Platform",
    description:
      "A dynamic platform designed to assist travelers in booking accommodations, managing rentals, and exploring local attractions. The platform supports multiple languages, social login integration, and uses Firebase for backend services and real-time data sync.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Recoil",
      "Leaflet",
      "TailwindCSS",
      "Firebase",
      "i18next",
    ],
    image: "/images/Leisure-Travel-Market.jpg",
    github: "https://github.com/yuvrajsinh/travel-platform",
    demo: "https://travel-demo.vercel.app",
  },
  {
    title: "Sports Betting Platform",
    description:
      "A responsive and feature-rich sports betting platform that delivers real-time data updates, live betting options, and secure user management with AWS Cognito. The platform also includes an admin interface for managing events and user activities.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "StoryBook",
      "Redux",
      "MongoDB",
      "AWS Cognito",
    ],
    image: "/images/images.jfif",
    github: "https://github.com/yuvrajsinh/sports-betting",
    demo: "https://sports-demo.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
                  >
                    <FiGithub className="text-xl" />
                    <span>Code</span>
                  </a> */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2"
                  >
                    {/* <FiExternalLink className="text-xl" /> */}
                    {/* <span>Live Demo</span> */}
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
