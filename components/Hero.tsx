export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-6">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 mt-32">
        {/* Silhouette representation */}
        <svg viewBox="0 0 200 200" className="w-[80vw] max-w-[800px] h-auto animate-float text-accent-blue" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20C88.95 20 80 28.95 80 40C80 51.05 88.95 60 100 60C111.05 60 120 51.05 120 40C120 28.95 111.05 20 100 20ZM100 70C60 70 20 85 10 90C5 92.5 0 97.5 0 105C0 110.5 4.5 115 10 115H30V190C30 195.5 34.5 200 40 200H70C75.5 200 80 195.5 80 190V140H120V190C120 195.5 124.5 200 130 200H160C165.5 200 170 195.5 170 190V115H190C195.5 115 200 110.5 200 105C200 97.5 195 92.5 190 90C180 85 140 70 100 70Z"/>
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue text-sm font-semibold tracking-wider mb-8 uppercase backdrop-blur-md">
          Identity meets Innovation
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight">
          EX10SIV <br />
          <span className="text-gradient">A Web10 Company</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl font-light">
          Reimagining digital interaction through unified identity, intelligent systems, and scalable innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <button className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Explore Ecosystem
          </button>
          <button className="px-8 py-4 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-all border border-white/20">
            View Phase 1
          </button>
          <button className="px-8 py-4 rounded-xl bg-transparent text-gray-300 font-semibold hover:text-white transition-all underline decoration-gray-500 underline-offset-4">
            Investor Access
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </div>
    </section>
  );
}
