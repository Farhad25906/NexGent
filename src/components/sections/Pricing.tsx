import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams and startups.",
      features: ["Up to 5 users", "Basic analytics", "Email support", "1GB storage"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Standard",
      price: "$99",
      description: "Our most popular plan for growing businesses.",
      features: ["Up to 20 users", "Advanced analytics", "24/7 Priority support", "10GB storage", "Custom integrations"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Pro",
      price: "$249",
      description: "Enterprise-grade features for large scale operations.",
      features: ["Unlimited users", "Custom reporting", "Dedicated account manager", "Unlimited storage", "SLA guarantee"],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 italic">Investment</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 italic text-center">Flexible Pricing Plans</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic">
            Choose the plan that's right for your business and start scaling with NexGent today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all hover:-translate-y-2 ${
                plan.popular 
                  ? "bg-slate-900 text-white shadow-2xl scale-105 z-10" 
                  : "bg-white border border-slate-100 text-slate-900 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 rounded-full text-xs font-bold uppercase tracking-widest italic">
                  Most Popular
                </div>
              )}
              
              <div>
                <h3 className="text-2xl font-bold mb-2 italic tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>/mo</span>
                </div>
                <p className={`text-sm mb-8 italic ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium italic">
                      <Check className={`h-4 w-4 ${plan.popular ? "text-emerald-400" : "text-emerald-500"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                size="lg" 
                className={`w-full rounded-xl font-bold italic tracking-tight ${
                  plan.popular 
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white" 
                    : "bg-slate-900 hover:bg-black text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
