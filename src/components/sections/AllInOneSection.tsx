import { Layout, BarChart, Users, Settings } from "lucide-react"

export const AllInOneSection = () => {
  const items = [
    { name: "Dashboard", icon: <Layout className="h-5 w-5" /> },
    { name: "Analytics", icon: <BarChart className="h-5 w-5" /> },
    { name: "Team Control", icon: <Users className="h-5 w-5" /> },
    { name: "Admin Setup", icon: <Settings className="h-5 w-5" /> },
  ]

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4 italic">Efficiency</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 italic">Everything You Need <br /> In One Place</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-16 italic">
          Centralize your operations with a unified platform that brings clarity and speed to your entire organization.
        </p>

        {/* Categories / Navigation like in the image */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {items.map((item) => (
            <div 
              key={item.name} 
              className="px-6 py-3 rounded-full border border-slate-800 bg-slate-800/50 flex items-center gap-3 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-pointer group"
            >
              <div className="text-emerald-400 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-sm font-semibold tracking-tight">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Large Dark Mockup */}
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute -inset-10 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative rounded-2xl border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden scale-110 md:scale-100">
             <img 
              src="/dashboard-dark.png" 
              alt="NexGent Platform Dark" 
              className="w-full h-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
