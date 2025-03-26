"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm a Software Engineer 👋
      </motion.h1>
      <motion.p
        className="text-lg text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I have 3+ years of experience in full-stack development.
      </motion.p>
    </section>
  );
};

export default Hero;
