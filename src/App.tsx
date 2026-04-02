import React from "react";
// 
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import Features from "./components/sections/Features";
import Benefits from "./components/sections/Benefits";
import Pricing from "./components/sections/Pricing";
import Comparison from "./components/sections/Comparison";
import FAQ from "./components/sections/FAQ";



const App: React.FC = () => {
  return (
    <div className="scroll-smooth font-sans antialiased flex flex-col min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Features />
        <Benefits />
        <Pricing />
        <Comparison />
        <FAQ />
      </main>

      <footer className="bg-dark text-white py-20 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              Nexgent
            </span>
          </div>

          <p className="text-white/40 mb-8 max-w-md mx-auto">
            A smart task management platform that helps teams plan,
            collaborate, and track progress easily.
          </p>

          <div className="flex justify-center gap-8 text-sm font-semibold text-white/60">
            <a href="#" className="hover:text-brand transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-brand transition-colors">
              Contact Us
            </a>
          </div>

          <div className="mt-12 text-xs text-white/20 tracking-widest">
            © 2024 NEXGENT. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;