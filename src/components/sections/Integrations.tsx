import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Globe, Layers, Cpu, Cloud } from 'lucide-react';

const Integrations = () => {
  const logos = [
    { icon: Code, color: '#01AD61' },
    { icon: Zap, color: '#F48220' },
    { icon: Globe, color: '#0066FF' },
    { icon: Layers, color: '#4A154B' },
    { icon: Cpu, color: '#2563EB' },
    { icon: Cloud, color: '#6366F1' },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-extrabold text-dark mb-6 tracking-tight leading-[1.05]">
            Connect With <span className="serif-italic">200+ Tools</span>
          </h2>
          <p className="text-dark/40 font-medium mb-16 max-w-xl mx-auto leading-relaxed">
             Nexgent integrates seamlessly with your favorite apps to keep your workflow unified and productive.
          </p>
        </motion.div>

        <div className="relative h-[250px] md:h-[400px] w-full flex items-center justify-center">
            {/* Center Logo */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-dark flex items-center justify-center shadow-2xl relative z-20">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-brand rounded-lg rotate-45" />
            </div>

            {/* Orbiting Logas */}
            <div className="absolute inset-0 flex items-center justify-center">
              {logos.map((Integration, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * (20 / logos.length) 
                  }}
                  className="absolute h-full w-full pointer-events-none"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-2xl shadow-xl border border-black/5 pointer-events-auto hover:scale-110 transition-transform">
                    <Integration.icon size={28} color={Integration.color} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Orbit Circles */}
            <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-black/5" />
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-black/5" />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
