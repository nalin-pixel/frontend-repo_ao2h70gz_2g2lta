export default function Company() {
  return (
    <section id="company" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Company Profile</h2>
            <p className="mt-4 text-slate-300">
              Edfin Financial Services (Pty) Ltd is a professional consulting firm focused on enabling sustainable growth for businesses across South Africa. We partner with SMMEs, corporates, non-profits, and public entities to deliver measurable results through strategy, finance, and governance.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 p-4">
                <h4 className="text-white font-semibold">Mission</h4>
                <p className="text-slate-300 text-sm mt-1">Empower organisations with strategic insight, financial clarity, and robust governance to achieve long-term impact.</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <h4 className="text-white font-semibold">Vision</h4>
                <p className="text-slate-300 text-sm mt-1">To be a trusted partner for sustainable business performance and compliance excellence.</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-white font-semibold">Core Values</h4>
              <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-slate-200">
                <li>Integrity</li>
                <li>Excellence</li>
                <li>Accountability</li>
                <li>Innovation</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 p-6 bg-gradient-to-br from-white/5 to-white/0">
              <h4 className="text-white font-semibold">Accreditations & Compliance</h4>
              <ul className="mt-3 text-slate-300 space-y-2 text-sm">
                <li>CIPC Registered Company</li>
                <li>Tax Compliant (SARS)</li>
                <li>Industry certifications and professional memberships</li>
              </ul>
              <div className="mt-6">
                <h4 className="text-white font-semibold">Leadership Team</h4>
                <p className="text-slate-300 text-sm mt-1">Seasoned professionals with credentials across finance, strategy, and governance. Detailed profiles can be expanded as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
