import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Users, Zap, ShieldCheck } from "lucide-react"

export const FeaturesGrid = () => {
  const features = [
    {
      title: "Real-time sync",
      description: "Everything you do is synced across all devices in real-time. Never miss a beat.",
      icon: <Zap className="h-6 w-6 text-emerald-500" />,
      image: "/feature-1.png"
    },
    {
      title: "Collaborative Tools",
      description: "Work together with your team seamlessly. Share insights and take actions.",
      icon: <Users className="h-6 w-6 text-blue-500" />,
      image: "/feature-2.png"
    },
    {
      title: "Customizable Layouts",
      description: "Tailor your dashboard to fit your exact needs and workflow perfectly.",
      icon: <Layout className="h-6 w-6 text-purple-500" />,
      image: "/feature-3.png"
    },
    {
      title: "Enterprise Security",
      description: "Your data is protected by industry-leading security and encryption protocols.",
      icon: <ShieldCheck className="h-6 w-6 text-slate-500" />,
      image: "/feature-4.png"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 italic">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 italic">Step Up Your Game <br /> With Nexgent</h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic">
            Experience a suite of tools designed to propel your business forward with unparalleled efficiency and style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <CardHeader className="flex flex-row items-center gap-4 border-b border-slate-50">
                <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-white transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-slate-600 mb-6 text-sm italic">{feature.description}</p>
                <div className="aspect-video bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center p-4">
                   <div className="w-full h-full bg-emerald-50/50 rounded flex items-center justify-center border border-dashed border-emerald-200">
                      <span className="text-emerald-300 font-bold uppercase tracking-tighter text-4xl opacity-20">Visualization</span>
                   </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
