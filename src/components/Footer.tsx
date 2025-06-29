'use client';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Ganidu Gunasekara — All rights reserved.
      <div className="mt-2">
        <a href="https://github.com/ganidu12" className="hover:underline mx-2">GitHub</a>
        <a href="https://linkedin.com/in/ganidu-gunasekara" className="hover:underline mx-2">LinkedIn</a>
        <a href="mailto:ganidugunasekara98@gmail.com" className="hover:underline mx-2">Email</a>
      </div>
    </footer>
  );
}
