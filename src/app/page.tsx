// src/app/page.tsx

import AboutPreview from "@/components/AboutPreview";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 sm:px-8 max-w-7xl mx-auto pt-20">
      <Hero />
      <AboutPreview/>
      <Projects limit={6} />
      <CTA/>
    </main>
  );
}
