'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
    title: string;
    description: string;
    stack: string[];
    github?: string;
    demo?: string;
    type: 'Internship' | 'Personal' | 'Academic';
};

const allProjects: Project[] = [
  {
    title: 'Lesko – Social Media Platform',
    description:
      'Developed backend features using Spring Boot and MySQL: user auth, posts, likes/comments. Designed RESTful APIs for frontend integration and optimized queries for performance.',
    stack: ['Spring Boot', 'MySQL', 'REST APIs'],
    type: 'Internship',
  },
  {
    title: 'React Clothing Website',
    description:
      'A modern clothing website frontend built using React and Next.js with reusable components.',
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    type: 'Personal',
  },
  {
    title: 'BoneScope',
    description:
      'A Laravel-based X-ray image analysis system with integrated Python ML models for detecting fractures.',
    stack: ['Laravel', 'Python', 'REST API'],
    github: 'https://github.com/ganidu12/final-year-project',
    type: 'Academic',
  },
  {
    title: '.NET Core CRUD API',
    description:
      'RESTful API built using ASP.NET Core and Entity Framework, following clean architecture principles.',
    stack: ['.NET Core', 'MySQL', 'Entity Framework'],
    github: 'https://github.com/ganidu12',
    type: 'Personal',
  },
  {
    title: 'Currency Mate',
    description:
      'Mobile app for visually impaired users to identify currency using object detection via Python and Flutter.',
    stack: ['Python', 'YOLO', 'Flutter'],
    github: 'https://github.com/pushpe1174/SDGP',
    type: 'Academic',
  },
  {
    title: 'Tebeka – Web Application',
    description:
      'Contributed to backend APIs in Spring Boot and improved frontend UI/UX. Worked on full-stack features with a focus on integration and stability.',
    stack: ['Spring Boot', 'Java', 'REST APIs', 'JavaScript', 'HTML', 'CSS'],
    type: 'Internship',
  },
  {
    title: 'Parent Teacher Mobile',
    description:
      'Full-stack mobile communication platform between parents and teachers. Built Laravel backend and contributed to mobile frontend UI and features.',
    stack: ['Laravel', 'REST API', 'Mobile UI'],
    type: 'Internship',
  },
  {
    title: 'Examiner',
    description:
      'Migrated legacy payment system to Google/Apple Pay, with backend API integration and UI fixes.',
    stack: ['Laravel', 'Custom APIs'],
    type: 'Internship',
  },
  {
    title: 'HR Management System',
    description:
      'Employee and leave tracking system built using Laravel. Improved frontend UX and resolved UI bugs.',
    stack: ['Laravel', 'Blade', 'MySQL'],
    type: 'Internship',
  },
];



export default function Projects({ limit, animateOnLoad = false }: { limit?: number; animateOnLoad?: boolean }) {
    const projects = limit ? allProjects.slice(0, limit) : allProjects;

    return (
        <section id="projects" className="mt-4 py-24 bg-white dark:bg-[#0f0f0f] transition-colors border-t border-gray-200 dark:border-gray-800">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                {...(animateOnLoad
                    ? { animate: { opacity: 1, y: 0 } }
                    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } })}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="max-w-7xl mx-auto px-6"
            >

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center md:text-left">
                    {limit ? 'Key Projects' : 'Projects'}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 dark:bg-white/5 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs bg-red-600/10 text-red-600 dark:bg-red-500/10 dark:text-red-400 px-2 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 text-sm text-red-600 dark:text-red-400">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:underline"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:underline"
                                    >
                                        <ExternalLink size={16} /> Demo
                                    </a>
                                )}
                                <span className="ml-auto text-xs bg-gray-300 dark:bg-white/10 px-2 py-0.5 rounded-md">
                                    {project.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
