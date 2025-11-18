export default function Insights() {
  const posts = [
    {
      title: 'Compliance Essentials for South African SMMEs',
      excerpt: 'Key statutory obligations and practical steps to stay compliant.',
    },
    {
      title: 'Building Investor-Ready Financial Models',
      excerpt: 'What funders look for and how to present your projections.',
    },
    {
      title: 'Operational Excellence: Turning Strategy into Execution',
      excerpt: 'Frameworks to close the gap between planning and delivery.',
    },
  ]

  return (
    <section id="insights" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Insights & Resources</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-white/0">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{p.excerpt}</p>
              <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm">Read more</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
