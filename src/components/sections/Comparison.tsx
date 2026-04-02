import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Trophy } from 'lucide-react';

const Comparison = () => {
  const othersList = [
    'Interfaces that slow teams down',
    'Limited tasks and workflows',
    'Poor integration tools and platform',
    'Weak collaboration features',
    'Basic reports with little insight',
    'Shallow reporting and insights',
    'Poor Analytics & Reports',
  ];

  const nexgentList = [
    'Interfaces that slow teams down',
    'Seamless integration with 200+',
    'Real-time progress tracking',
    'Advanced productivity analytics',
    'Faster task completion',
    'productivity and performance',
    'Advanced Analytics & Reports',
  ];

  return (
    <section id="comparison" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-full mb-8 shadow-sm"
          >
            <Trophy size={14} className="text-dark/40" />
            <span className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Comparison</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-extrabold text-text-dark mb-8 tracking-tight leading-[1.05]"
          >
            Why Choose <span className="serif-italic">Nexgent</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-dark/40 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            See how our smart task management platform compares with <br className="hidden md:block" />
            spreadsheets, basic to-do apps, and tools.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* VS Badge & Line (Desktop only for full effect) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center z-10 pointer-events-none">
            <div className="relative w-full flex items-center justify-center">
              <div className="bg-dark text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xs tracking-widest shadow-2xl relative z-20">
                VS
              </div>
              {/* Connecting Path (SVG) */}
              <svg className="absolute w-full h-[600px] -z-10 hidden lg:block" viewBox="0 0 1000 600" fill="none">
                 <path d="M480 300 H 200" stroke="#000" strokeOpacity="0.05" strokeWidth="2" />
                 <path d="M520 300 H 800" stroke="#01AD61" strokeOpacity="0.2" strokeWidth="2" />
                 <circle cx="500" cy="300" r="40" fill="white" fillOpacity="0.05" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-stretch relative z-0">
            {/* Left Card: Other Platforms */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-[#F7F8F9] rounded-[3rem] p-12 md:p-20 flex flex-col items-center"
            >
              <h3 className="text-3xl font-bold text-dark mb-16">Other Platforms</h3>
              <div className="space-y-7 w-full max-w-sm">
                {othersList.map((item, i) => (
                  <div key={i} className="flex items-center gap-5 text-dark/40 font-medium text-[15px]">
                    <div className="shrink-0 w-6 h-6 rounded-md border border-black/5 flex items-center justify-center bg-white shadow-sm">
                       <X size={14} className="text-dark/30" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Card: Nexgent */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white rounded-[3rem] p-1 border border-brand/20 shadow-[0_20px_100px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col"
            >
              {/* Logo Area */}
              <div className="bg-[#0b0d0e] rounded-t-[2.9rem] p-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#01ad61]/10 blur-[80px]" />
                <div className="relative z-10 flex flex-col items-center">
                   <div className="w-14 h-14 bg-[#01ad61] rounded-2xl rotate-45 mb-6 flex items-center justify-center shadow-lg shadow-brand/20 transition-transform hover:scale-110 duration-500">
                      <div className="w-7 h-7 bg-white rounded-full -rotate-45" />
                   </div>
                   <div className="text-white text-4xl font-extrabold tracking-tight">Nexgent</div>
                </div>
              </div>

              {/* Content */}
              <div className="px-12 md:px-20 py-16 space-y-7 flex-1">
                {nexgentList.map((item, i) => (
                  <div key={i} className="flex items-center gap-5 text-dark/70 font-bold text-[15px]">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[#01ad61]/10 flex items-center justify-center shadow-sm">
                       <Check size={14} className="text-[#01ad61]" strokeWidth={4} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
