// src/app/page.tsx

import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 sm:px-8 max-w-7xl mx-auto pt-20">
      <Hero />
      <AboutPreview/>
      <div className="relative">
        <Projects limit={6} />
        <div className="text-center mt-5 mb-10">
          <Link
            href="/projects"
            className="inline-block text-sm font-medium text-red-600 dark:text-red-400 hover:underline"
          >
            View all projects →
          </Link>
        </div>
      </div>
      <CTA/>
    </main>
  );
}
