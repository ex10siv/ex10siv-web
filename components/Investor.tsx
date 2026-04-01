export default function Investor() {
  return (
    <section className="py-24 px-6 border-y border-white/10" id="investors">
      <div className="max-w-4xl mx-auto text-center glass-card p-10 md:p-16 rounded-3xl relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-[80px]"></div>

        <p className="uppercase tracking-widest text-sm font-semibold text-gray-400 mb-6">Strategic Opportunity</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Raising Pre-Seed</h2>
        
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 text-left md:text-center">
          EX10SIV is actively raising pre-seed capital to aggressively scale our infrastructure. With Featheral and QataQara already advancing into their MVP and trial phases, our primary utilization will aggressively target <strong className="text-white">PaySlap</strong>—the escrow-driven financial backbone of our entire ecosystem.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-left">
          <div className="bg-black/40 border border-white/5 p-4 rounded-xl">
            <h4 className="font-bold text-accent-blue mb-2">Build</h4>
            <p className="text-xs text-gray-400">Accelerated product development</p>
          </div>
          <div className="bg-black/40 border border-white/5 p-4 rounded-xl">
            <h4 className="font-bold text-accent-purple mb-2">Scale</h4>
            <p className="text-xs text-gray-400">Global infrastructure expansion</p>
          </div>
          <div className="bg-black/40 border border-white/5 p-4 rounded-xl">
            <h4 className="font-bold text-emerald-400 mb-2">Secure</h4>
            <p className="text-xs text-gray-400">Compliance and complex legal framing</p>
          </div>
          <div className="bg-black/40 border border-white/5 p-4 rounded-xl">
            <h4 className="font-bold text-white mb-2">Talent</h4>
            <p className="text-xs text-gray-400">Key systemic engineering hires</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
            Request Pitch Deck
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors glass">
            Schedule Discussion
          </button>
        </div>
      </div>
    </section>
  );
}
