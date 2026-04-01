import { Shield, Key } from "lucide-react";

export default function Univyas() {
  const pillars = [
    {
      icon: <Key className="w-8 h-8 text-accent-blue" />,
      title: "One Identity",
      desc: "One user, one global Passport ID. Eliminate password fatigue and duplicate profiles forever."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: "Immutable Trust",
      desc: "A tiered verification system anchored to real-world validation. Security isn't an afterthought; it's the foundation."
    },
    {
      icon: <svg className="w-8 h-8 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: "Ecosystem Continuity",
      desc: "Seamlessly jump between EX10SIV applications. Your identity, reputation, and preferences move with you."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#050505]" id="univyas">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-accent-blue uppercase tracking-[0.2em] text-sm font-bold mb-4">Core Architecture</p>
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          EX10SIV <span className="text-accent-purple">UNIVYAS</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
          The central nervous system of our unified internet. A powerful passport-based identity engine that creates a borderless, high-trust digital economy.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl border-t border-white/5">
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
