import { ArrowRight, User, ShieldCheck, Grid } from "lucide-react";

export default function EcosystemConnect() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How The Ecosystem Connects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A frictionless pipeline from human user to application access. Verify your identity once and ride the rails of the entire EX10SIV network.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-8 relative z-10">
          {/* User Node */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-4 glass shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <User className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-bold text-lg">Single User</h3>
            <p className="text-sm text-gray-500 text-center">A real human</p>
          </div>

          <ArrowRight className="w-8 h-8 text-gray-600 hidden md:block" />
          <div className="w-1 h-8 bg-gray-600 md:hidden" />

          {/* Identity Engine Node */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-3xl bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center mb-4 glow-blue relative">
              <ShieldCheck className="w-14 h-14 text-accent-blue" />
              <div className="absolute inset-0 rounded-3xl border border-accent-blue animate-pulse-slow"></div>
            </div>
            <h3 className="font-bold text-lg text-accent-blue">UNIVYAS Passport</h3>
            <p className="text-sm text-gray-400 text-center max-w-[150px]">Immutable Tier-3 Verification</p>
          </div>

          <ArrowRight className="w-8 h-8 text-gray-600 hidden md:block" />
          <div className="w-1 h-8 bg-gray-600 md:hidden" />

          {/* Application Node */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-accent-purple/10 border border-accent-purple/30 flex items-center justify-center mb-4 glow-purple">
              <Grid className="w-10 h-10 text-accent-purple" />
            </div>
            <h3 className="font-bold text-lg text-accent-purple">Multiple Apps</h3>
            <p className="text-sm text-gray-500 text-center" style={{ maxWidth: '150px' }}>Instant, trusted access everywhere</p>
          </div>
        </div>
      </div>
    </section>
  );
}
