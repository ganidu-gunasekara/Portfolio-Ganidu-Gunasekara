import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 pt-28">

      <section className="mb-12 max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Projects I’ve Built
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          A mix of client work, personal experiments, and academic collaborations — each built with care using modern tools like Next.js, Laravel, and Spring Boot.
        </p>
      </section>

      <section className="mb-20 max-w-4xl mx-auto">
        <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300">
          <p>
            ⚠️ Some projects were developed for clients or under NDA. As a result, source code may not be publicly available — but I’d be happy to share more context if needed.
          </p>
        </div>
      </section>

      <Projects animateOnLoad />
    </main>
  );
}
