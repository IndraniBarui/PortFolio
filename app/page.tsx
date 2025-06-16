"use client";

import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mt-20 md:mt-2 mx-auto p-2 md:px-4 md:py-8">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
