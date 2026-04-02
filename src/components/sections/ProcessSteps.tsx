import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      title: 'Planning',
      description: 'Set goals, assign tasks, and map out your project details from start to finish.',
      image: 'https://cdn.prod.website-files.com/6703628e937d577488825f38/6703b0d2430eb99411985392_integrations-02.svg', // Placeholder icon for this step
    },
    {
      title: 'Tracking',
      description: 'Keep projects on track with real-time updates and clear performance metrics.',
      image: 'https://cdn.prod.website-files.com/6703628e937d577488825f38/6703b0d2d3161df2849e7592_integrations-01.svg',
    },
    {
      title: 'Scaling',
      description: 'Analyze data and use insights to optimize workflows and scale your team.',
      image: 'https://cdn.prod.website-files.com/6703628e937d577488825f38/6703b0d2f36d8d9b8972e391_integrations-04.svg',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-dark mb-6 tracking-tight">
            How Nexgent Helps <br /> <span className="serif-italic">Teams Succeed</span>
          </h2>
          <p className="text-dark/50 font-medium max-w-xl mx-auto">
             A high-performance workflow designed to keep your projects organized and moving forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-[#F7F8F9] border border-black/5 hover:border-brand/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <img src={step.image} alt={step.title} className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{step.title}</h3>
              <p className="text-dark/50 font-medium leading-relaxed mb-6">{step.description}</p>
              <div className="flex items-center gap-2 text-brand font-bold text-sm cursor-pointer hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
