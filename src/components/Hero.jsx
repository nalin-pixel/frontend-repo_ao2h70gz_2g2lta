import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs mb-4">
            Strategic Business & Financial Consulting
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Strategic Business & Financial Consulting for Sustainable Growth
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-2xl">
            We combine management consulting, financial advisory, and compliance expertise to help organisations scale with confidence across South Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#booking" className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow">
              Schedule a Consultation
            </a>
            <a href="#services" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
    </section>
  )
}
