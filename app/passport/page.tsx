import Link from 'next/link';
import { ArrowLeft, Key, ShieldCheck, User, Fingerprint, Activity } from 'lucide-react';

export default function Passport() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 to-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Platform
        </Link>
        
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-black mb-2 tracking-tighter">Your <span className="text-gradient">Passport</span></h1>
          <p className="text-gray-400 text-sm tracking-wide">Unified Tier 3 Verified Identity</p>
        </div>

        {/* Passport Card */}
        <div className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent relative overflow-hidden mb-6 shadow-2xl">
          {/* Card internal glows */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-purple/20 blur-[50px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-[50px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Avatar Ring */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-accent rounded-full blur-[20px] opacity-20 animate-pulse-slow"></div>
              <div className="w-24 h-24 bg-[#0a0a0a] border-2 border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] rounded-full flex items-center justify-center relative z-10">
                <User className="w-10 h-10 text-gray-300" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-8 h-8 rounded-full border-4 border-[#0a0a0a] flex items-center justify-center z-20">
                <ShieldCheck className="w-4 h-4 text-[#0a0a0a]" />
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center space-x-2 text-emerald-400 mb-8 bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest">Network Active</span>
            </div>
            
            {/* ID Display */}
            <div className="w-full bg-black/80 border border-white/5 rounded-2xl p-5 mb-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite]"></div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-gray-500 uppercase tracking-widest flex items-center">
                  <Fingerprint className="w-3 h-3 mr-1" /> Passport ID
                </p>
                <span className="text-[10px] bg-accent-purple/20 text-accent-purple px-2 py-0.5 rounded border border-accent-purple/30">LOCKED</span>
              </div>
              <p className="font-mono text-[13px] sm:text-[15px] text-white tracking-[0.15em] break-all text-center py-2">
                YASXX-XXXXX-XXXXX-XXXXX-XXXXX
              </p>
            </div>
          </div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 gap-4">
          <button className="glass-card flex flex-col items-center justify-center py-4 rounded-2xl hover:bg-white/5 hover:-translate-y-1 transition-all group border border-white/5">
             <Key className="w-6 h-6 mb-2 text-gray-400 group-hover:text-accent transition-colors" />
             <span className="text-xs font-semibold text-gray-300">Cryptography</span>
          </button>
          <button className="glass-card flex flex-col items-center justify-center py-4 rounded-2xl hover:bg-white/5 hover:-translate-y-1 transition-all group border border-white/5">
             <Activity className="w-6 h-6 mb-2 text-gray-400 group-hover:text-emerald-400 transition-colors" />
             <span className="text-xs font-semibold text-gray-300">Trust Score</span>
          </button>
        </div>

      </div>
    </main>
  );
}
