'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 pt-8 min-h-[calc(100vh-5rem)]">


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center md:text-left max-w-xl"
            >
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4 text-gray-900 dark:text-white">
                    Hi, I&apos;m Ganidu Gunasekara
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                    Full-stack web developer crafting scalable and performant apps with Next.js, React, Laravel & Spring Boot.
                </p>

                <p className="text-md text-gray-500 dark:text-gray-400 mb-6">
                    Passionate about clean code, elegant UI, and building for the web — from frontend pixels to backend logic.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="/projects"
                        className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
                    >
                        View Projects
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="border border-red-600 text-red-600 px-6 py-3 rounded-md hover:bg-red-50 dark:hover:bg-white/10 transition"
                    >
                        Download Resume
                    </a>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start mt-6 gap-4 opacity-80">
                    <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" width={28} height={28} />
                    <img src="https://cdn.simpleicons.org/nextdotjs/ffffff" alt="Next.js" width={28} height={28} />
                    <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" width={28} height={28} />
                    <img src="https://cdn.simpleicons.org/springboot/6DB33F" alt="Spring Boot" width={28} height={28} />
                    <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" width={28} height={28} />
                </div>

                <div className="mt-10 text-gray-400 animate-bounce text-2xl hidden md:block">↓</div>
            </motion.div>

            <motion.div
                style={{ backgroundColor: 'transparent' }}
                className="flex justify-center items-center w-full md:w-[450px] h-[450px] md:h-[450px] rounded-full overflow-hidden border-2 border-red-600 shadow-2xl transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Image
                    src="/profile-image-4.png"
                    alt="Ganidu Gunasekara"
                    width={450}
                    height={450}
                    className="object-cover w-full h-full"
                    priority
                />
            </motion.div>


        </section>
    );
}
