'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <section className="w-full py-24 bg-white dark:bg-[#0f0f0f] transition-colors border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6 sm:px-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          My Resume
        </h1>

        <p className="text-md text-gray-600 dark:text-gray-400 text-center mb-8">
          Up-to-date version of my resume, available to view or download.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-3 rounded-md transition"
          >
            <Download size={18} /> Download Resume (PDF)
          </a>
        </div>

        <div className="w-full aspect-[4/3] sm:aspect-[16/9]">
          <iframe
            src="/resume.pdf"
            className="w-full h-full rounded-md border border-gray-300 dark:border-white/10"
            title="Resume PDF"
          />
        </div>
      </motion.div>
    </section>
  );
}
