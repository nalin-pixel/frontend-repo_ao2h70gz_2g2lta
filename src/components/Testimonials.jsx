import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'Their strategic insights helped us streamline operations and improve profitability within a quarter.',
    author: 'SMME Client',
  },
  {
    quote: 'Professional, thorough, and highly knowledgeable in South African compliance requirements.',
    author: 'Public Entity',
  },
  {
    quote: 'The financial modelling gave our investors the confidence to back our growth.',
    author: 'Start-up Founder',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400" />
          ))}
          <Star className="text-yellow-400" />
          <span className="ml-2 text-slate-300">4.0 average rating</span>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-white/0">
              <p className="text-slate-200">“{t.quote}”</p>
              <p className="mt-4 text-slate-400 text-sm">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
