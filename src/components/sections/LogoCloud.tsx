export const LogoCloud = () => {
  const logos = [
    { name: "Forge", icon: "🔥" },
    { name: "Vertex", icon: "🌐" },
    { name: "Velocity", icon: "⚡" },
    { name: "Echo", icon: "📢" },
    { name: "Lumina", icon: "💡" },
  ]

  return (
    <section className="py-12 border-y border-slate-100 bg-slate-50/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Trusted by the world's most innovative teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 group transition-opacity hover:opacity-100">
              <span className="text-2xl">{logo.icon}</span>
              <span className="text-xl font-bold tracking-tight text-slate-800">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
