'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="w-full py-24 bg-white dark:bg-[#0f0f0f] transition-colors border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6 sm:px-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          More About Me
        </h1>

        <p className="text-md text-red-600 dark:text-red-400 font-medium mb-8">
          Full-stack Developer • Certified Scrum Master • Passionate Problem-Solver
        </p>

        <div className="space-y-6 text-md text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I&apos;m Ganidu — a full-stack developer focused on crafting clean, scalable, and impactful digital experiences. I work across the stack using React, Laravel, Spring Boot, and .NET Core.
          </p>

          <p>
            My dev journey started with curiosity and a love for breaking (and fixing) things. Since then, I&apos;ve contributed to production-level apps, worked with agile teams, and led academic projects powered by ML and computer vision.
          </p>

          <div className="bg-gray-100 dark:bg-white/5 p-5 rounded-md shadow-sm border border-gray-200 dark:border-white/10">
            <p className="text-sm text-gray-800 dark:text-gray-200 italic">
              &quot;Building great software is about people first — the tools just help us get there.&quot;
            </p>
          </div>

          <p>
            As a Certified Scrum Master (CSM), I value collaboration, clean communication, and continuous delivery. I enjoy working in teams where trust and iteration drive real results.
          </p>

          <p>
            Recently, I&apos;ve been digging into AWS, Docker, and system design — trying to go beyond just writing code and into building reliable, scalable solutions.
          </p>

          <p>
            Outside of coding, I&apos;m probably geeking out over a new dev tool, refactoring something I built last week, or helping someone debug an API that just won&apos;t behave.
          </p>

          <p>
            I hold a <span className="text-red-600 dark:text-red-400 font-medium">First Class Honours Bachelor&apos;s Degree</span> in Software Engineering from the University of Westminster (IIT Sri Lanka), which laid the foundation for both my technical depth and professional discipline.
          </p>
        </div>

        <div className="my-12 border-t border-gray-300 dark:border-white/10" />

        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Currently learning</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['AWS', 'Docker', 'Microservices', 'System Design'].map((skill) => (
              <span
                key={skill}
                className="bg-red-600/10 text-red-600 dark:text-red-400 dark:bg-red-500/10 px-3 py-1 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
