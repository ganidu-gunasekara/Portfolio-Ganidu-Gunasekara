import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Importing and configuring fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Ganidu Gunasekara | Web Developer",
  description: "Portfolio of Ganidu Gunasekara — modern, responsive web developer.",
  keywords: ["Ganidu Gunasekara", "Web Developer", "Frontend", "Next.js", "Portfolio"],
  openGraph: {
    title: "Ganidu Gunasekara | Web Developer",
    description: "Portfolio of Ganidu Gunasekara — modern, responsive web developer.",
    url: "https://yourdomain.com", 
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ganidu Gunasekara Portfolio Preview",
      },
    ],
  },
};


// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-[#0f0f0f] dark:text-white transition-colors`}
      >
        <Header />
        <main className="min-h-screen px-4 sm:px-8 max-w-7xl mx-auto">
          {children}
        </main>
        <Footer/>
        <ScrollToTopButton/>
      </body>
    </html>
  );
}
