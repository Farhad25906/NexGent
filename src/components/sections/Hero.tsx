import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-emerald-200 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-100px] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="px-4 py-1.5 border-emerald-100 bg-emerald-50/50 text-emerald-700 rounded-full text-sm font-medium">
            ✨ Introducing NexGent 2.0
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
          Take Control of the Future <br /> 
          <span className="text-emerald-500 italic">With Nexgent</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed italic">
          "The fastest way to manage your business and finances with precision. <br />
          Experience the next generation of enterprise tools."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button size="lg" className="h-12 px-8 bg-black hover:bg-slate-800 text-white rounded-lg group">
            Get started 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 border-slate-200 hover:bg-slate-50 rounded-lg font-semibold">
            Watch Demo
          </Button>
        </div>

        {/* Hero Image / Dashboard Mockup */}
        <div className="relative mx-auto max-w-5xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white rounded-xl border border-slate-100 shadow-2xl overflow-hidden">
            <img 
              src="/hero-dashboard.png" 
              alt="NexGent Dashboard" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
