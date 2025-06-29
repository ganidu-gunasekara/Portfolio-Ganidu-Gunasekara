'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="w-full py-24 bg-white dark:bg-[#0f0f0f] transition-colors border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl mx-auto px-6 sm:px-10"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Me
        </h1>

        <p className="text-md text-gray-600 dark:text-gray-400 mb-8">
          Want to work together, collaborate on something, or just say hello?
          Feel free to reach out — I&apos;d love to hear from you!
        </p>

        {/* Email block */}
        <div className="bg-gray-100 dark:bg-white/5 p-6 rounded-md shadow-sm mb-8">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">📧 Email:</p>
          <a
            href="mailto:ganidugunasekara98@gmail.com"
            className="text-red-600 dark:text-red-400 hover:underline break-all text-sm"
          >
            ganidugunasekara98@gmail.com
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6 items-center text-gray-600 dark:text-gray-400 mb-12">
          <a
            href="https://github.com/ganidu12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 dark:hover:text-red-400 flex items-center gap-2"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/ganidu-gunasekara"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 dark:hover:text-red-400 flex items-center gap-2"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        {/* Disabled contact form */}
        <form className="space-y-6 opacity-50 pointer-events-none">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-md"
            disabled
          >
            Send Message (Disabled)
          </button>
        </form>
      </motion.div>
    </section>
  );
}
