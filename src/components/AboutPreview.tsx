'use client';

import { motion } from 'framer-motion';

export default function AboutPreview() {
    return (
        <section
            id="about"
            className="w-full py-24 bg-white dark:bg-[#0f0f0f] transition-colors border-t border-gray-200 dark:border-gray-800"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full px-6 sm:px-10 max-w-7xl mx-auto"
            >
                <div className="max-w-3xl mx-auto text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        About Me
                    </h2>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        I’m a full-stack web developer and First Class Honours graduate in Software Engineering from the University of Westminster (IIT Sri Lanka), passionate about building real, practical software — whether it’s a clean Laravel API, a responsive React UI, or a full-stack application from the ground up.
                    </p>

                    <p className="text-md text-gray-600 dark:text-gray-400 mb-8">
                        I enjoy turning ideas into usable tools and learning by doing. Recently, I’ve been exploring cloud platforms like AWS, and digging deeper into building scalable backend systems with Spring Boot and .NET Core.
                    </p>

                    <p className="text-sm text-center text-red-600 dark:text-red-400 mb-10">
                        👨‍💻 I believe in writing clean, maintainable code and staying curious — great developers never stop learning.<br />
                        📜 Certified Scrum Master (CSM), with a strong focus on collaboration and Agile delivery.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-10 justify-center max-w-4xl mx-auto">
                    {[
                        'Next.js',
                        'React',
                        'TypeScript',
                        'Laravel',
                        'Spring Boot',
                        'Tailwind CSS',
                        'Node.js',
                        'MySQL',
                        'REST APIs',
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="bg-red-600/10 text-red-600 dark:text-red-400 dark:bg-red-500/10 px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-12">
                    Currently learning: AWS, Docker, and scalable backend architecture with Spring Boot 🚀
                </div>

                <div className="text-center md:text-left max-w-3xl mx-auto">
                    <a
                        href="/about"
                        className="inline-block text-sm text-red-600 dark:text-red-400 font-medium group relative"
                    >
                        Read more about me
                        <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
