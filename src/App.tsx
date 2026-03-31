import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { LogoCloud } from "./components/sections/LogoCloud"
import { FeaturesGrid } from "./components/sections/FeaturesGrid"
import { PowerSection } from "./components/sections/PowerSection"
import { AllInOneSection } from "./components/sections/AllInOneSection"
import { WhyChooseUs } from "./components/sections/WhyChooseUs"
import { Pricing } from "./components/sections/Pricing"
import { Testimonial } from "./components/sections/Testimonial"
import { FAQ } from "./components/sections/FAQ"

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <FeaturesGrid />
        <PowerSection />
        <AllInOneSection />
        <WhyChooseUs />
        <Pricing />
        <Testimonial />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
