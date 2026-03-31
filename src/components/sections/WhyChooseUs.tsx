import { Shield, Rocket, Target } from "lucide-react"

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 italic">Advantage</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 italic">Why Choose Nexgent?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Dark */}
          <div className="bg-slate-900 rounded-3xl p-10 text-white flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Rocket className="h-32 w-32 rotate-12 translate-x-8 -translate-y-8" />
            </div>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 italic tracking-tight">Rapid Deployment</h3>
              <p className="text-slate-400 mb-8 italic">
                Get up and running in minutes, not days. Our intuitive setup process is designed for speed.
              </p>
            </div>
          </div>

          {/* Card 2 - Light/Glass */}
          <div className="bg-emerald-50 rounded-3xl p-10 border border-emerald-100 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="h-32 w-32 -rotate-12 translate-x-8 -translate-y-8 text-emerald-900" />
            </div>
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-white border border-emerald-100 flex items-center justify-center mb-6 shadow-sm">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-emerald-900 mb-4 italic tracking-tight">Security First</h3>
              <p className="text-emerald-800/60 mb-8 italic">
                We prioritize your data privacy with end-to-end encryption and regular security audits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
