
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  'Microsoft', 'Amazon', 'Google', 'Netflix', 'Airbnb', 'Spotify',
  'Hubspot', 'Slack', 'Intercom', 'Dropbox', 'Zoom', 'Framer'
];

const Marquee = () => {
  return (
    <div className="w-full py-16 bg-white overflow-hidden border-y border-black/5">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-xs font-bold text-dark/40 uppercase tracking-[0.3em]">Trusted by world leading teams</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {brands.map((brand, i) => (
            <span key={i} className="text-3xl font-black text-dark/20 hover:text-dark/40 transition-colors cursor-default tracking-tighter">
              {brand}
            </span>
          ))}
          {brands.map((brand, i) => (
            <span key={`dup-${i}`} className="text-3xl font-black text-dark/20 hover:text-dark/40 transition-colors cursor-default tracking-tighter">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
