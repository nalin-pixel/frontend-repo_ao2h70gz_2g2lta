export default function Sectors() {
  const sectors = [
    'Small & Medium Enterprises (SMMEs)',
    'Start-ups and emerging businesses',
    'Corporate enterprises',
    'Non-profit organisations',
    'Public sector & municipal entities (Emalahleni and Mpumalanga)',
  ]

  return (
    <section id="sectors" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Sectors We Support</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectors.map((s) => (
            <div key={s} className="rounded-xl border border-white/10 p-4 text-slate-200 bg-white/5">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
