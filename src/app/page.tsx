'use client';

import Hero from './components/hero';
import Navbar from './components/navbar';
import About from './components/about';
import Skills from './components/skill';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 font-open-sans min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Portfolio Section */}
      <Project />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer /> 
    </div>
  );
}