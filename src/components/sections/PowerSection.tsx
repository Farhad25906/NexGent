import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export const PowerSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div>
              <p className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 italic">Expertise</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight italic">
                The Power to Win <br /> Your Best Results
              </h2>
              <p className="text-slate-600 italic">
                We provide the infrastructure, you provide the vision. Together, we build something extraordinary.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Advanced predictive analytics",
                "Automated workflow engine",
                "Seamless API integration",
                "Custom report generator"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg">
              Explore All Features
            </Button>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-emerald-500/5 rounded-full blur-3xl" />
            <div className="relative bg-white p-4 rounded-2xl border border-slate-200 shadow-xl overflow-hidden group">
               <img 
                src="/dashboard-dark.png" 
                alt="Detailed Dashboard" 
                className="w-full h-auto rounded-lg transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating tags like in the image */}
              <div className="absolute top-1/4 -left-8 bg-black text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-bounce">
                🚀 Performance Boost
              </div>
              <div className="absolute bottom-1/3 -right-8 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-pulse">
                ✅ Task Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
