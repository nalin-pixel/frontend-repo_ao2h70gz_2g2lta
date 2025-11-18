import { CheckCircle2, TrendingUp, LineChart, ShieldCheck, BookOpen, Layers } from 'lucide-react'

const services = [
  {
    title: 'Business Management Consulting',
    items: [
      'Strategy development & execution',
      'Operational performance optimisation',
      'Organisational assessments',
      'Business turnaround strategies',
    ],
    icon: TrendingUp,
  },
  {
    title: 'Financial Advisory & Planning',
    items: [
      'Financial modelling & forecasting',
      'Cash flow and liquidity management',
      'Budget analysis & cost-control strategies',
      'Investment readiness assessments',
    ],
    icon: LineChart,
  },
  {
    title: 'Corporate Governance & Compliance',
    items: [
      'Regulatory compliance support',
      'Risk management frameworks',
      'Governance structures & policy development',
    ],
    icon: ShieldCheck,
  },
  {
    title: 'Training & Capacity Development',
    items: [
      'Business development training',
      'Financial literacy workshops',
      'Customised corporate training programmes',
    ],
    icon: BookOpen,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Comprehensive solutions that empower organisations to grow sustainably and operate with confidence.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map(({ title, items, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
