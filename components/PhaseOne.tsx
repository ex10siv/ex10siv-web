export default function PhaseOne() {
  const apps = [
    {
      name: "Featheral",
      theme: "border-pink-500/30",
      glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
      desc: "A mobile-first booking and scheduling platform specifically engineered for Beauty Service Providers (BSPs) and their premium clientele.",
      points: ["Structured booking system", "MAT protocol (Mutually Agreed Terms)", "No direct messaging — strictly controlled interaction model", "Tailored exclusively for Nigeria’s service economy"]
    },
    {
      name: "QATAQARA",
      subtitle: "(QQ)",
      theme: "border-orange-500/30",
      glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
      desc: "Think eBay meets Amazon for Africa. A comprehensive marketplace engineered to capture both informal and structured trading across African markets.",
      points: ["Built for real African market behavior", "Reputation-driven transactional integrity", "Empowers hustlers, students, traders, and large merchants"]
    },
    {
      name: "PaySlap",
      theme: "border-emerald-500/30",
      glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      desc: "Africa’s own PayPal—built explicitly for control, unshakeable trust, and escrow-driven transactions.",
      points: ["Escrow-focused payment ecosystem", "SLAP formula (highly secure release mechanism)", "Designed to systematically eradicate fraud in P2P transactions"]
    }
  ];

  return (
    <section className="py-32 px-6" id="phase1">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Phase 1 — <span className="text-gray-400">Foundational Platforms</span></h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {apps.map((app, idx) => (
            <div key={idx} className={`glass-card rounded-2xl p-8 border ${app.theme} ${app.glow} transition-all duration-300 flex flex-col h-full`}>
              <h3 className="text-3xl font-black tracking-tight mb-2">
                {app.name} {app.subtitle && <span className="text-gray-500 font-normal">{app.subtitle}</span>}
              </h3>
              <p className="text-gray-300 mb-8 min-h-[80px] leading-relaxed">{app.desc}</p>
              
              <div className="mt-auto">
                <ul className="space-y-4">
                  {app.points.map((pt, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-400">
                      <span className="text-accent-blue mr-3 mt-1">✦</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
