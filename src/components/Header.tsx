'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md dark:bg-[#1e1e1e]/80 transition-all">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                    Ganidu Gunasekara
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { href: '/about', label: 'About' },
                        { href: '/projects', label: 'Projects' },
                        { href: '/contact', label: 'Contact' },
                    ].map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="relative text-sm text-gray-700 dark:text-gray-300 group transition"
                        >
                            {label}
                            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </Link>
                    ))}

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="relative text-sm text-gray-700 dark:text-gray-300 group transition"
                    >
                        Resume
                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                    </a>

                    <Link href="/contact">
                        <button className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:scale-105 hover:bg-red-700 transition-transform duration-200 ease-in-out">
                            Hire Me
                        </button>
                    </Link>
                </nav>

                <button
                    className="md:hidden text-gray-700 dark:text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <AnimatePresence>
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white dark:bg-[#1e1e1e]"
                    >
                        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        <a href="/resume.pdf" target="_blank" onClick={() => setIsOpen(false)}>Resume</a>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:scale-105 hover:bg-red-700 transition-transform duration-200">
                                Hire Me
                            </button>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            )}
        </header>
    );
}
