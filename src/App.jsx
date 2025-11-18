import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Company from './components/Company'
import Services from './components/Services'
import Sectors from './components/Sectors'
import Testimonials from './components/Testimonials'
import Insights from './components/Insights'
import Contact from './components/Contact'
import Booking from './components/Booking'
import Legal from './components/Legal'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent_70%)]" />
          <div className="relative">
            <Company />
            <Services />
            <Sectors />
            <Testimonials />
            <Insights />
            <Contact />
            <Booking />
            <Legal />
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} Edfin Financial Services (Pty) Ltd. All rights reserved.
      </footer>
    </div>
  )
}

export default App
