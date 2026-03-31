import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X as Twitter, GitBranch as Github, Briefcase as Linkedin, Globe as Facebook } from "lucide-react"


export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 italic tracking-tight underline decoration-emerald-500 decoration-4 underline-offset-8">
              Stay ahead with Nexgent.
            </h2>
            <p className="text-slate-400 text-lg mb-8 italic">
              Join our newsletter for the latest updates on enterprise tools and business automation.
            </p>
            <div className="flex gap-3 max-w-md">
              <Input 
                className="bg-slate-800 border-slate-700 text-white rounded-xl h-12 italic" 
                placeholder="Enter your email" 
              />
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl px-8 italic tracking-tight">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end justify-center h-full">
            <span className="text-8xl md:text-[180px] font-black text-slate-800/10 italic leading-none select-none">
              NEXGENT
            </span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24 border-t border-slate-800 pt-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded bg-emerald-500" />
              <span className="text-xl font-bold tracking-tight">NEXGENT</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 italic">
              Empowering the next generation of businesses with elite enterprise tools.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="h-10 w-10 rounded-full border border-slate-800 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 italic text-emerald-400 uppercase tracking-widest text-xs">Products</h4>
            <ul className="space-y-4 text-slate-400 text-sm italic">
              <li><a href="#" className="hover:text-white transition-colors">Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collaboration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 italic text-emerald-400 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm italic">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 italic text-emerald-400 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm italic">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 italic text-emerald-400 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm italic">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-slate-500 text-xs font-medium italic">
          <p>© 2026 NexGent Inc. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
