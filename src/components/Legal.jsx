export default function Legal() {
  const items = [
    { title: 'Privacy Policy', id: 'privacy', content: 'We respect your privacy. Personal data is processed lawfully and transparently in alignment with POPIA.' },
    { title: 'Terms of Use', id: 'terms', content: 'Use of this website constitutes acceptance of our terms. Content is provided for informational purposes.' },
    { title: 'POPIA Compliance', id: 'popia', content: 'We adhere to the Protection of Personal Information Act (POPIA) requirements.' },
    { title: 'Disclaimer', id: 'disclaimer', content: 'All information is provided as general guidance and does not constitute financial advice.' },
  ]

  return (
    <section id="legal" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Legal Information</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {items.map((i) => (
            <div key={i.id} className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-white/0">
              <h3 className="text-white font-semibold">{i.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{i.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
