import { Quote } from "lucide-react"

export const Testimonial = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Quote className="h-[600px] w-[600px] text-slate-900" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 italic">Success Stories</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 italic">What Our Client Say</h2>
        </div>

        <div className="max-w-4xl mx-auto px-8 py-16 bg-emerald-50/30 rounded-[40px] border border-emerald-100 flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full border-4 border-white shadow-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" 
              alt="Client" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-2xl md:text-3xl font-medium text-slate-800 mb-10 italic leading-relaxed">
            "NexGent has completely transformed how we handle our logistics. The real-time visibility and automated reporting have saved us hundreds of manual hours every month. It's truly the next generation."
          </p>
          <div>
            <h4 className="text-xl font-bold text-slate-900 italic tracking-tight">Johnathan Reeds</h4>
            <p className="text-slate-500 font-medium italic">CTO at Vertex Solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
