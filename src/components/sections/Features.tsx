import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Bell, Layout, Layers, BarChart3, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="p-8 rounded-[2rem] bg-white border border-black/5 hover:border-brand/20 transition-all duration-300 group card-glow"
  >
    <div className="w-14 h-14 rounded-2xl bg-[#F7F8F9] flex items-center justify-center text-dark mb-6 group-hover:bg-brand group-hover:text-white transition-all transform group-hover:rotate-6">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-dark mb-3 tracking-tight">{title}</h3>
    <p className="text-dark/50 font-medium leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const Features = () => {
  const mainFeatures = [
    {
      icon: Layout,
      title: 'Power Up Your Projects',
      description: 'Simplify planning, enhance collaboration, and increase productivity with Nexgent.',
      delay: 0.1
    },
    {
      icon: Calendar,
      title: 'Calendar & Deadlines',
      description: 'Visualize deadlines with calendar and timeline views for clearer planning and time management.',
      delay: 0.2
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Comment, tag teammates, share files, and stay aligned in real time across tasks.',
      delay: 0.3
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Never miss a task with real-time reminders and alerts that keep you on schedule.',
      delay: 0.4
    }
  ];

  return (
    <section id="features" className="section-padding bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-6xl font-extrabold text-dark leading-[1.05] tracking-tight">
               Powerful Features To <br />
               <span className="serif-italic text-dark">Grow Smarter</span>
             </h2>
          </div>
          <p className="max-w-xs text-dark/40 font-medium text-sm leading-relaxed mb-4">
            Everything you need to manage tasks and grow your business in one single platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {mainFeatures.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

        {/* How it works section */}
        <div className="bg-dark rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-brand/5 blur-[120px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                Easily request tasks, collaborate with teams, and get work <span className="serif-italic">Done.</span>
              </h2>
              <p className="text-lg text-white/40 font-medium mb-10 leading-relaxed max-w-md">
                A seamless workflow that keeps everyone on the same page and delivers results that exceed expectations.
              </p>
              <button className="btn-primary">
                How It Works <ArrowRight size={20} />
              </button>
            </div>

            <div className="relative">
               <div className="bg-[#111111] border border-white/5 rounded-[2rem] p-4 shadow-2xl">
                  <img 
                    src="/images/process.png" 
                    alt="Process Dashboard" 
                    className="rounded-2xl w-full h-auto"
                  />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
