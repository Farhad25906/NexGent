import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="section-padding bg-[#060809] relative overflow-hidden">
      <div className="cta-glow absolute inset-0 z-0 pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-[#0b0d0e] border border-white/5 rounded-[4rem] p-12 md:p-24 text-center overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#01ad61]/5 blur-[100px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              Ready To Maximize Your <br /> <span className="serif-italic">Team's Potential?</span>
            </h2>
            <p className="text-lg text-white/40 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of teams already using Nexgent to simplify their workflow and deliver results faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-brand text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand/90 transition-all active:scale-95 shadow-2xl shadow-brand/20">
                 Get Template Now
              </button>
              <button className="bg-white/5 text-white border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                 Book A Demo
              </button>
            </div>
          </motion.div>
          
          {/* Decorative stats */}
          <div className="mt-20 pt-20 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Users', value: '50k+' },
              { label: 'Projects Completed', value: '1.2M' },
              { label: 'Time Saved', value: '35%' },
              { label: 'Team Satisfaction', value: '99%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-white/30 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
