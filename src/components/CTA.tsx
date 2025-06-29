'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-24 text-center border-t border-gray-200 dark:border-gray-800"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Let’s Work Together
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Open to freelance projects, full-time roles, or collaboration opportunities.
        I’d love to hear from you!
      </p>
      <a
        href="/contact"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
      >
        Contact Me
      </a>
    </motion.section>
  );
}
