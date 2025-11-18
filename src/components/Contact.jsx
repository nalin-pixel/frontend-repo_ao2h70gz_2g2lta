export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact & Engagement</h2>
          <p className="mt-3 text-slate-300">We’re based in Emalahleni, Mpumalanga. Reach out for enquiries or to request a proposal.</p>
          <div className="mt-6 space-y-2 text-slate-200 text-sm">
            <p>Email: info@edfin.co.za</p>
            <p>Phone: +27 (0) 13 000 0000</p>
            <p>Address: Emalahleni, Mpumalanga, South Africa</p>
            <p>Office Hours: Mon–Fri, 08:00–17:00 SAST</p>
          </div>
          <div className="mt-6">
            <iframe title="Map" className="w-full h-64 rounded-xl border border-white/10" loading="lazy" src="https://www.google.com/maps?q=Emalahleni%20Mpumalanga&output=embed"></iframe>
          </div>
        </div>
        <form className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-white/0">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-300 text-sm">First Name</label>
              <input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="John" />
            </div>
            <div>
              <label className="text-slate-300 text-sm">Last Name</label>
              <input className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="Doe" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-slate-300 text-sm">Email</label>
              <input type="email" className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400" placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-slate-300 text-sm">Message</label>
              <textarea className="mt-1 w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 h-28" placeholder="Tell us about your needs..." />
            </div>
            <div className="sm:col-span-2">
              <button type="button" className="w-full px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium">Submit Enquiry</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
