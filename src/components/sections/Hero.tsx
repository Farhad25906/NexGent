import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative pt-32 pb-0 overflow-hidden bg-[#060809] text-white min-h-screen flex flex-col items-center">
      <div className="hero-glow absolute inset-0 z-0 pointer-events-none opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Review Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full mb-10"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[#01ad61] stroke-[#01ad61]" />
              ))}
            </div>
            <span className="text-[12px] font-bold tracking-widest uppercase">4.9/5 EXCELLENT SATISFACTION</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl xl:text-[88px] font-extrabold tracking-tight leading-[1.05] mb-10"
          >
            Everything You Need To <br />
            <span className="serif-italic text-white">Manage Tasks</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Nexgent is a smart task management platform that helps teams <br className="hidden md:block" />
            plan, collaborate, and track progress easily.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mb-24"
          >
            <button className="btn-primary px-10 py-5 text-lg">
              Get Template Now
            </button>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div 
            variants={itemVariants}
            className="relative mx-auto mt-12 max-w-6xl pb-32"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#01ad61]/20 to-[#01ad61]/0 rounded-[3rem] blur-2xl opacity-25" />
              <div className="relative bg-[#0b0d0e] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="/images/dashboard.png" 
                  alt="Nexgent Dashboard"
                  className="w-full h-auto object-cover opacity-95 transition-transform duration-1000 group-hover:scale-[1.01]"
                />
              </div>
              
              {/* Left Floating Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-1/4 hidden lg:block scale-75 xl:scale-100"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-2xl w-64">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-brand" />
                     </div>
                     <div>
                        <div className="font-bold text-sm">Active Tasks</div>
                        <div className="text-[10px] text-white/40">Updated 2m ago</div>
                     </div>
                   </div>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 2, delay: 1 }}
                        className="h-full bg-brand" 
                      />
                   </div>
                </div>
              </motion.div>

              {/* Right Floating Card */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-12 bottom-1/4 hidden lg:block scale-75 xl:scale-100"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-2xl w-64">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                         <div className="w-5 h-5 rounded-full bg-blue-500" />
                      </div>
                      <div>
                         <div className="font-bold text-sm">Team Efficiency</div>
                         <div className="text-[10px] text-white/40">+12% this week</div>
                      </div>
                   </div>
                   <div className="flex items-end gap-1 h-12">
                      {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 1.5 + (i * 0.1) }}
                          className="flex-1 bg-white/20 rounded-t-sm"
                        />
                      ))}
                   </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
