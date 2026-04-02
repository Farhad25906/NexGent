
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      price: billingCycle === 'monthly' ? '$0' : '$0',
      description: 'Ideal for individuals or small teams just getting started.',
      features: ['Unlimited Tasks', 'Basic Analytics', '3 Team Members', 'Core Integrations'],
      cta: 'Start Free Trial',
      highlighted: false
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? '$29' : '$19',
      description: 'Best for growing teams needing advanced productivity.',
      features: ['Priority Support', 'Advanced Analytics', 'Unlimited Members', 'Custom Workflows', 'API Access'],
      cta: 'Get Started',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Built for large-scale operations and complex workflows.',
      features: ['SAML SSO', 'Custom Security', 'Dedicated Manager', 'Unlimited Workspace', '24/7 Support'],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-7xl font-extrabold text-dark mb-6 tracking-tight leading-[1.05]">
            Plans That <span className="serif-italic">Fit Your Team</span>
          </h2>
          <p className="text-dark/40 font-medium">Simple, transparent pricing for teams of all sizes.</p>
          
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-dark' : 'text-dark/30'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 bg-dark rounded-full relative p-1 transition-all"
            >
              <div className={`w-6 h-6 bg-brand rounded-full transition-all ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-dark' : 'text-dark/30'}`}>Yearly <span className="text-brand text-[10px] ml-1">SAVE 35%</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] border ${
                plan.highlighted 
                  ? 'bg-dark text-white border-brand/50 shadow-2xl shadow-brand/10' 
                  : 'bg-white border-black/5 text-dark'
              } flex flex-col h-full`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-sm font-medium opacity-50">/month</span>}
                </div>
              </div>
              
              <p className={`text-sm font-medium mb-8 leading-relaxed ${plan.highlighted ? 'text-white/60' : 'text-dark/50'}`}>
                {plan.description}
              </p>
              
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? 'bg-brand' : 'bg-brand/10 text-brand'}`}>
                      <Check size={12} strokeWidth={3} className={plan.highlighted ? 'text-white' : ''} />
                    </div>
                    <span className="text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-4 rounded-full font-bold text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
                plan.highlighted 
                  ? 'bg-brand text-white hover:bg-brand/90' 
                  : 'bg-dark text-white hover:bg-brand'
              }`}>
                {plan.cta} <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
