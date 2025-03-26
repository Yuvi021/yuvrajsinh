'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as gtag from "../../lib/gtag";

export default function Home() {
   const pathname = usePathname();

   useEffect(() => {
     gtag.pageview(pathname);
   }, [pathname]);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
