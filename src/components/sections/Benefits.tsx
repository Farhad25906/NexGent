
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Brain, Users, RefreshCcw, Smartphone } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Reduce Mental Overload',
      description: 'Free up headspace and focus on what truly matters by organizing your thoughts into actionable tasks.',
      icon: Brain,
    },
    {
      title: 'Never Miss a Deadline',
      description: 'Get notified before deadlines slip, not after problems happen, ensuring everything stays on track.',
      icon: CheckCircle2,
    },
    {
      title: 'Work Better as a Team',
      description: 'Break down silos and collaborate effortlessly with unified communication and shared visibility.',
      icon: Users,
    },
    {
      title: 'Adapt to Any Workflow',
      description: "Customize boards, lists, and filters to match your team's unique way of working.",
      icon: RefreshCcw,
    },
    {
      title: 'Make Smarter Decisions',
      description: 'Gain deeper insights into progress and performance with advanced productivity analytics.',
      icon: TrendingUp,
    },
    {
      title: 'One Tool, One Workflow',
      description: 'Replace multiple disconnected tools with a single, powerful task management system.',
      icon: Smartphone,
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold text-dark mb-6 tracking-tight leading-[1.05]">
            Built For <span className="serif-italic">Growing Teams</span>
          </h2>
          <p className="text-dark/40 font-medium">Everything your team needs to stay focused and productive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-[#F7F8F9] border border-black/5 hover:border-brand/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 text-brand transform group-hover:scale-110 transition-transform shadow-sm">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 tracking-tight group-hover:text-brand transition-colors">{benefit.title}</h3>
              <p className="text-dark/50 font-medium leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
