import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      text: "This tool completely transformed how our team works. Everything is clear and organized, so we always know who's responsible for what and when things are due. As a result, we meet deadlines more consistently and stay focused on our priorities. Its very helpful my works",
      author: "Edward Lawson",
      role: "One request",
      image: "https://i.pravatar.cc/150?u=edward"
    },
    {
      text: "Nexgent is the only platform that actually keeps our large team aligned. The integration with our other tools is flawless and the progress tracking is world-class.",
      author: "Sarah Jenkins",
      role: "Operations Lead",
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      text: "We've tried every project management tool out there. Nexgent is different – it stays out of your way and lets you focus on actual work rather than managing the tool itself.",
      author: "Michael Chen",
      role: "Founder at TechFlow",
      image: "https://i.pravatar.cc/150?u=michael"
    }
  ];

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-[#F7F8F9] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text & Stamp */}
          <div className="relative">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-full mb-8 shadow-sm"
            >
              <Sparkles size={14} className="text-dark/40" />
              <span className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Testimonials</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-extrabold text-dark mb-8 tracking-tight leading-[1.05]"
            >
              What Our <br /> <span className="serif-italic">Users Say</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-dark/40 font-medium max-w-sm mb-12 leading-relaxed"
            >
              Real stories from teams using Taskboard to stay organized, collaborate better, and deliver work on time.
            </motion.p>

            {/* Quote Stamp (Matching Image) */}
            <div className="relative w-48 h-48 flex items-center justify-center">
               <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 200 200">
                  <path
                    id="curve"
                    fill="transparent"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                  <text className="text-[14px] font-bold uppercase tracking-[0.2em] fill-black/20">
                    <textPath xlinkHref="#curve">
                      OVER 1,000 OF THE WORLD • TRUSTED BY CLIENTS •
                    </textPath>
                  </text>
               </svg>
               <div className="text-brand text-7xl font-serif mt-4">99</div>
            </div>
          </div>

          {/* Right Side: Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                 key={current}
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 className="bg-white rounded-[2rem] p-10 md:p-14 shadow-2xl relative"
              >
                <div className="text-xl md:text-2xl font-bold leading-relaxed text-dark mb-12">
                  "{testimonials[current].text}"
                </div>

                <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <img 
                        src={testimonials[current].image} 
                        className="w-12 h-12 rounded-xl object-cover bg-gray-100" 
                        alt="Author" 
                     />
                     <div>
                        <div className="font-bold text-dark">{testimonials[current].author}</div>
                        <div className="text-sm font-semibold text-dark/30">{testimonials[current].role}</div>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                     <div className="text-xs font-bold text-dark/30">{current + 1} / {testimonials.length}</div>
                     <div className="flex gap-2">
                        <button 
                           onClick={prev}
                           className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-dark hover:text-white transition-all active:scale-95"
                        >
                           <ChevronLeft size={18} />
                        </button>
                        <button 
                           onClick={next}
                           className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-dark hover:text-white transition-all active:scale-95"
                        >
                           <ChevronRight size={18} />
                        </button>
                     </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
