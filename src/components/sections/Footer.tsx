import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Top CTA */}
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight"
          >
            Ready to Get <span className="serif-italic">More Done</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 font-medium max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Start organizing your tasks, collaborating with your team, and staying on top of deadlines all in one simple, powerful tool.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="bg-white text-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all active:scale-95 flex items-center gap-2 mx-auto">
              Get Started <ArrowUpRight size={20} />
            </button>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-20 mb-20">
          {/* Massive Logo */}
          <div className="flex flex-col items-center mb-24">
             <div className="flex items-center gap-6 mb-8 transform scale-125 md:scale-150 py-10">
                <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center">
                   <div className="w-8 h-8 rounded-full bg-white transition-transform hover:scale-110" />
                </div>
                <span className="font-black text-7xl md:text-9xl tracking-tighter uppercase text-white">Nexgent</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
             {/* Left Column */}
             <div>
                <p className="text-xl font-bold text-white max-w-[200px] leading-tight">
                   Join the 12,000+ businesses using Nexgent
                </p>
             </div>

             {/* Middle Column */}
             <div>
                <h4 className="text-white font-bold mb-6">Get in Touch</h4>
                <div className="space-y-4 text-white/40 font-medium">
                   <p>123 Creative Street,<br />Innovation City, NY 10001</p>
                   <a href="mailto:info@nexgent.com" className="block hover:text-brand transition-colors">info@nexgent.com</a>
                </div>
             </div>

             {/* Right Column */}
             <div>
                <h4 className="text-white font-bold mb-6">Subscribe to our Newsletter</h4>
                <p className="text-white/40 font-medium mb-8">Get productivity tips & insights straight to your inbox.</p>
                <div className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-full">
                   <input 
                      type="email" 
                      placeholder="Email address" 
                      className="bg-transparent border-none outline-none flex-1 px-6 text-sm font-medium"
                   />
                   <button className="bg-white text-dark px-6 py-3 rounded-full font-bold text-sm hover:bg-brand hover:text-white transition-all">
                      Subscribe
                   </button>
                </div>
             </div>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap justify-between gap-6 py-10 border-t border-white/5 border-b mb-10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">
             <a href="#" className="hover:text-brand transition-colors">Features</a>
             <a href="#" className="hover:text-brand transition-colors">Benefits</a>
             <a href="#" className="hover:text-brand transition-colors">Pricing</a>
             <a href="#" className="hover:text-brand transition-colors">Comparison</a>
             <a href="#" className="hover:text-brand transition-colors">FAQ</a>
             <a href="#" className="hover:text-brand transition-colors">Changelog</a>
             <a href="#" className="hover:text-brand transition-colors">Style Guide</a>
             <a href="#" className="hover:text-brand transition-colors">License</a>
             <a href="#" className="hover:text-brand transition-colors">Password</a>
             <a href="#" className="hover:text-brand transition-colors">404</a>
          </div>

          {/* Copyright Area */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
             <p>© 2026 NEXGENT. ALL RIGHTS RESERVED.</p>
             <p>DESIGNED BY <a href="#" className="text-white/40 hover:text-brand underline decoration-white/10">OLVVY</a> POWERED BY <a href="#" className="text-white/40 hover:text-brand underline decoration-white/10">WEBFLOW</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
