export default function Booking() {
  return (
    <section id="booking" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Consultation Booking</h2>
            <p className="mt-3 text-slate-300">Choose a preferred option and we’ll confirm your session.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {['Virtual (30 mins)','Virtual (60 mins)','In-person (Emalahleni)','Custom workshop'].map((p) => (
                <div key={p} className="rounded-xl border border-white/10 p-4 bg-white/5 text-slate-200">
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-white/0">
            <form className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-300 text-sm">Full Name</label>
                <input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-slate-300 text-sm">Email</label>
                <input type="email" className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-slate-300 text-sm">Preferred Date</label>
                <input type="date" className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400" />
              </div>
              <div>
                <label className="text-slate-300 text-sm">Mode</label>
                <select className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white">
                  <option>Virtual</option>
                  <option>In-person</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-slate-300 text-sm">Notes</label>
                <textarea className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 h-28" placeholder="Briefly describe your needs..." />
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="w-full px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium">Request Booking</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
