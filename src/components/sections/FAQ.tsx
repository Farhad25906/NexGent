import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Can I use Nexgent for team collaboration?',
      answer: "Yes, Nexgent is designed for teams. Collaborate securely across projects, assign tasks, and track progress effortlessly."
    },
    {
      question: 'Can I customize workflows and Nexgent?',
      answer: "Absolutely. Our platform is highly flexible, allowing you to custom-fit Nexgent to your team's specific workflow and processes."
    },
    {
      question: 'Does Nexgent support integrations?',
      answer: "We support over 200+ integrations with your favorite tools like Slack, GitHub, and Figma to keep everything in sync."
    },
    {
      question: 'Can I upgrade or downgrade my plan later?',
      answer: "Yes, you can change your plan at any time from your account settings. Changes take effect according to your billing cycle."
    },
    {
      question: 'Do I need a credit card to get started?',
      answer: "No. You can start your 14-day free trial with just an email – no credit card required to explore the platform."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Header */}
          <div className="relative">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 bg-[#F7F8F9] border border-black/10 px-4 py-2 rounded-full mb-8 shadow-sm"
            >
              <HelpCircle size={14} className="text-dark/40" />
              <span className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">FAQ</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-extrabold text-dark mb-8 tracking-tight leading-[1.05]"
            >
              Got <br /> <span className="serif-italic">Questions?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-dark/40 font-medium max-w-sm mb-12 leading-relaxed"
            >
              Everything you need to know before getting started. Got questions? Let's clear things up.
            </motion.p>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-[#F7F8F9] rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:border-brand/20 transition-all">
      <button
        onClick={onClick}
        className="w-full p-8 flex items-center justify-between text-left group"
      >
        <span className="text-base md:text-lg font-bold tracking-tight text-dark group-hover:text-brand transition-colors">{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-dark text-white' : 'bg-black/5 text-dark'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 text-dark/40 font-medium leading-relaxed max-w-xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
