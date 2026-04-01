export default function About() {
  return (
    <section className="py-24 px-6 relative" id="about">
      <div className="max-w-5xl mx-auto relative z-10 glass-card p-8 md:p-16 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What is <span className="text-gradient">Web10?</span>
            </h2>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              We define Web10 not by technical jargon, but by the ultimate fusion of <strong className="text-white font-medium">Identity, Commerce, and Trust</strong>. It’s a forward-looking paradigm where the ecosystem adapts to the user, not the other way around.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-2 border-red-500/50 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-200">The Problem: Fragmentation</h3>
              <p className="text-gray-500">
                Current digital systems are broken. Users endlessly recreate accounts, trust is constantly reset, and platforms operate in fragile silos.
              </p>
            </div>
            
            <div className="border-l-2 border-accent-blue pl-6 py-2 glow-blue">
              <h3 className="text-xl font-semibold mb-2 text-white">The Solution: Unification</h3>
              <p className="text-gray-300">
                EX10SIV unifies identity across an entire ecosystem. You verify once. You carry your reputation everywhere. Interaction becomes seamless, secure, and infinitely scalable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
